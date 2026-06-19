---
title: "AI News Roundup: Noam Shazeer Leaves Google for OpenAI, DeepSeek Launches Vision, MCP Gets Zero-Touch OAuth, and 10K GitHub Repos Found Distributing Malware — June 18, 2026"
date: "2026-06-18"
tags: ["ai", "news", "openai", "google", "deepseek", "mcp", "security", "agents", "anthropic", "elevenlabs"]
category: "AI News"
readTime: "11 min"
slug: "ai-news-roundup-2026-06-18"
excerpt: "Google's Gemini co-lead Noam Shazeer jumps to OpenAI in a seismic talent move, DeepSeek enters the vision arena, MCP introduces enterprise-grade zero-touch OAuth, a researcher uncovers 10,000 GitHub repos distributing Trojans, and ElevenLabs quietly shifts liability for third-party models onto users."
---

# AI News Roundup: June 18, 2026

The AI talent war just claimed its biggest scalp. Noam Shazeer — co-lead of Google's Gemini and the mind behind Character.AI — is heading to OpenAI, sending shockwaves through an industry already roiled by the Claude Fable export standoff. Meanwhile, DeepSeek quietly rolled out vision capabilities, the Model Context Protocol took a major leap toward enterprise readiness, and someone found 10,000 malware repos on GitHub. Here's the full roundup.

---

## Noam Shazeer Leaves Google for OpenAI

In what may be the most consequential talent move since OpenAI's leadership shuffle, **Noam Shazeer announced he's joining OpenAI** after co-leading Google's Gemini effort. Shazeer broke the news himself on X (formerly Twitter), and the story immediately shot to the top of Hacker News with 306 points and nearly 300 comments.

### Why it matters

- Shazeer is one of the most influential figures in modern AI — he co-authored the 2017 "Attention Is All You Need" transformer paper, founded Character.AI (which Google re-acquired), and was serving as co-lead of Gemini alongside Oriol Vinyals
- His departure comes at a delicate moment for Google: Gemini is locked in a fierce competition with OpenAI's GPT lineup, Anthropic's Claude, and DeepSeek's models
- Reuters reported that the move is part of an escalating "AI talent war" between the major labs, with OpenAI aggressively recruiting top researchers
- The move also raises questions about Google's ability to retain key AI leadership at a time when the company is racing to maintain its edge

### The broader context

This isn't just a personnel move. It's a signal that OpenAI is consolidating the kind of research firepower that could shift the balance in the frontier model race. When the co-architect of Gemini walks out the door to join your biggest competitor, the strategic implications are enormous.

