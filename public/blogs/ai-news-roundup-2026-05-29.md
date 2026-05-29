# AI News Roundup — May 29, 2026: Illinois Becomes First State to Mandate AI Safety Audits, DeepSeek Makes 75% Price Cut Permanent, Anthropic Doubles Claude Limits via SpaceX Colossus, and ChatGPT Voice Mode Runs on a Weaker Model

*May 29, 2026*

States are stepping into the AI regulatory vacuum. Illinois just became the first US state to require independent third-party safety audits of frontier AI companies. DeepSeek made its massive 75% V4-Pro price cut permanent — and the AI pricing war just got hotter. Anthropic locked in 220,000+ GPUs from SpaceX's Colossus data center and doubled Claude Code limits overnight. And it turns out ChatGPT's popular voice mode has been running on a significantly weaker model this whole time.

Let's break it down.

---

## Illinois Becomes First State to Require Third-Party AI Safety Audits

The Illinois House of Representatives passed **Senate Bill 315**, a landmark AI safety bill that would make Illinois the first state in the nation to **require independent third-party audits of frontier AI developers' safety practices**. The bill passed with strong bipartisan support and now heads to Governor JB Pritzker's desk for signing.

SB 315 mirrors legislation already introduced in California and New York, requiring frontier AI companies to create, publish, and annually update plans addressing severe or catastrophic risks from their models. But it goes further than any existing US legislation by mandating **annual independent third-party safety audits** — something no other state has done.

Anthropic's head of state and local government relations, Cesar Fernandez, celebrated the vote: *"With strong bipartisan support, Illinois is on track to become the first state to require independent, third-party audits of large frontier AI developers' safety practices."*

The bill is part of an eight-bill AI regulatory package in Illinois, which has filed over 50 AI-related bills in 2026 alone — making it one of the nation's most active legislatures on AI governance.

**Why it matters:** With Congress failing to pass comprehensive AI legislation and the Trump administration having rescinded Biden's AI executive order, states are filling the vacuum. If Pritzker signs SB 315, Illinois becomes the de facto national standard-setter for frontier AI accountability — and other states will follow. The third-party audit requirement is particularly significant: it means companies like OpenAI, Anthropic, and Google won't just self-report their safety practices. They'll be subject to independent verification, which is a fundamental shift from voluntary commitments to enforceable oversight.

**The catch:** Enforcement details matter enormously. Who qualifies as an independent auditor? What happens when audit findings reveal risks? How do you audit a model whose internals are proprietary? The bill's implementation will depend heavily on the rulemaking process that follows — and that's where industry lobbyists will focus their energy.

---

## DeepSeek Makes Its 75% V4-Pro Price Cut Permanent

DeepSeek announced that its 75% price reduction on the **V4-Pro API** — initially introduced as a limited-time promotion — will become **permanent starting June 1, 2026**. The V4-Pro model, which launched last month claiming to usher in the "era of cost-effective 1M context length," will now cost as little as **$0.003625 per million input tokens** for cached reads, down from the original range of $0.0145 to $3.48 per million tokens.

The move is staggering in scale. DeepSeek V4-Pro is now roughly **34x cheaper than GPT-5.5** for comparable workloads, making it by far the most cost-effective frontier AI model available. The company attributed the original higher pricing to "constraints in high-end compute capacity" — constraints that appear to have eased, likely thanks to Huawei's Ascend chips filling the gap left by US export controls on NVIDIA silicon.

**Why it matters:** This is not a temporary promotion or a loss leader. DeepSeek is signaling that frontier AI inference can be dramatically cheaper than what OpenAI and Anthropic charge — and they're making it permanent. For enterprises processing billions of tokens, the cost difference is existential. DeepSeek is essentially commoditizing frontier AI performance, and the incumbents can't afford to ignore it.

**The subtext:** Anthropic has previously accused DeepSeek of "distillation attacks" — improperly learning from Claude's more capable models to boost DeepSeek's own performance. Whether that's true or not, the pricing pressure is real. OpenAI and Anthropic now face a competitor offering comparable capability at a fraction of the cost, and the price war will only intensify.

---

## Anthropic Doubles Claude Code Limits with SpaceX Colossus Deal

Anthropic **permanently doubled Claude Code's 5-hour usage limits** for Pro, Max, Team, and Enterprise plans, effective May 6 — and the reason is a massive compute deal with SpaceX. The partnership gives Anthropic access to **SpaceX's Colossus 1 data center in Memphis**, housing over **220,000 NVIDIA GPUs** that were originally built to train xAI's Grok models.

The deal was announced at Anthropic's "Code with Claude" developer event in San Francisco, where the company also introduced materially higher API rate limits for Claude Opus models. Anthropic stated: *"We've agreed to a partnership with SpaceX that will substantially increase our compute capacity. This, along with our other recent compute deals, means that we've been able to increase our usage limits for Claude Code and the Claude API."*

This is just one piece of Anthropic's massive infrastructure buildout. The company now has:
- **5 GW agreement with Amazon** (including 1 GW of new capacity by end of 2026)
- **5 GW agreement with Google and Broadcom** (coming online in 2027)
- **$30 billion partnership with Microsoft and NVIDIA** for Azure capacity
- **$50 billion investment** in American AI infrastructure with Fluidstack
- **Potential orbital AI compute** developed with SpaceX

