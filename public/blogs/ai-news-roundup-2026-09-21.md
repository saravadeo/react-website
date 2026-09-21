---
slug: ai-news-roundup-2026-09-21
title: "AI News Roundup: Google Open-Sources AX Agent Orchestrator, OpenAI's ChatGPT Ad Tracker Cross-Sites Users, Qwen Image 2.1 Debuts, Samsung Doubles HBM4 Output, and MCP's Reckoning Arrives (Sept 2026)"
date: "2026-09-21"
tags: ["ai", "news"]
category: "AI News"
readTime: "16 min read"
excerpt: "The biggest AI stories for September 21 — Google open-sources AX, a Kubernetes-style orchestrator for billions of agent tasks; a security researcher reveals ChatGPT's ad collector tracks users across 936+ advertiser sites; Alibaba releases Qwen-Image-2.1; Samsung plans to double HBM4 output; and a viral essay argues MCP has been overtaken by smarter models."
---

# AI News Roundup: Google Open-Sources AX Agent Orchestrator, OpenAI's ChatGPT Ad Tracker Cross-Sites Users, Qwen Image 2.1 Debuts, Samsung Doubles HBM4 Output, and MCP's Reckoning Arrives

*September 21, 2026*

The AI infrastructure layer is getting serious. This week Google open-sourced AX, a declarative orchestrator designed to run billions of autonomous agent workloads in a cluster — treating agents as a fundamentally new kind of workload that needs sandboxing, state management, and network fencing. A security researcher exposed how ChatGPT's advertising system tracks users across 936+ external websites through a cross-site cookie mechanism. Alibaba released Qwen-Image-2.1, a 7B open-weight image model that claims to outperform most closed-source competitors. Samsung signaled it will more than double HBM4 output next year. And a viral essay argues that the Model Context Protocol — the standard that defined how AI agents connect to the world — has been overtaken by smarter models that can just use APIs directly. Here's everything you need to know.

---

## 1. Google Open-Sources AX: A Kubernetes for AI Agents

Google quietly open-sourced **AX** (hosted at github.com/google/ax), a declarative orchestrator designed to run billions of autonomous agent workloads in a Kubernetes cluster. If Kubernetes is the operating system for containers, AX wants to be the operating system for agents — and the analogy is explicit. The CLI is `kubectl`-shaped, the manifests follow Kubernetes conventions, and the four core primitives (Task, Workspace, Gateway, Model) map directly to what every agent deployment needs.

Key details:

- **The four primitives**: Task provides isolated sandboxed execution with CPU/memory limits. Workspace pre-wires Git repos, MCP servers, and skill packages so agents start warm. Gateway locks down network traffic to explicit allowlists. Model centralizes LLM configuration and secrets management. Everything is expressed as `ax.io/v1alpha1` YAML manifests applied with a single `ax apply` command
- **Built for scale**: AX runs on top of Agent Substrate, a compute runtime designed for massive density and fast stateful actor lifecycles. Every task runs as a lightweight actor, enabling billions of concurrent agent sessions per cluster without orchestrator limits. Idle agents waiting on model responses are checkpointed and suspended, then resumed in under a second with zero cold-start delay
- **Billing-aware**: AX addresses the "burning money in a loop" problem directly. Dense multiplexing shares worker resources across dozens of tasks, turning idle waiting time into spare compute capacity. You only pay when agents are actively thinking and running code
- **Developer experience**: `ax ssh` lets you shell into a running agent's sandbox to debug what it's doing. `ax suspend` and `ax resume` checkpoint and restore agent state. `ax watch` streams status updates. The generative platform feature can even set up a workspace from a natural language goal description
- **Early stage**: Google warns that core concepts, protocols, and specifications are still actively being refined, and major breaking changes are expected before a stable release

**Why it matters:** AX is Google's answer to the question that every enterprise deploying AI agents is asking: how do we run these things at scale, safely, and cost-effectively? The current agent ecosystem is a mess of ad-hoc scripts, Docker containers with too many permissions, and fragile orchestration layers. AX treats agents as a first-class workload type with its own lifecycle, isolation, and networking requirements — not as a special case of container orchestration. The Kubernetes-shaped API is a deliberate design choice: it signals that Google expects AX to become infrastructure, not just a tool. The sub-second suspension and resumption is the key technical differentiator — it solves the cost problem that makes large agent deployments financially impractical today. If AX delivers on its promises, it could do for agents what Kubernetes did for microservices: turn an operational nightmare into a declarative, manageable system. The open-source move also positions Google against Anthropic's Claude Code, OpenAI's Codex, and the broader "vibe coding" ecosystem — Google is betting that the platform layer matters more than any single model.

