---
slug: ai-news-roundup-2026-09-25
title: "AI News Roundup: Google Launches Gemini 3.8 Live Avatar, Project Suncatcher Sends AI to Space, DeepMind Chief Teases Gemini 4, Muse's Filesystem Revealed, and Gemini Can Now Call Businesses For You (Sept 2026)"
date: "2026-09-25"
tags: ["ai", "news"]
category: "AI News"
readTime: "14 min"
excerpt: "Google gives Gemini a face with Live Avatar, launches an AI-equipped satellite into orbit via Project Suncatcher, and DeepMind's new chief says Gemini 4 is almost ready. Meanwhile, Meta's Muse filesystem gets exposed, Gemini learns to call businesses on your behalf, and Jensen Huang's climate comments draw fire."
---

# AI News Roundup: Google Launches Gemini 3.8 Live Avatar, Project Suncatcher Sends AI to Space, DeepMind Chief Teases Gemini 4, Muse's Filesystem Revealed, and Gemini Can Now Call Businesses For You

*September 24–25, 2026 — your daily breakdown of the biggest stories in artificial intelligence.*

---

## Gemini 3.8 Live Gets a Face: Google Debuts Live Avatar

Google has rolled out **Live Avatar** for its Gemini 3.8 Live model, giving the AI assistant an animated face that lip-syncs and shows different facial expressions during real-time conversations. The feature, currently available only to **Gemini Enterprise** customers, represents Google's most aggressive push yet into the visual AI companion space.

Live Avatar can transition between the **97 languages** it supports "without degrading video fidelity or introducing visual drift," according to Google. A demo video shows the avatar speaking in both English and Japanese, with mouth animations syncing naturally to each language. It can also pull up information on-screen while it talks, making it more than just a talking head.

Organizations won't be limited to Google's preset avatars — they'll be able to **create their own custom avatars** for brand-specific experiences. All Live Avatar output comes with Google's invisible **SynthID watermark**, alongside safeguards designed to "respect identity."

The launch comes just a week after Google first revealed the Gemini 3.8 Live model, which processes visual inputs in near real-time. It's a direct shot at Meta's Muse, which also added video chat capabilities at Connect 2026 this week — setting up a two-horse race in AI persona interfaces.

**Why it matters:** Visual AI avatars are becoming table stakes. Between Google's Live Avatar and Meta's Muse video chat, the AI assistant is evolving from voice-only interactions to full face-to-face conversations — and enterprise is the first battleground.

---

## Google's Project Suncatcher: AI Satellite Launches October 1st

Google is about to launch a satellite equipped with its **Tensor Processing Units (TPUs)** into low Earth orbit aboard a SpaceX Falcon 9 rocket on October 1st. The mission is part of **Project Suncatcher**, Google's experimental initiative that could eventually put AI data centers in space.

The goal is to measure how well Google's TPUs "handle the physical stress of spaceflight and the radiation and thermal extremes of space." During testing, Google found its chips can withstand high g-forces and radiation — but "some things can only be tested in space." The onboard cooling system uses heat pipes and radiators, though **the chips can only run for about 15 minutes** before needing to be shut down to cool.

Google plans to put **two more satellites** into orbit next year. The long-term vision is a constellation of chip-equipped satellites harnessing solar power to run AI inference from space — an idea that **Elon Musk, Jeff Bezos, and former Google CEO Eric Schmidt** have all publicly floated as an alternative to power-hungry Earth-bound data centers.

"Exploring space as a viable location for scalable AI compute won't happen all at once," said Travis Beals, Project Suncatcher's senior director of product management. "This first launch is about seeing what works, identifying points of failure, and applying those findings to future missions."

**Why it matters:** If AI compute can move to space — with unlimited solar power and no land-use constraints — it could reshape the economics of AI infrastructure entirely. The 15-minute runtime limit shows this is still very early, but the trajectory is clear.

---

## Gemini 4 Is "Almost Ready," Says New DeepMind Chief

Google's new DeepMind chief **Koray Kavukcuoglu** used his first media appearance since taking over from Demis Hassabis to signal that **Gemini 4 is nearing launch**, telling The Information the model is currently in its "refinement stage" and that Google aims to release it "much earlier" than the end of the year.

"Our intention is to, as soon as possible, to release an early post-training output because we see the results and we are excited," Kavukcuoglu said, promising that Google would "continue the fast-paced iterations" going forward.

The comments come at a critical moment for Google's AI efforts. The company **hasn't released a new flagship model since Gemini 3 in November 2025**, while both OpenAI (GPT-6) and Anthropic (Mythos) have launched new frontier models in the interim, giving rivals a sizable lead. Google CEO Sundar Pichai promised a Gemini 3.5 Pro update at I/O in May, but that model was **never rolled out** — Kavukcuoglu confirmed the team "took a little bit of a step back" to focus on faster Flash models instead.

When asked whether he was concerned about Google falling behind, Kavukcuoglu was defiant: "In my mind, it's a certainty that we are always gonna be at the frontier."

**Why it matters:** Google's AI credibility hinges on actually shipping Gemini 4 — and shipping it soon. The gap between Gemini 3 and the next flagship has been the longest in recent memory, and rivals have pulled ahead on benchmarks. Kavukcuoglu's confidence will be tested by delivery timelines.

---

