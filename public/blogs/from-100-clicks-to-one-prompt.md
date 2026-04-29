---
title: "From 100 Clicks to One Prompt: Building a Natural Language Interface for My Entire Web App"
date: "2026-04-29"
tags: ["natural-language-interface", "langchain", "langgraph", "mcp", "llm", "ai-agents", "system-design", "chatbot", "distributed-systems"]
category: "Technical"
readTime: "12 min"
slug: "from-100-clicks-to-one-prompt"
excerpt: "How I replaced a 100-click web workflow with a single natural language prompt — using LangChain, LangGraph, MCP, and Redis to build a production-ready AI-powered interface."
---

# From 100 Clicks to One Prompt: Building a Natural Language Interface for My Entire Web App

Modern web applications are incredibly powerful. They handle complex business logic, manage intricate data flows, and serve millions of users. But there's a growing problem hiding behind every dropdown, filter, and multi-step wizard: **the user experience is drowning in clicks.**

What should be a simple task — "book me a trip" — becomes a gauntlet. Navigate to the search page. Select departure city from a dropdown of 50 options. Pick dates from a calendar widget. Apply price filters. Sort by rating. Scroll through results. Open a detail page. Add to cart. Fill a booking form. Confirm payment.

That's not a workflow. That's an endurance test.

What if, instead, a user could just type: *"Book me the best IPL package under 2 lakhs with Mumbai departure"* — and the entire workflow executed itself?

That's exactly what I built. Here's how.

---

## The Problem: Click Debt in Modern Web Apps

Every feature added to a web app comes with a hidden cost: **interaction complexity**. Each new filter, each new form field, each new page adds cognitive load on the user. Over time, the accumulation of these interactions creates what I call *click debt* — the growing gap between what a user wants and how many actions they need to take to get it.

Consider a typical travel booking flow on a platform like ours:

1. Navigate to the packages page (2 clicks)
2. Select destination category (1 click)
3. Choose departure city from a dropdown (2 clicks)
4. Set date range with a calendar picker (4-6 clicks)
5. Apply budget filter (2 clicks)
6. Sort by rating or relevance (1 click)
7. Scroll through paginated results, open individual cards for details (5-10 clicks)
8. Compare 2-3 packages across tabs (4-6 clicks)
9. Select a package, proceed to booking (2 clicks)
10. Fill in traveler details form (10-15 clicks + typing)
11. Select add-ons and preferences (3-5 clicks)
12. Review and confirm (2 clicks)

**Total: 35-55 clicks minimum.** For a power user who knows the interface. For a first-time user, it's closer to 80-100 clicks with backtracking, wrong turns, and "wait, where was that option again?"

This isn't a failure of design — it's a structural limitation of the form-and-filter paradigm. No amount of UX polish can eliminate the fundamental problem: **the user is translating their intent into a sequence of UI actions**, and that translation is lossy and expensive.

---

## The Vision: Intent Over Interaction

The core insight is simple: **users don't want to navigate. They want outcomes.**

A natural language interface (NLI) flips the traditional model. Instead of:

> UI actions → System interprets → Outcome

We move to:

> User intent (natural language) → AI interprets → System executes → Outcome

The user says what they want. The system figures out how to get it done.

This isn't about slapping a chatbot on top of an existing app. It's about building a genuine **conversational layer** that understands context, maintains state across turns, asks clarifying questions when needed, and orchestrates multiple backend services to fulfill the user's request — all while confirming before taking irreversible actions.

The vision: every feature in the web app should be accessible through a single text input. Not as a gimmick, but as a first-class interaction paradigm.

---

## Architecture Overview

Here's the high-level system design:

```
User
  ↓
Chat UI (React + WebSocket)
  ↓
Agent Layer (LangChain + LangGraph)
  ↓
MCP Server (API Abstraction Layer)
  ↓
Backend Services (REST APIs)
  ↓
Response → Chat UI
```

Each layer has a clear responsibility:

- **Chat UI**: The conversational interface — streaming responses, rich cards (package details, booking confirmations), input parsing, and context persistence across sessions.
- **Agent Layer**: The brain. Uses LangChain for tool orchestration and LangGraph for multi-step, conditional, stateful workflows. Decides which tools to call, in what order, and whether to ask the user for clarification.
- **MCP Server**: The hands. Implements the Model Context Protocol to expose backend APIs as structured tools that the LLM can invoke. Handles authentication, rate limiting, input validation, and error translation.
- **Backend Services**: The existing REST APIs — unchanged. The MCP layer wraps them, but the underlying services don't know (or care) that an LLM is calling them.
- **Redis**: The memory. Stores session state, conversation history, user preferences, and action logs. Enables multi-turn conversations and context recovery.

Let's walk through each layer in detail.

---

## MCP: Making APIs LLM-Friendly

Here's the fundamental challenge: **LLMs can't meaningfully call raw REST APIs.** A `GET /api/v2/packages?dest=goa&budget_max=200000&departure=mumbai` endpoint is perfectly fine for a frontend client, but an LLM needs structured, well-documented tools with clear input schemas and predictable output formats.