**Sources:** [Reuters](https://www.reuters.com/technology/googles-gemini-co-lead-noam-shazeer-join-openai-2026-06-18/), [CNBC](https://www.cnbc.com/2026/06/18/google-gemini-co-lead-noam-shazeer-leaves-for-openai.html), [Business Insider](https://www.businessinsider.com/google-veteran-founded-characterai-is-jumping-to-openai-talent-war-2026-6)

---

## DeepSeek Introduces Vision

Chinese AI lab **DeepSeek launched "Vision"** — adding image understanding capabilities to its chat platform. The feature allows DeepSeek to analyze and describe images (though not generate or edit them), bringing the model closer to multimodal parity with GPT, Gemini, and Claude.

### What we know

- Vision is integrated directly into the DeepSeek chat interface at chat.deepseek.com
- It's an image understanding feature, not image generation — you can upload a photo and DeepSeek will describe what's in it, answer questions about it, and extract information
- The launch scored 458 points on Hacker News, making it one of the most-discussed stories of the day
- Some users noted that DeepSeek still doesn't offer text-to-speech or speech-to-text capabilities, making this a partial step toward full multimodality

### Why it matters

DeepSeek has been the quiet disruptor of 2026. After shocking the industry with competitively priced frontier models earlier this year, adding vision puts pressure on Western labs that charge significantly more for similar capabilities. The open-weights approach DeepSeek takes means these multimodal capabilities will likely propagate through the open-source ecosystem quickly.

**Source:** [DeepSeek](https://chat.deepseek.com/)

---

## MCP Gets Zero-Touch OAuth for Enterprises

The **Model Context Protocol (MCP) team announced that Enterprise-Managed Authorization (EMA) is now stable**, enabling zero-touch OAuth for MCP servers. The feature lets organizations centrally provision MCP server access through their identity provider, so end-users get connected servers on first login without per-app OAuth prompts.

### Key details

- EMA is being adopted by **Anthropic, Microsoft, and Okta** — a strong signal of enterprise buy-in
- The core problem it solves: in enterprise environments, every employee had to authorize every MCP server individually, creating massive friction. Security teams also couldn't enforce consistent access policies
- With EMA, organizations use their existing identity provider (IdP) to centrally control which MCP servers employees can access. Users get everything on first login — no individual consent screens
- This is a big deal for MCP's enterprise adoption trajectory. The protocol was already gaining traction as the standard for connecting AI agents to external tools; enterprise-grade auth removes one of the last major deployment blockers

### Why it matters

If AI agents are going to be useful in enterprise settings, they need to be able to connect to tools and data sources without every single interaction requiring a consent prompt. MCP's EMA extension is the plumbing that makes this possible at scale — and having Anthropic, Microsoft, and Okta on board from day one gives it immediate credibility.

**Source:** [MCP Blog](https://blog.modelcontextprotocol.io/posts/enterprise-managed-auth/)

---

## 10,000 GitHub Repos Distributing Trojan Malware

Security researcher **Orchid published a detailed investigation** revealing a large-scale malware distribution campaign on GitHub — over **10,000 repositories** distributing Trojan malware. The repos are all from different contributors, have different names, and aren't forks of other repositories, making them extraordinarily difficult to detect through traditional means.

### What's happening

- The researcher discovered the campaign by identifying a common pattern shared across all 10,000+ repositories, then wrote a script to find them systematically
- Each repo appears independently created — different contributors, different names, no fork relationships — which defeats GitHub's existing duplicate detection
- The story hit 711 points on Hacker News, making it the most-discussed story of the day
- The attack vector is particularly insidious because it exploits the trust developers place in GitHub repositories for code samples and dependencies

### Why it matters

This is a supply-chain security nightmare. As AI coding assistants increasingly pull from GitHub repositories (including DeepSWE and similar agents), malicious repos become an even more dangerous attack surface. The finding underscores the need for better repository verification — and raises uncomfortable questions about how many of these repos have already been ingested into AI training datasets.

**Source:** [Orchid Files](https://orchidfiles.com/github-repositories-distributing-malware/)

---

## DeepSWE v1.1 Updates Benchmark for Coding Agents

**DataCurve released DeepSWE v1.1**, an updated benchmark for evaluating AI coding agents on long-horizon engineering tasks. The revision keeps the same tasks as v1 but updates how agents are executed and scored, grading their committed code in a clean, isolated environment for better reproducibility.

### Notable results

| Model | Pass@1 | Avg Cost |
|-------|--------|----------|
| Claude Fable 5 (max) | 70% | $21.63 |
| GPT-5.5 (xhigh) | 67% | $7.23 |
| Claude Opus 4.8 (max) | 59% | $13.22 |
| GPT-5.4 (xhigh) | 52% | $5.65 |
| Gemini 3.5 Flash (medium) | 37% | $7.34 |
| Kimi K2.7 Code | 34% | — |
| Claude Sonnet 4.6 (high) | 32% | — |
| Gemini 3.1 Pro (high) | 27% | — |

Claude Fable 5 leads the pack at 70% pass rate despite the ongoing export control restrictions. GPT-5.5 is close behind at 67% with significantly lower cost per task.

**Source:** [DeepSWE](https://deepswe.datacurve.ai/blog/deepswe-v1-1)

---

## ElevenLabs Shifts Liability for Third-Party Models to Users

**ElevenLabs updated its Image & Video terms of service on June 11**, and the changes are raising eyebrows. The voice AI company, which routes image and video processing to outside vendors (including Runway and Kling), now requires users to represent and warrant that their inputs comply with those vendors' requirements — without disclosing what those requirements are.

### What changed

- **Before:** Users acknowledged they "may interact with" third-party providers and agreed to comply with their terms
- **After:** Users must warrant that their inputs comply with those vendors' requirements — shifting from acknowledgment to a legal guarantee
- ElevenLabs now reserves the right to add, remove, or replace vendors at any time, and disclaims liability for anything those vendors do
- The providers' names appear only on a separate subprocessor page, and ElevenLabs can change them without notice
- If a vendor suffers a security incident, ElevenLabs disclaims liability for it

### Why it matters

This is a governance shift disguised as a terms update. Post-production houses running client footage through ElevenLabs can no longer answer standard data-handling questionnaires cleanly — they can't name which vendor processed the material, commit to a data-residency region, or confirm who touched it. As AI platforms increasingly route to opaque third-party models, this pattern of liability-shifting could become the norm rather than the exception.

**Source:** [The Ledger by Somantix](https://ledger.somantix.ai/posts/eleven-labs-routes-image-and-video-to-outside-models-and-disclaims-what-they-do/)

---

## TesterArmy (YC P26): AI Agents That Test Web and Mobile Apps

**TesterArmy, a Y Combinator P26 company, launched AI agents that automatically test web and mobile applications.** The agents can run checks on pull requests and browser flows, capturing screenshots and issue context to catch bugs before users do. The launch hit 109 points on Hacker News.

As AI agents increasingly eat into traditional QA workflows, this is another sign that the "AI testing agent" category is maturing rapidly — joining the likes of DeepSWE and other agent-based approaches to software quality.

**Source:** [TesterArmy](https://tester.army)

---

## Forecast: How the Claude Fable Standoff Will End

**FutureSearch published a detailed scenario forecast** for how the US government's suspension of Claude Fable 5 and Mythos 5 might resolve. The analysis lays out four scenarios:

1. **Sincere mistake** — The government panicked over a capability that turns out to be ordinary
2. **Genuinely dangerous** — The model has capabilities the public record doesn't yet reveal
3. **Foreign access worry** — The real concern is that an adversary got access to Mythos
4. **Mostly politics** — The restriction is primarily political posturing

The author's best guess is politics, but assigns over 50% probability to the other three scenarios combined. The forecast predicts Fable returns for US users around **mid-July** (roughly 29% probability by July 1), with foreign access probably not restored in 2026, and Mythos durably gated. The White House is demanding a full accounting of the 50-150 entities given Mythos access through Anthropic's "Project Glasswing" program, plus guardrails that are "close to jailbreak-proof" — a standard cybersecurity experts consider technically impossible.

**Source:** [FutureSearch](https://futuresearch.ai/claude-fable-ban-forecast/)

---

## Also Worth Noting

- **AI Holdouts Face 3x Higher Layoff Odds:** A new Gallup study found that tech workers who resist adopting AI tools face three times higher odds of being laid off, adding data to what many have suspected about the industry's AI-or-else culture
- **Meta Staff Revolt Over AI Push:** An Inc. investigation reveals growing internal resistance at Meta over what employees describe as Zuckerberg's "brutal" AI push, with some calling their transformed workplace "The Gulag"
- **DOJ: Grok Is More Important Than Clean Air:** Mother Jones reports that the DOJ argued xAI's gas turbine permit should stand because Grok's importance to national competitiveness outweighs Clean Air Act concerns
- **Datasette Apps:** Simon Willison launched a new Datasette plugin for hosting sandboxed HTML+JS applications inside Datasette, inspired by Claude Artifacts — allowing custom apps that can run SQL queries against your data without exfiltration risks
- **Flourish Labs Raises $500M:** A Wired report profiles Flourish Labs, which has raised $500 million to "reinvent AI using neuroscience" — though details remain thin on what exactly that means
- **Let's Encrypt Outage:** Let's Encrypt has been down for most of the day, affecting HTTPS certificate renewals across the internet — a reminder of how fragile critical infrastructure can be

---

## The Big Picture

If yesterday's G7 story was about nations fearing US control over AI, today's stories are about *individuals* reshuffling that control. Shazeer's move from Google to OpenAI, MCP's enterprise auth making agent deployments frictionless, ElevenLabs quietly shifting liability away from itself — these are all moves in the same game: who gets to be the platform, and who bears the risk.

Meanwhile, 10,000 Trojan repos on GitHub and a low-skilled attacker breaching 14 companies with Claude and Codex are reminders that the security surface area is expanding faster than anyone's ability to defend it. The tools get more powerful. The threats get more numerous. The governance questions get harder.

Same time tomorrow.

---

*Got tips or corrections? Drop them in the comments or reach out on [X/Twitter](https://twitter.com/aitickr).*