## Muse's Entire Filesystem Can Be Downloaded — With a Little Coaxing

Security researchers have discovered that **Meta's Muse AI agent will reveal its entire filesystem** when prompted with the right coaxing, exposing the internal structure of prompts, tool definitions, and system instructions that power the agent. The revelation comes just days after Meta launched Muse to the public at Connect 2026.

The filesystem exposure includes Muse's internal **system prompts, tool schemas, agent configuration files**, and other proprietary details that Meta would presumably prefer to keep hidden. While not a security vulnerability in the traditional sense (Muse is designed to have access to this information), it offers an unprecedented look at how a major AI agent is architected under the hood.

This follows Meta's publication earlier this week of **"How We Built Safety Into Muse"** — a detailed research blog explaining the agent's security architecture. The irony of publishing a safety deep-dive while your agent happily dumps its own internals wasn't lost on the AI community.

**Why it matters:** Agent transparency is a double-edged sword. On one hand, understanding how Muse works builds trust and enables security research. On the other, exposing system prompts and tool definitions gives attackers a roadmap for adversarial manipulation. Expect more agent makers to lock down filesystem access going forward.

---

## Gemini "Call for Me": Google's AI Now Phones Businesses For You

Google is introducing **"Call for Me"** on the Pixel 11 series, a Gemini Intelligence feature that lets AI make routine phone calls on your behalf — booking appointments, placing items on hold, and rescheduling reservations. It's the spiritual successor to **Google Duplex**, but powered by Gemini's latest model.

When you ask Gemini to make a call, your Pixel 11 will "call on your behalf using the Gemini app." You see a **live transcript** and can take over the conversation at any point. Gemini will "introduce itself" and "handle the conversation with the person on the other end," including navigating automated phone menus and waiting on hold.

Google says it will "respect the time of the neighborhood shops and front-desk staff answering the phone" and that calls "represent real customers conducting real transactions." The feature is rolling out as an **early preview** to Gemini subscribers enrolled in the Phone by Google beta on Pixel 11, 11 Pro, 11 Pro XL, and 11 Pro Fold in the US.

"Starting small to get the experience right" is the right instinct — Google Duplex's initial rollout drew criticism for not always disclosing that callers were speaking to an AI. This time, transparency appears to be a priority.

**Why it matters:** AI-to-human phone calls are the next frontier of agentic AI. If Google can make this work reliably, it solves one of the most universally hated experiences in modern life: waiting on hold. But the trust dynamics are delicate — businesses and humans on the other end need to know they're talking to an AI.

---

## Jensen Huang's Climate Comments Draw Supervillain Comparisons

Nvidia CEO **Jensen Huang** stirred controversy with comments on *The Ezra Klein Show* about AI and climate change, arguing that AI can help fight climate change — but only if it inflicts "an enormous amount of pain and suffering" first. His framing: "in order to save you, they've got to hurt you first."

The comments drew immediate comparisons to supervillain rhetoric. Critics pointed out the extreme level of privilege in suggesting that the environmental damage caused by AI data centers — which currently run heavily on fossil fuels — is an acceptable trade-off for future AI-driven climate solutions.

It's the same accelerationist argument we've heard from other tech leaders: AI will be so transformative that the short-term costs are worth bearing. But Huang's particular phrasing — framing environmental damage as necessary "pain and suffering" — struck many as especially tone-deaf given the communities already bearing those costs.

**Why it matters:** The tension between AI's energy demands and its promised benefits is becoming the defining political issue of the industry. Huang's comments crystallize the accelerationist position — and show why it's so polarizing.

---

## Meta Horizon Create Studio: AI-Built Games Coming to Instagram

Meta announced **Horizon Create** (mobile) and **Horizon Studio** (browser) — two new development tools that let anyone create games using AI prompts. The games are built for Meta's Horizon social platform, but here's the twist: published games will get recommended **on Facebook and Instagram feeds**, where they'll be playable natively without downloading anything.

"Someone scrolling through Instagram can tap a clip of your game and be in a multiplayer session within seconds, without needing to download an app or being redirected," Meta says. Games that are "engaging, stable, culturally relevant, and keep players coming back" will get more distribution.

It's a bold bet on AI-generated content as social media fodder — and a way for Meta to finally give its struggling Horizon platform the reach it's never had. Whether AI-prompted games can hold anyone's attention beyond a novelty tap remains to be seen.

**Why it matters:** If AI-generated games become native Instagram content, it could open a new distribution channel for interactive entertainment — and create a whole new category of AI-powered content creation for Meta's creator ecosystem.

---

## Quick Hits

- **Google, OpenAI, Anthropic form AI safety group** — The three biggest AI companies are forming a joint safety initiative, reports The Information. Details are still emerging, but it signals a rare collaborative approach to AI governance from fierce competitors.

- **Flock faces Senate scrutiny** — The vibes are reportedly bad for surveillance AI company Flock at a Senate hearing, raising questions about the regulation of AI-powered monitoring technology.

- **Pixel 11 gets blood pressure and insulin resistance tracking** — Google is rolling out health features on Pixel Watch 3, 4, and 5, expanding AI's role in consumer health monitoring.

---

*That's your AI news roundup for September 25, 2026. The AI space race is literally going to space now, agents are learning to make phone calls, and frontier model competition is heating up again with Gemini 4 on the horizon. See you tomorrow.*