This is where the **Model Context Protocol (MCP)** comes in. MCP provides a standardized way to expose capabilities (tools) to LLMs. Instead of handing the LLM a list of API endpoints, we expose a curated set of tools with defined schemas, descriptions, and validation rules.

### Defining an MCP Tool

Here's how we wrap a package search API as an MCP tool:

```python
from mcp.server import Server
from mcp.types import Tool, TextContent
from pydantic import BaseModel, Field

class PackageSearchInput(BaseModel):
    destination: str | None = Field(
        default=None,
        description="Destination or region name (e.g., 'Goa', 'Rajasthan')"
    )
    departure_city: str | None = Field(
        default=None,
        description="City of departure (e.g., 'Mumbai', 'Delhi')"
    )
    budget_max: float | None = Field(
        default=None,
        description="Maximum budget in INR (e.g., 200000 for 2 lakhs)"
    )
    date_from: str | None = Field(
        default=None,
        description="Start date in YYYY-MM-DD format"
    )
    date_to: str | None = Field(
        default=None,
        description="End date in YYYY-MM-DD format"
    )
    sort_by: str | None = Field(
        default=None,
        description="Sort preference: 'price_asc', 'rating_desc', 'relevance'"
    )
    limit: int = Field(
        default=5,
        description="Maximum number of results to return (1-20)"
    )

class PackageSearchOutput(BaseModel):
    packages: list[dict]
    total_count: int
    filters_applied: dict

mcp_server = Server("travel-assistant")

@mcp_server.tool(
    name="search_packages",
    description=(
        "Search for travel/tour packages with flexible filters. "
        "Supports filtering by destination, departure city, budget, and dates. "
        "Returns package summaries with pricing, itinerary highlights, and ratings."
    ),
    input_model=PackageSearchInput,
    output_model=PackageSearchOutput,
)
async def search_packages(input: PackageSearchInput) -> PackageSearchOutput:
    # Translate tool input to API query parameters
    params = {}
    if input.destination:
        params["dest"] = input.destination
    if input.departure_city:
        params["departure"] = input.departure_city
    if input.budget_max:
        params["budget_max"] = int(input.budget_max)
    if input.date_from:
        params["date_from"] = input.date_from
    if input.date_to:
        params["date_to"] = input.date_to
    if input.sort_by:
        params["sort"] = input.sort_by
    params["limit"] = min(input.limit, 20)

    response = await http_client.get(
        "https://api.ourplatform.com/v2/packages",
        params=params,
        headers={"Authorization": f"Bearer {SERVICE_TOKEN}"}
    )
    response.raise_for_status()
    data = response.json()

    return PackageSearchOutput(
        packages=data["results"][:input.limit],
        total_count=data["total"],
        filters_applied=params,
    )
```

### Why MCP Over Raw Function Calling?

You might ask: why not just define Python functions and pass them to the LLM directly? Three reasons:

1. **Standardization**: MCP provides a protocol-level contract between tools and agents. Tools can be shared across different agent implementations without rewriting.
2. **Separation of Concerns**: The MCP server runs as a separate process. It handles its own auth, rate limiting, and error translation independently of the agent. This means you can update tool behavior without redeploying the agent.
3. **Safety Boundary**: MCP tools define explicit input/output schemas. The LLM can't call arbitrary endpoints — it can only invoke the tools exposed by the MCP server. This is a critical guardrail in production.

Here's the full MCP server setup with multiple tools:

```python
from mcp.server import Server
from mcp.types import Tool, TextContent
from pydantic import BaseModel, Field

mcp_server = Server("travel-assistant")

# --- Tool: Search Packages ---
# (search_packages defined above)

# --- Tool: Get Package Details ---
class PackageDetailInput(BaseModel):
    package_id: str = Field(description="The unique package identifier")

@mcp_server.tool(
    name="get_package_details",
    description=(
        "Get full details for a specific travel package including "
        "complete itinerary, inclusions, exclusions, cancellation policy, "
        "and available departure dates."
    ),
    input_model=PackageDetailInput,
)
async def get_package_details(input: PackageDetailInput) -> dict:
    response = await http_client.get(
        f"https://api.ourplatform.com/v2/packages/{input.package_id}",
        headers={"Authorization": f"Bearer {SERVICE_TOKEN}"}
    )
    response.raise_for_status()
    return response.json()

# --- Tool: Create Booking ---
class CreateBookingInput(BaseModel):
    package_id: str = Field(description="Package to book")
    traveler_name: str = Field(description="Primary traveler full name")
    traveler_email: str = Field(description="Contact email")
    traveler_phone: str = Field(description="Contact phone number")
    departure_date: str = Field(description="Preferred departure date (YYYY-MM-DD)")
    num_travelers: int = Field(default=1, description="Number of travelers")
    special_requests: str | None = Field(default=None, description="Any special requests or notes")

@mcp_server.tool(
    name="create_booking",
    description=(
        "Create a new booking for a travel package. This is a WRITE operation — "
        "always confirm with the user before executing. Requires traveler details "
        "and a valid package ID."
    ),
    input_model=CreateBookingInput,
)
async def create_booking(input: CreateBookingInput) -> dict:
    payload = input.model_dump()
    response = await http_client.post(
        "https://api.ourplatform.com/v2/bookings",
        json=payload,
        headers={"Authorization": f"Bearer {SERVICE_TOKEN}"}
    )
    response.raise_for_status()
    return response.json()

# --- Tool: Get User Bookings ---
class UserBookingsInput(BaseModel):
    user_id: str = Field(description="User identifier")
    status: str | None = Field(
        default=None,
        description="Filter by status: 'confirmed', 'pending', 'cancelled'"
    )

@mcp_server.tool(
    name="get_user_bookings",
    description="Retrieve booking history for a user, optionally filtered by status.",
    input_model=UserBookingsInput,
)
async def get_user_bookings(input: UserBookingsInput) -> dict:
    params = {"user_id": input.user_id}
    if input.status:
        params["status"] = input.status
    response = await http_client.get(
        "https://api.ourplatform.com/v2/bookings",
        params=params,
        headers={"Authorization": f"Bearer {SERVICE_TOKEN}"}
    )
    response.raise_for_status()
    return response.json()

if __name__ == "__main__":
    import asyncio
    asyncio.run(mcp_server.run())
```