**Why it matters:** Anthropic is spending tens of billions on compute because demand for Claude is surging past capacity. The SpaceX deal is particularly symbolic — Anthropic is literally taking over the data center that was built for Elon Musk's rival xAI. When the company building Grok's infrastructure is now running Claude, the competitive dynamics have fundamentally shifted. For developers, the doubled limits mean Claude Code is finally viable as a primary coding tool rather than a rationed resource.

**The catch:** Free tier users didn't get the permanent doubling — they got a temporary March promotion but were excluded from the May 6 increase. And weekly limits haven't changed yet, so heavy users will still hit ceilings. But the direction is clear: Anthropic is investing aggressively to remove the single biggest user complaint about Claude.

---

## ChatGPT Voice Mode Runs on a Significantly Weaker Model

A growing chorus of users and AI researchers are highlighting an uncomfortable truth about ChatGPT's popular **Advanced Voice Mode**: it runs on a **much older, weaker model** than what powers the text-based ChatGPT experience. The voice mode appears to use a GPT-4o-era model with an **April 2024 knowledge cutoff** — roughly a year behind OpenAI's latest models.

Andrej Karpathy, OpenAI's former founding member and research director, crystallized the issue: *"It really is simultaneously the case that OpenAI's free and slightly orphaned Advanced Voice Mode will fumble the dumbest questions in your Instagram reels, and at the same time, OpenAI's highest-tier Codex model will go off for 1 hour to coherently restructure an entire code base."*

Simon Willison echoed this: *"I think it's non-obvious to many people that the OpenAI voice mode runs on a much older, much weaker model — it feels like the AI that you can talk to should be the smartest AI, but it really isn't."*

The gap is stark. While paying users can access GPT-5.5 and Codex for complex reasoning tasks, the voice interface — the most human and accessible way to interact with AI — is stuck on last year's model. Users report that voice mode struggles with basic questions, has a harsher content filter, and lacks the reasoning capabilities of its text-based siblings.

**Why it matters:** This is a trust issue masquerading as a technical one. Millions of people interact with AI primarily through voice — it's the most natural interface. When the "face" of ChatGPT is its dumbest version, it creates a misleading impression of AI capability. Users who only experience voice mode will fundamentally underestimate what modern AI can do. Meanwhile, OpenAI is essentially running a two-tier system where the most intuitive interface gets the least capable model — likely because running frontier models in real-time voice mode is enormously expensive.

**The irony:** Anthropic just doubled Claude Code limits by securing 220,000 GPUs. If compute is the bottleneck for voice AI, the company that solves that constraint first will have a massive advantage in the interface that matters most to everyday users.

---

## Microsoft Announces New Coding-Focused AI Model for Build 2026

Microsoft announced it will release a **new coding-focused AI model** at its Build 2026 developer conference, taking place June 9-11. The model is positioned as a direct competitor to Anthropic's Claude Code and OpenAI's Codex in the increasingly lucrative AI-assisted development market.

Details remain sparse, but the announcement signals that Microsoft is doubling down on developer tools as the primary battleground for enterprise AI adoption. The company already integrates AI across Visual Studio, GitHub Copilot, and Azure, and a purpose-built coding model would tighten that ecosystem further.

**Why it matters:** The coding model space is heating up fast. Anthropic's Claude Code just got doubled limits. OpenAI's Codex is gaining Goal Mode and Appshots. And now Microsoft — which has the largest developer ecosystem in the world — is entering the fray with a purpose-built model. For developers, competition means better tools and lower prices. For the AI companies, coding is the highest-value use case that drives enterprise adoption, and whoever wins here will have a significant revenue moat.

---

## Pope Leo XIV's Magnifica Humanitas: The First Papal AI Encyclical

Pope Leo XIV released **Magnifica Humanitas** on May 25, 2026 — the **first papal encyclical in history to address artificial intelligence**. The document warns that AI risks "hollowing out humanity" if developed without ethical guardrails, and calls for technology to serve human dignity rather than replace it.

The encyclical argues that while AI can enhance human capability, it must never be allowed to reduce people to data points or diminish the sanctity of human relationships. It specifically raises concerns about autonomous weapons, surveillance, and the displacement of workers without social protection.

**Why it matters:** With 1.4 billion Catholics worldwide, a papal encyclical carries moral weight that no tech CEO or government regulator can match. The Pope's intervention reframes AI ethics from a technical compliance issue to a fundamental question of human dignity — and that framing will influence policy debates for years to come. When the leader of the world's largest religious institution says AI could "hollow out humanity," policymakers listen.

---

## Quick Hits

- **Anthropic Security Tool**: Anthropic launched a public beta of its **Claude Security Tool for Enterprises**, giving organizations detailed usage analytics and security controls for Claude deployments. The tool provides visibility into how employees use AI — addressing the top concern of CISOs worried about data leakage through LLM interfaces.

- **Cohere-Aleph Alpha Merger Creates $20B European AI Champion**: Cohere's acquisition of German AI company Aleph Alpha creates a transatlantic sovereign AI challenger valued at roughly $20B. The combined entity positions itself as the Western alternative to both US big tech AI and Chinese models, with strong government contracts in Europe and Canada.

- **China Tightens AI Travel Restrictions**: Reports emerged that China is restricting travel for AI researchers, particularly those working on frontier models. The move appears designed to prevent knowledge transfer of advanced AI capabilities abroad, signaling Beijing's view that AI expertise is now a strategic national asset.

---

*That's your AI news roundup for May 29, 2026. Illinois is leading the regulatory charge, DeepSeek is leading the price war, Anthropic is leading the compute arms race, and the Pope is leading the moral argument. Tomorrow? Probably more of the same.*