---

## 2. ChatGPT's Ad Collector Tracks Users Across 936+ Websites

Security researcher **Lukas Buchar** published a detailed investigation revealing that **ChatGPT's advertising system uses a cross-site cookie (`__obi`) to track users across 936 distinct advertiser pixels spanning 1,029 hostnames**. The mechanism, built on OpenAI's internal "Bazaar" ad platform, creates a unique identifier tied to your ChatGPT account and sends it to OpenAI from ordinary websites you visit — without meaningful disclosure or meaningful opt-out.

Key details:

- **The mechanism in three steps**: (1) On chatgpt.com, the client generates 16 random bytes and calls a backend API that returns an RS256 JWT binding your ChatGPT account to an "obi" identifier. (2) The client posts this JWT cross-site to bzr.openai.com, which sets `__obi` as a cookie on .openai.com with SameSite=None, Secure, and a one-year Max-Age. (3) Any website that has installed OpenAI's ad pixel (bzrcdn.openai.com/sdk/oaiq.min.js) automatically sends the `__obi` cookie back to OpenAI, along with page content, form data, and user behavior
- **Scraped data exceeds advertiser-supplied data**: The SDK collects identity from four sources — `in` (advertiser-supplied values), `fm` (form fields), `ht` (rendered page text), and `js` (the tag-manager bus). In observed traffic, scraped identity outnumbered advertiser-supplied identity 685 events to 255. The SDK replaces `window.dataLayer.push` with its own function, reads `adobeDataLayer`, and locates renamed GTM layers by parsing the `l=` parameter off the gtm.js script tag
- **The scope is enormous**: On the researcher's personal device, a single `__obi` value was sent to OpenAI from 12 commercial websites including Chewy, Wayfair, ThriftBooks, Eventbrite, HelloFresh, Coursera, and SeatGeek. In the broader traffic dataset, 12 of 30 distinct `__obi` values appeared under more than one advertiser. Paths reaching the collector included a medical condition, a debt-solutions funnel, and a litigation intake form
- **It works when you're logged out**: Across 932 decoded sync tokens, 736 carried `subject_type: account_user` and 196 carried `anonymous`. The anonymous subject is as stable as the account subject — one per device, persisting at least 27 days
- **The consent problem**: OpenAI's cookie policy lists `__obi` under Analytics cookies. The sync tokens carry `consent_decision: analytics_allowed`. A user who allows analytics and refuses marketing still gets tracked. OpenAI did not answer the researcher's questions about why `__obi` is classified as an analytics cookie or whether users who refuse marketing consent still receive it
- **Automatic matching enabled for most pixels**: 638 of 881 pixels with a known setting had automatic matching enabled, including every credit and lending advertiser observed. A denylist excludes passwords, one-time codes, card numbers, SSNs, dates of birth, medical history, diagnosis, and court fields — but paths, behavioral data, and hashed email/phone still flow freely

**Why it matters:** This is the most detailed technical expose of how an AI company's advertising infrastructure tracks users across the web, and it reveals a significant gap between OpenAI's privacy posture and its actual data collection practices. OpenAI has built a tracking system that rivals Facebook Pixel and Google Analytics in reach, but with an even more direct tie to personal identity — because ChatGPT accounts are tied to real people who have conversations about their lives, health, finances, and work. The classification of `__obi` as an "analytics" cookie, while it functions as a cross-site tracking mechanism for ad matching, is the kind of definitional sleight-of-hand that privacy regulators in the EU and California are increasingly scrutinizing. The fact that scraped data (form fields, page text, GTM data) significantly exceeds advertiser-supplied data means OpenAI is collecting far more than what its advertising partners intended to share. And the 27-day persistence of anonymous identifiers, combined with the automatic matching for financial services advertisers, creates a surveillance profile that extends well beyond what any reasonable interpretation of "analytics" would suggest. This story is likely to have regulatory consequences.

---

## 3. Alibaba Releases Qwen-Image-2.1: Open-Weight Image Model Rivals Closed-Source Systems

Alibaba's Qwen team released **Qwen-Image-2.1**, a 7-billion-parameter open-weight image generation model that the company claims outperforms most closed-source competitors. The model supports native transparency (alpha channels) and accepts up to ten reference images for style-consistent generation.

Key details:

- **Performance claims**: Qwen-Image-2.1 reportedly outperforms DALL-E 3, Midjourney v6, and Stable Diffusion 3.5 on standard benchmarks, with particularly strong results in text rendering, spatial reasoning, and multi-reference style consistency
- **Native transparency**: Unlike most image models that require post-processing to remove backgrounds, Qwen-Image-2.1 generates images with built-in alpha channels, producing transparent PNGs directly
- **Multi-reference support**: The model accepts up to ten reference images, enabling style-consistent generation across a batch — a feature previously available only in closed APIs like GPT-4o's image generation
- **Open-weight release**: Consistent with Alibaba's strategy of releasing increasingly capable open-weight models, Qwen-Image-2.1 continues the Qwen family's pattern of frontier-quality open models that compete with closed-source alternatives
- **Competitive landscape**: This release comes amid intensifying competition in open-weight image models, with Stability AI's SD4 and Black Forest Labs' FLUX.2 also pushing the boundaries of open image generation quality

**Why it matters:** Qwen-Image-2.1 is another data point in the accelerating trend of open-weight models matching or exceeding closed-source quality. The native transparency and multi-reference features are genuinely useful — transparency is something designers have begged for in image AI, and reference-image consistency is the difference between "nice image" and "production-ready asset." With a 7B parameter count, the model is also small enough to run on consumer hardware, which matters for adoption. Alibaba's strategy of releasing frontier open-weight models continues to pressure closed-source providers: every time an open model matches or beats a proprietary one, the justification for paying per-image API fees weakens. The Qwen family is becoming one of the most important open-weight AI model families in the world, and Qwen-Image-2.1 extends that reach into visual generation.

---

## 4. Samsung Plans to More Than Double HBM4 Output Next Year

Samsung Electronics is expected to **more than double its HBM4 family output next year**, including both sixth-generation HBM4 and seventh-generation HBM4E chips, according to sources cited by Seoul Economic Daily. The company plans to raise glass carrier volume — essential for high-layer stacking — by 2.5 times from this year, signaling confidence that AI accelerator demand will continue its exponential growth trajectory.

Key details:

- **Production scale**: HBM capacity is set to expand to 250,000 wafers per month. Sixth- and seventh-generation chips (HBM4 and HBM4E) are expected to make up 80% of total output
- **Glass carrier investment**: Glass carriers — glass supports that hold wafers in place while HBM DRAM is thinned — are critical for high-layer stacking, and Samsung's plan to increase outsourced glass carrier volume by 2.5 times signals a massive ramp in advanced packaging
- **Market context**: This follows Samsung's push to regain HBM market share from SK Hynix, which has dominated the HBM3E supply for NVIDIA's accelerators. Samsung's HBM4 and HBM4E are expected to feature in next-generation NVIDIA and custom AI accelerator designs
- **The broader supply chain**: Samsung's ramp is consistent with NVIDIA's $105 billion OpenAI Ohio data center lease and the broader industry expectation that AI training and inference compute demand will continue to outstrip supply through at least 2027

**Why it matters:** Memory is the bottleneck for AI compute. GPUs and TPUs get faster every generation, but HBM supply has been the constraining factor — determining how many accelerators can actually ship, and at what price. Samsung's 2.5× glass carrier investment and plan for 80% HBM4/HBM4E output signals that the industry is betting heavily on continued exponential growth in AI compute demand. If Samsung executes, it could ease the HBM supply constraint that has limited accelerator production for the past two years — and it could shift market share dynamics between Samsung and SK Hynix. The 250,000 wafer-per-month target is aggressive, and achieving it depends on glass carrier supply, packaging yield, and continued demand from hyperscalers. But the direction is clear: the AI memory war is entering a new phase.

---

## 5. "Why MCP Was Always a Bad Idea" — The Protocol That Defined AI Tool Use Gets Its Obituary

Maharshi Patel published a widely discussed essay titled **"Why MCP Was Always a Bad Idea"** on September 14, arguing that the Model Context Protocol — the standard that defined how AI agents connect to external services — has been rendered obsolete by the very progress it enabled. The essay, which reached the front page of Hacker News, makes a provocative case: LLMs have gotten so good at using APIs directly that MCP servers are now an unnecessary abstraction layer.

Key arguments:

- **The context bloat problem**: As users added more MCP servers, each with multiple tools and schemas, the context overhead overwhelmed LLMs. Platforms like Composio, MintMCP, and Pipedream emerged to solve this — but they're solving a problem that shouldn't exist if models were smarter about tool use
- **Models can just use APIs now**: Modern LLMs can write scripts, compose multiple services, and call APIs they haven't seen before. They can even discover CLI tools using `--help` and figure out undocumented APIs. Most remote-service MCP servers ultimately wrap APIs that already exist
- **Cloudflare's Code Mode as proof**: Cloudflare launched Code Mode, which has LLMs compose MCP calls into scripts that run in a sandbox — effectively acknowledging that the model, not the protocol, should be the orchestrator
- **The proposed alternative**: Standardize around HTTP APIs with agent-friendly conventions. An `Accept: text/markdown` header could let servers return clean text instead of verbose JSON. An `Accept-Language: python` header could let documentation sites serve Python-specific examples. These are small, standards-based changes that eliminate the need for MCP entirely

**Why it matters:** Whether or not you agree with Patel's conclusion, the essay captures a real tension in the AI agent ecosystem. MCP was designed in November 2024, when LLMs were "still relatively primitive" and needed structured tool interfaces to function. In the two years since, models have gotten dramatically better at autonomous action — and the overhead of maintaining MCP servers, schemas, and context has become a liability. The "MCP industrial complex" Patel describes is real: entire companies have been built around solving MCP's problems (context management, credential handling, server monitoring). But the deeper question is whether MCP is a permanent infrastructure layer or a temporary bridge that smarter models will simply step over. The answer is probably both — MCP will persist for enterprise integrations that need structured, auditable tool interfaces, while direct API access will dominate for the kind of ad-hoc automation that dominates developer workflows. The essay's real contribution is forcing the community to ask whether we're building durable infrastructure or just scaffolding around a limitation that's being engineered away.

---

## What Else Happened

- **SoftBank seeks $11B+ in junk bonds for OpenAI investment**: SoftBank is looking to issue $10 billion in dollar-denominated and €1 billion in euro-denominated debt for its OpenAI bet, in what would be one of the biggest junk bond sales ever. The scale of the offering reflects both confidence in OpenAI's growth and the high-risk, high-reward nature of the investment
- **Jev gains traction as AI tool selection accelerator**: Vercel, Cloudflare, and others have rapidly added support for Jev, which makes AI tool selection 100× faster and cheaper. TypeSafe reports that Jev matches GPT-5.6 and Sonnet 5 on workflow evaluations, suggesting that the bottleneck in agentic workflows may not be model intelligence but tool routing efficiency
- **Pirate Face launches — AI models as torrents**: Pirate Face (pirateface.co) turns open AI models into magnet links that "live forever" with no single owner or point of failure. It's a response to the increasing takedowns and access restrictions on open models, offering a decentralized distribution mechanism built on BitTorrent
- **Terry Tao asks "Why do we need human mathematicians anymore?"**: Fields Medalist Terence Tao published a reflection on whether AI is making human mathematicians obsolete, generating 154 points on Hacker News and thoughtful discussion about the complementary strengths of human insight and AI-powered verification
- **Samsung HBM4 and HBM4E on display**: Samsung showcased its sixth-generation HBM4 and seventh-generation HBM4E chips at its shareholder meeting, with the company planning to make these next-gen chips 80% of its HBM output next year
- **AI kill-switch legislation faces practical hurdles**: Experts warn that AI kill-switch legislation is far harder to implement than lawmakers assume, noting that a sufficiently capable AI could actively try to dismantle the mechanism designed to shut it down
- **Jensen Huang on AI regulation**: NVIDIA CEO Jensen Huang said that AI leaders calling for regulation "don't want new legislation" but rather want to be "relieved of the laws we do have" for "ulterior reasons" — a pointed critique of the regulatory capture dynamics in the AI safety debate

---

## The Week Ahead

- **AX adoption watch**: With AX now open-source, watch for early adopters deploying it in production. The Kubernetes-shaped API will be familiar to platform teams, but the real test is whether Agent Substrate delivers on sub-second suspension and billion-task scale
- **ChatGPT ad tracking regulatory response**: The Buchar investigation is likely to attract regulatory attention from EU and California privacy authorities. Watch for responses from data protection commissioners and any statements from OpenAI beyond its initial non-answer
- **Qwen-Image-2.1 community benchmarks**: The 7B open-weight model's performance claims need independent verification. Watch for community benchmarks comparing it against DALL-E 3, Midjourney, SD4, and FLUX.2 on standardized evaluation sets
- **MCP's future path**: Patel's essay has reignited the debate about MCP's long-term viability. Watch for responses from Anthropic, the Linux Foundation's Agentic AI Foundation, and companies that have built MCP-based products
- **Samsung HBM4 production timeline**: If Samsung hits its 250K wafer/month target, it could reshape HBM market dynamics. Watch for SK Hynix's response and any updated guidance from NVIDIA on HBM4 supply agreements