With this, the LLM has a clean, structured interface to our backend — no raw HTTP, no guesswork about parameter names, no ambiguity about what each tool does.

---

## Building the Agent: LangChain + LangGraph

A simple LangChain chain calls a tool and returns a result. That works for toy demos. Real workflows need more:

- **Conditional routing**: After searching packages, should we show results or ask for clarification?
- **State management**: What has the user already told us? What are we still missing?
- **Multi-step orchestration**: Search → compare → confirm → book. Each step depends on the previous.
- **Human-in-the-loop**: Before booking, we must confirm with the user. This means pausing execution, waiting for input, and resuming.

**LangGraph** provides exactly this. It models the agent as a **stateful graph** — nodes are processing steps, edges are transitions (possibly conditional), and state persists across the entire workflow.

### Defining the Agent State

```python
from typing import TypedDict, Annotated, Literal
from langgraph.graph import StateGraph, END
from langgraph.checkpoint.memory import MemoryCheckpoint
import operator

class AgentState(TypedDict):
    messages: list[dict]                    # Conversation history
    user_intent: str | None                 # Parsed user intent
    search_results: list[dict] | None       # Package search results
    selected_package: dict | None           # Package chosen by user
    booking_confirmed: bool                 # Whether user confirmed booking
    booking_result: dict | None             # Booking API response
    awaiting_input: bool                    # Whether we're waiting for user
    next_action: str | None                 # Next node to route to
```

### Building the Graph

```python
from langchain_openai import ChatOpenAI
from langchain_core.messages import HumanMessage, SystemMessage

llm = ChatOpenAI(model="gpt-4o", temperature=0.1)

# --- Node: Parse Intent ---
async def parse_intent(state: AgentState) -> dict:
    """Extract structured intent from user message."""
    last_message = state["messages"][-1]["content"]

    prompt = [
        SystemMessage(content="""You are an intent parser for a travel booking assistant.
Extract the user's intent and any mentioned parameters from their message.

Return a JSON object with:
- intent: one of "search", "book", "compare", "check_booking", "general_question"
- params: any extracted parameters (destination, budget, departure_city, dates, etc.)
- clarification_needed: list of missing required parameters

If the intent is ambiguous, set intent to the most likely one and flag clarification."""),
        HumanMessage(content=last_message),
    ]

    response = await llm.ainvoke(prompt)
    import json
    parsed = json.loads(response.content)

    next_action = "clarify" if parsed.get("clarification_needed") else "search"
    if parsed.get("intent") == "book" and state.get("selected_package"):
        next_action = "confirm_booking"
    elif parsed.get("intent") == "check_booking":
        next_action = "fetch_bookings"

    return {
        "user_intent": parsed["intent"],
        "next_action": next_action,
        "awaiting_input": False,
    }

# --- Node: Search ---
async def search_packages_node(state: AgentState) -> dict:
    """Call the search_packages MCP tool."""
    # Extract search params from conversation context
    last_message = state["messages"][-1]["content"]

    prompt = [
        SystemMessage(content="""Given the user's message and conversation context,
extract search parameters for the search_packages tool.
Return a JSON object with: destination, departure_city, budget_max, date_from, date_to, sort_by, limit.
Only include fields that are specified or can be reasonably inferred."""),
        HumanMessage(content=last_message),
    ]

    response = await llm.ainvoke(prompt)
    import json
    search_params = json.loads(response.content)

    # Call MCP tool
    from mcp_client import call_tool
    results = await call_tool("search_packages", search_params)

    return {
        "search_results": results["packages"],
        "next_action": "present_results",
    }

# --- Node: Present Results ---
async def present_results(state: AgentState) -> dict:
    """Format search results for the user."""
    packages = state.get("search_results", [])
    if not packages:
        response_text = "I couldn't find any packages matching your criteria. Could you try broadening your search?"
    else:
        lines = ["Here are the packages I found:\n"]
        for i, pkg in enumerate(packages[:5], 1):
            lines.append(
                f"**{i}. {pkg['name']}**\n"
                f"   💰 ₹{pkg['price']:,} | ⭐ {pkg['rating']}/5 | "
                f"📍 {pkg['destination']}\n"
                f"   {pkg['duration']} | Departure from {pkg['departure_city']}\n"
            )
        lines.append("Which package interests you? Or would you like to refine the search?")
        response_text = "\n".join(lines)

    return {
        "messages": state["messages"] + [{"role": "assistant", "content": response_text}],
        "next_action": "wait_for_user",
        "awaiting_input": True,
    }

# --- Node: Clarify ---
async def clarify(state: AgentState) -> dict:
    """Ask the user for missing information."""
    last_message = state["messages"][-1]["content"]

    prompt = [
        SystemMessage(content="""The user's request is missing some information needed to proceed.
Generate a friendly, concise question asking for the missing details.
Be specific about what's needed (e.g., budget, dates, departure city)."""),
        HumanMessage(content=last_message),
    ]

    response = await llm.ainvoke(prompt)

    return {
        "messages": state["messages"] + [{"role": "assistant", "content": response.content}],
        "next_action": "wait_for_user",
        "awaiting_input": True,
    }

# --- Node: Confirm Booking ---
async def confirm_booking(state: AgentState) -> dict:
    """Present booking summary and ask for confirmation."""
    package = state.get("selected_package", {})
    summary = (
        f"📋 **Booking Summary**\n\n"
        f"Package: {package.get('name', 'N/A')}\n"
        f"Price: ₹{package.get('price', 0):,}\n"
        f"Destination: {package.get('destination', 'N/A')}\n"
        f"Duration: {package.get('duration', 'N/A')}\n\n"
        f"Shall I proceed with this booking? Please confirm with **yes** or **no**."
    )
    return {
        "messages": state["messages"] + [{"role": "assistant", "content": summary}],
        "next_action": "wait_for_confirmation",
        "awaiting_input": True,
    }

# --- Node: Execute Booking ---
async def execute_booking(state: AgentState) -> dict:
    """Execute the booking after user confirmation."""
    package = state.get("selected_package", {})

    from mcp_client import call_tool
    booking_result = await call_tool("create_booking", {
        "package_id": package["id"],
        "traveler_name": state.get("traveler_name", ""),
        "traveler_email": state.get("traveler_email", ""),
        "traveler_phone": state.get("traveler_phone", ""),
        "departure_date": package.get("next_departure", ""),
        "num_travelers": state.get("num_travelers", 1),
    })

    if booking_result.get("status") == "confirmed":
        response_text = (
            f"✅ **Booking Confirmed!**\n\n"
            f"Booking ID: {booking_result['booking_id']}\n"
            f"Package: {package['name']}\n"
            f"A confirmation email has been sent to {state.get('traveler_email', 'your inbox')}.\n"
            f"Is there anything else I can help you with?"
        )
    else:
        response_text = (
            f"❌ Booking could not be completed: {booking_result.get('error', 'Unknown error')}\n"
            f"Would you like to try again or explore other options?"
        )

    return {
        "booking_result": booking_result,
        "messages": state["messages"] + [{"role": "assistant", "content": response_text}],
        "next_action": "wait_for_user",
        "awaiting_input": True,
    }

# --- Conditional Router ---
def route_intent(state: AgentState) -> str:
    """Determine which node to route to based on parsed intent and next_action."""
    action = state.get("next_action", "")
    if action == "clarify":
        return "clarify"
    elif action == "search":
        return "search"
    elif action == "confirm_booking":
        return "confirm_booking"
    elif action == "fetch_bookings":
        return "fetch_bookings"
    elif action == "wait_for_confirmation":
        return "execute_booking" if state.get("booking_confirmed") else "confirm_booking"
    else:
        return "search"

# --- Assemble the Graph ---
graph = StateGraph(AgentState)

graph.add_node("parse_intent", parse_intent)
graph.add_node("search", search_packages_node)
graph.add_node("present_results", present_results)
graph.add_node("clarify", clarify)
graph.add_node("confirm_booking", confirm_booking)
graph.add_node("execute_booking", execute_booking)

graph.set_entry_point("parse_intent")

graph.add_conditional_edges("parse_intent", route_intent, {
    "clarify": "clarify",
    "search": "search",
    "confirm_booking": "confirm_booking",
    "fetch_bookings": END,  # Simplified for this example
})

graph.add_edge("search", "present_results")
graph.add_edge("present_results", END)
graph.add_edge("clarify", END)
graph.add_edge("confirm_booking", END)
graph.add_conditional_edges("confirm_booking", lambda s: "execute_booking" if s.get("booking_confirmed") else END, {
    "execute_booking": "execute_booking",
})
graph.add_edge("execute_booking", END)

# Enable checkpointing for state persistence
checkpointer = MemoryCheckpoint()
agent = graph.compile(checkpointer=checkpointer)
```

### Why LangGraph Over Simple Chains?

A vanilla LangChain chain is linear: input → tool → output. That breaks down immediately in real scenarios:

- **What if the user's request is ambiguous?** A chain can't loop back to ask a clarifying question.
- **What if the user confirms a booking?** A chain can't conditionally route to execution vs. cancellation.
- **What if a tool fails?** A chain can't retry with different parameters or fall back gracefully.

LangGraph's stateful graph model handles all of these naturally. Nodes can read and write to shared state, conditional edges enable branching logic, and checkpointing allows the graph to pause and resume — essential for human-in-the-loop flows like booking confirmation.

---

## The Chat Interface

The frontend isn't just a text box. It needs to handle:

- **Streaming responses** — Users shouldn't stare at a blank screen while the agent thinks. We stream tokens as they're generated via WebSocket.
- **Rich cards** — Search results, booking confirmations, and package details are rendered as structured cards, not walls of text.
- **Context persistence** — If the user closes the tab and comes back, the conversation should still be there.
- **Intent confirmation** — Before any write operation (booking, cancellation), the UI shows a confirmation prompt. The agent *never* executes a write without explicit user approval.

Here's a simplified React component for the chat interface:

```tsx
import React, { useState, useEffect, useRef } from 'react';

interface Message {
  role: 'user' | 'assistant';
  content: string;
  cards?: PackageCard[];
  requiresConfirmation?: boolean;
  bookingData?: Record<string, unknown>;
}

interface PackageCard {
  id: string;
  name: string;
  price: number;
  rating: number;
  destination: string;
  duration: string;
  departureCity: string;
}

export default function ChatInterface() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [sessionId, setSessionId] = useState<string | null>(null);
  const wsRef = useRef<WebSocket | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Initialize WebSocket connection for streaming
  useEffect(() => {
    const ws = new WebSocket(`wss://api.ourplatform.com/chat/ws`);
    wsRef.current = ws;

    ws.onmessage = (event) => {
      const data = JSON.parse(event.data);

      if (data.type === 'session_start') {
        setSessionId(data.session_id);
        return;
      }

      if (data.type === 'token') {
        // Stream tokens into the last assistant message
        setMessages(prev => {
          const updated = [...prev];
          const lastMsg = updated[updated.length - 1];
          if (lastMsg?.role === 'assistant') {
            lastMsg.content += data.content;
          }
          return updated;
        });
      }

      if (data.type === 'cards') {
        setMessages(prev => {
          const updated = [...prev];
          const lastMsg = updated[updated.length - 1];
          if (lastMsg?.role === 'assistant') {
            lastMsg.cards = data.cards;
          }
          return updated;
        });
      }

      if (data.type === 'confirmation_required') {
        setMessages(prev => [
          ...prev,
          {
            role: 'assistant',
            content: data.message,
            requiresConfirmation: true,
            bookingData: data.booking_data,
          },
        ]);
      }

      if (data.type === 'done') {
        setIsLoading(false);
      }
    };

    ws.onclose = () => {
      // Reconnect logic would go here
      console.log('WebSocket disconnected');
    };

    return () => ws.close();
  }, []);

  // Auto-scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: Message = { role: 'user', content: input.trim() };
    setMessages(prev => [...prev, userMessage, { role: 'assistant', content: '' }]);
    setInput('');
    setIsLoading(true);

    wsRef.current?.send(JSON.stringify({
      type: 'message',
      content: input.trim(),
      session_id: sessionId,
    }));
  };

  const handleConfirmation = (approved: boolean) => {
    wsRef.current?.send(JSON.stringify({
      type: 'confirmation_response',
      approved,
      session_id: sessionId,
    }));
    setMessages(prev => {
      const updated = [...prev];
      const lastMsg = updated[updated.length - 1];
      if (lastMsg) {
        lastMsg.requiresConfirmation = false;
      }
      return updated;
    });
    if (!approved) {
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: 'Booking cancelled. What would you like to do instead?',
      }]);
    }
  };

  return (
    <div className="flex flex-col h-screen max-w-3xl mx-auto">
      <header className="p-4 border-b">
        <h1 className="text-xl font-semibold">Travel Assistant</h1>
        <p className="text-sm text-gray-500">Ask me anything about packages, bookings, or itineraries.</p>
      </header>

      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((msg, idx) => (
          <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[80%] rounded-lg p-3 ${
              msg.role === 'user'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-900'
            }`}>
              <p className="whitespace-pre-wrap">{msg.content}</p>

              {/* Render package cards */}
              {msg.cards && msg.cards.map(card => (
                <div key={card.id} className="mt-2 p-3 bg-white rounded border">
                  <div className="font-semibold">{card.name}</div>
                  <div className="text-sm text-gray-600">
                    ₹{card.price.toLocaleString()} · ⭐ {card.rating}/5
                  </div>
                  <div className="text-sm text-gray-500">
                    {card.destination} · {card.duration}
                  </div>
                </div>
              ))}

              {/* Confirmation buttons */}
              {msg.requiresConfirmation && (
                <div className="mt-3 flex gap-2">
                  <button
                    onClick={() => handleConfirmation(true)}
                    className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
                  >
                    ✅ Confirm Booking
                  </button>
                  <button
                    onClick={() => handleConfirmation(false)}
                    className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
                  >
                    ❌ Cancel
                  </button>
                </div>
              )}
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      <div className="p-4 border-t">
        <div className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
            placeholder="Ask about packages, bookings, itineraries..."
            className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2"
            disabled={isLoading}
          />
          <button
            onClick={sendMessage}
            disabled={isLoading || !input.trim()}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}
```

Key design decisions:

- **WebSocket streaming** over SSE: WebSocket gives us bidirectional communication — we can stream tokens *and* receive confirmation responses on the same connection.
- **Confirmation as a first-class UI pattern**: The confirmation buttons are rendered inline in the chat. The agent physically cannot proceed without the user clicking "Confirm." This isn't optional — it's enforced at the architecture level.
- **Cards, not text dumps**: Package search results are rendered as structured cards with clear pricing, ratings, and action buttons. The LLM generates the data; the UI owns the presentation.

---

## Memory with Redis

Multi-turn conversations require memory. The user might say "Show me Goa packages" in message 1, "Actually, under 1.5 lakhs" in message 2, and "Book the second one" in message 3. Without memory, each message is processed in isolation — the agent has no idea what "the second one" refers to.

Redis serves as our session memory layer:

```python
import json
import redis
from datetime import timedelta

r = redis.Redis(host="redis", port=6379, db=0, decode_responses=True)

class SessionMemory:
    """Manages conversation memory and session state in Redis."""

    SESSION_TTL = timedelta(hours=24)  # Sessions expire after 24h

    def __init__(self, session_id: str):
        self.session_id = session_id
        self.messages_key = f"session:{session_id}:messages"
        self.state_key = f"session:{session_id}:state"
        self.preferences_key = f"session:{session_id}:preferences"

    async def add_message(self, role: str, content: str, metadata: dict | None = None):
        """Append a message to the conversation history."""
        message = {
            "role": role,
            "content": content,
            "metadata": metadata or {},
            "timestamp": __import__("time").time(),
        }
        r.rpush(self.messages_key, json.dumps(message))
        r.expire(self.messages_key, self.SESSION_TTL)

    async def get_messages(self, limit: int = 50) -> list[dict]:
        """Retrieve recent conversation history."""
        raw_messages = r.lrange(self.messages_key, -limit, -1)
        return [json.loads(m) for m in raw_messages]

    async def save_state(self, state: dict):
        """Save agent state (search results, selected package, etc.)."""
        r.set(self.state_key, json.dumps(state, default=str))
        r.expire(self.state_key, self.SESSION_TTL)

    async def load_state(self) -> dict:
        """Load persisted agent state."""
        raw = r.get(self.state_key)
        return json.loads(raw) if raw else {}

    async def save_preference(self, key: str, value: str):
        """Store user preferences (budget range, preferred airlines, etc.)."""
        r.hset(self.preferences_key, key, value)
        r.expire(self.preferences_key, timedelta(days=30))  # Preferences last longer

    async def get_preferences(self) -> dict:
        """Retrieve all stored preferences for this session."""
        return {k: v for k, v in r.hgetall(self.preferences_key).items()}

    async def clear_session(self):
        """Wipe session data (logout, fresh start)."""
        for key in [self.messages_key, self.state_key, self.preferences_key]:
            r.delete(key)
```

### What Gets Stored

- **Conversation history**: Every message, both user and assistant, is stored for context window construction. We keep the last 50 messages per session.
- **Agent state**: Search results, selected packages, pending bookings — everything the LangGraph checkpoint needs to resume a workflow.
- **User preferences**: Budget ranges, preferred departure cities, past booking patterns. These persist across sessions (30-day TTL) and get injected into the system prompt for personalization.

This means when a user says "book the second one," the agent can look up the search results from the current state and identify which package "the second one" refers to. Without Redis, that context vanishes between turns.

---

## Before vs After: A Concrete Example

Let's walk through the same task both ways: **"Book me the best IPL package under 2 lakhs with Mumbai departure."**

### The Traditional Flow (50-100 clicks)

1. Open the website, navigate to Packages section (3 clicks)
2. Find the sports/IPL category filter (2 clicks)
3. Select "Cricket / IPL" from category dropdown (2 clicks)
4. Open destination filter, search for relevant stadiums (3 clicks)
5. Select departure city: Mumbai (2 clicks)
6. Open budget filter, type 200000 (3 clicks)
7. Sort by "Rating: High to Low" (1 click)
8. Scroll through results (2-3 scrolls/clicks)
9. Open top 3 packages in new tabs to compare (6 clicks)
10. Switch between tabs, read itineraries (6 clicks)
11. Go back to the best package, click "Book Now" (2 clicks)
12. Fill in traveler name, email, phone (10+ keystrokes/clicks)
13. Select departure date from calendar (3 clicks)
14. Select number of travelers (2 clicks)
15. Review and confirm (2 clicks)
16. Payment screen (5+ clicks)

**Total: ~50 clicks minimum, 3-5 minutes for an experienced user, 10+ minutes for a new user.**

### The AI Flow (1 interaction)

**User**: "Book me the best IPL package under 2 lakhs with Mumbai departure."

**Assistant**: "I found 3 IPL packages departing from Mumbai under ₹2,00,000:

1. **IPL Mumbai Live Experience** — ₹1,45,000 | ⭐ 4.8/5 | 3 nights | Wankhede match + city tour
2. **IPL Delhi-Mumbai Combo** — ₹1,85,000 | ⭐ 4.6/5 | 5 nights | 2 matches + Delhi sightseeing
3. **IPL Budget Special** — ₹98,000 | ⭐ 4.3/5 | 2 nights | Standalone match ticket + hotel

Which one would you like to book?"

**User**: "The first one."

**Assistant**: "📋 **Booking Summary**

Package: IPL Mumbai Live Experience
Price: ₹1,45,000
Duration: 3 nights
Departure: Mumbai

I'll need a few details to complete the booking:
- Your full name
- Email address
- Phone number
- Preferred departure date"

**User**: "Onkar Sarvade, onkar@example.com, +91-9876543210, April 15"

**Assistant**: [Shows confirmation card]

"Shall I proceed with this booking? ✅ Confirm / ❌ Cancel"

**User**: [Clicks ✅ Confirm]

**Assistant**: "✅ Booking confirmed! Booking ID: IPL-2026-4892. Confirmation sent to onkar@example.com."

**Total: 1 primary interaction + 2 follow-ups + 1 confirmation click. Under 60 seconds.**

The difference isn't incremental — it's transformational. We went from a task that requires navigating an entire application to a conversation that feels like talking to a knowledgeable travel agent.

---

## Production Considerations

Building a demo is easy. Running an NLI in production is a different beast. Here are the critical areas:

### Tool Safety

Every MCP tool call must be validated before it reaches the backend:

```python
from pydantic import BaseModel, Field, validator

class CreateBookingInput(BaseModel):
    package_id: str = Field(description="Package to book")
    traveler_name: str = Field(description="Primary traveler full name")
    traveler_email: str = Field(description="Contact email")
    traveler_phone: str = Field(description="Contact phone number")
    departure_date: str = Field(description="Preferred departure date (YYYY-MM-DD)")
    num_travelers: int = Field(default=1, ge=1, le=10, description="Number of travelers")

    @validator("traveler_email")
    def validate_email(cls, v):
        if "@" not in v or "." not in v.split("@")[-1]:
            raise ValueError("Invalid email format")
        return v.lower().strip()

    @validator("departure_date")
    def validate_date(cls, v):
        from datetime import datetime
        try:
            parsed = datetime.strptime(v, "%Y-%m-%d")
            if parsed < datetime.now():
                raise ValueError("Departure date must be in the future")
            return v
        except ValueError as e:
            raise ValueError(f"Invalid date: {e}")
```

**Rate limiting** is equally critical — an LLM in a retry loop can hammer an API. We enforce per-tool, per-session rate limits at the MCP layer:

```python
from functools import wraps
import time

# Track last call time per tool per session
_rate_limits: dict[str, float] = {}

def rate_limit(min_interval_seconds: float = 2.0):
    """Decorator to enforce minimum interval between tool calls."""
    def decorator(func):
        @wraps(func)
        async def wrapper(*args, **kwargs):
            key = f"{func.__name__}:{kwargs.get('session_id', 'default')}"
            last_call = _rate_limits.get(key, 0)
            elapsed = time.time() - last_call
            if elapsed < min_interval_seconds:
                raise RuntimeError(
                    f"Rate limited: {func.__name__} can only be called "
                    f"every {min_interval_seconds}s. Retry after "
                    f"{min_interval_seconds - elapsed:.1f}s."
                )
            _rate_limits[key] = time.time()
            return await func(*args, **kwargs)
        return wrapper
    return decorator
```

### Observability

You need to see *exactly* what the agent is doing at every step. We use LangSmith for tracing and structured logging:

```python
import logging
import structlog

logger = structlog.get_logger()

async def search_packages(input: PackageSearchInput) -> PackageSearchOutput:
    log = logger.bind(tool="search_packages", input=input.model_dump())
    log.info("tool_call_started")

    try:
        result = await _execute_search(input)
        log.info("tool_call_succeeded", result_count=len(result.packages))
        return result
    except httpx.HTTPStatusError as e:
        log.error("tool_call_failed", status=e.response.status_code, body=e.response.text[:500])
        raise
    except Exception as e:
        log.error("tool_call_error", error=str(e), error_type=type(e).__name__)
        raise
```

Every tool call, every LLM invocation, every state transition — all of it is traced. When something goes wrong in production, you can reconstruct the full decision path.

### Failure Handling

The agent must fail gracefully:

```python
from tenacity import retry, stop_after_attempt, wait_exponential, retry_if_exception_type

@retry(
    stop=stop_after_attempt(2),
    wait=wait_exponential(multiplier=1, min=1, max=5),
    retry=retry_if_exception_type((httpx.TimeoutException, httpx.ConnectError)),
)
async def call_backend_api(endpoint: str, params: dict) -> dict:
    """Call backend API with retry logic for transient failures."""
    try:
        response = await http_client.get(endpoint, params=params, timeout=10.0)
        response.raise_for_status()
        return response.json()
    except httpx.HTTPStatusError as e:
        if e.response.status_code == 429:
            # Rate limited — don't retry, return gracefully
            return {"error": "service_busy", "message": "Service is busy. Please try again in a moment."}
        if e.response.status_code >= 500:
            # Server error — retry (tenacity will handle this)
            raise
        if e.response.status_code == 404:
            return {"error": "not_found", "message": "The requested resource was not found."}
        raise
```

### Guardrails

The most dangerous thing an LLM can do is **hallucinate a tool call** — inventing parameters that don't exist, calling tools with malformed input, or deciding to execute a write operation without confirmation.

Our guardrails:

1. **Schema validation**: Every tool call is validated against its Pydantic model *before* execution. If the LLM generates `budget_max: "cheap"`, it gets rejected.
2. **Write operation confirmation**: The agent is explicitly instructed (via system prompt) to *never* execute write operations without user confirmation. The LangGraph graph enforces this architecturally — the `execute_booking` node can only be reached after the `confirm_booking` node.
3. **Tool allowlisting**: The MCP server only exposes the tools we explicitly register. The LLM cannot call arbitrary endpoints or execute shell commands.
4. **Output validation**: Tool responses are validated against output schemas before being returned to the LLM. Malformed backend responses are caught and translated into user-friendly error messages.

```python
# System prompt guardrail instruction
SYSTEM_PROMPT = """You are a helpful travel booking assistant.

CRITICAL RULES:
1. NEVER execute a booking, cancellation, or any write operation without
   first presenting a summary and getting explicit user confirmation.
2. If a tool call fails, inform the user clearly. Never retry silently.
3. If you're unsure about a parameter, ask the user rather than guessing.
4. Never reveal internal API endpoints, tokens, or system details.
5. If the user's request is outside your capabilities, say so honestly.

You have access to these tools: search_packages, get_package_details,
create_booking, get_user_bookings.

Always prioritize accuracy over speed. A wrong booking is worse than a slow one."""
```

---

## Impact & Future

### UX Transformation

The NLI doesn't just reduce clicks — it **changes how users think about the product.** Instead of "I need to figure out how to use this website," the mental model becomes "I need to tell the assistant what I want." This is a fundamental shift from *system-driven* interaction to *user-driven* interaction.

New users who would have bounced after seeing a complex search form now stay, because the barrier to entry is natural language — something every human already knows.

### Business Impact

- **Conversion rate**: Users who engage with the NLI convert at 3-4x the rate of traditional flow users. The friction between "I want this" and "I bought this" drops to near zero.
- **Support load**: Common support queries ("How do I find X?", "Can I filter by Y?") drop dramatically because the NLI handles them automatically.
- **Feature discovery**: Users discover packages and features they didn't know existed, because the agent proactively suggests them based on stated preferences.

### Engineering Impact

Perhaps the most interesting long-term effect: **your APIs become AI primitives.** Every endpoint you've built is no longer just a backend service — it's a tool that an AI agent can compose into arbitrarily complex workflows. The same API that powers the search page also powers the chat interface, the voice assistant, the WhatsApp bot, and the admin copilot.

This is a force multiplier. Every new API endpoint you ship immediately becomes available to every AI interface, without any additional integration work.

### What's Next

- **Voice interface**: The same agent layer can be connected to a voice pipeline (STT → Agent → TTS). "Hey, book me a Goa trip" becomes a spoken conversation.
- **WhatsApp integration**: Using the WhatsApp Business API, the same agent can serve users on the most popular messaging platform in India.
- **Admin copilot**: The architecture works both ways — "Show me today's booking cancellations" or "What's our revenue trend this week?" for internal users.
- **Proactive agent**: Instead of waiting for user input, the agent can proactively notify — "A package you viewed last week just dropped 20% in price. Want to book?"

The NLI isn't a feature. It's a platform shift. And we're just getting started.

---

*If you're building something similar or have questions about the architecture, I'd love to hear from you. The best part about this space is that we're all figuring it out together.*