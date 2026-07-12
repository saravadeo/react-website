---
title: "AI News Roundup: Meta Kills Instagram AI After Backlash, Micron Bets $250B on AI Memory, CrowdStrike Exposes New AI Attack Vectors, Pope Leo Warns of AI "Babel Syndrome," and Colibrì Runs a 1.5TB Model on 25GB RAM — July 11, 2026"
date: "2026-07-11"
tags: ["ai", "news", "meta", "micron", "crowdstrike", "cybersecurity", "privacy", "pope", "open-source", "colibri"]
category: "AI News"
readTime: "20 min"
slug: "ai-news-roundup-2026-07-11"
excerpt: "Meta pulled its AI image generator from Instagram after just days of furious backlash over privacy and consent. Micron's CEO announced a staggering $250 billion investment in AI memory chip development. CrowdStrike identified five new prompt injection attack techniques targeting AI agents. Pope Leo XIV released his first encyclical warning of AI-driven 'Babel syndrome.' And Colibrì demonstrated a frontier-level 1.5TB AI model running on just 25GB of RAM — potentially rewriting the rules of AI deployment."
---

# AI News Roundup: July 11, 2026

Meta built an AI image generator, turned it loose on Instagram, and watched it implode in less than a week. That's the headline, but the real story is deeper: the company trained its "Muse" model on users' public photos without meaningful consent, and when Hollywood and everyday users alike revolted, Meta admitted it "missed the mark" and yanked the feature. Meanwhile, Micron is making the largest single semiconductor investment in US history — $250 billion for AI memory chips — because the AI boom's real bottleneck isn't compute, it's memory. CrowdStrike found five new ways to attack AI agents, Pope Leo compared AI to the Tower of Babel, and a scrappy research project called Colibrì just showed that you can run a 1.5-terabyte model on hardware that costs less than a gaming PC. The AI industry is simultaneously overreaching, overinvesting, undersecuring, and occasionally doing something genuinely surprising. Let's get into it.

---

## Meta Yanks AI Image Generator From Instagram After Backlash Over Consent and Privacy

**Meta removed its "Muse" AI image generation feature from Instagram after just days of intense backlash from users and celebrities, admitting the tool "missed the mark." The feature had used public Instagram photos to train an AI model that could restyle users' images — without explicit consent.**

### What's happening

- Meta launched "Muse," an AI-powered image generation and restyling feature on Instagram that could transform users' photos into various artistic styles
- The feature immediately drew fire because it was trained on public Instagram photos without explicit user consent — raising profound questions about who owns your face and your art when a platform decides to train AI on it
- Hollywood figures and artists were among the loudest critics, with Variety and Deadline reporting that the feature was seen as a massive privacy violation and an unauthorized use of creative work
- The New York Times, TechCrunch, BBC, and The Guardian all covered the backlash extensively, with The Guardian noting Meta "ditched" the feature over privacy concerns
- Meta issued a statement saying the feature "missed the mark" and removed it from Instagram
- KCRA reported that Meta "reversed" the feature, suggesting it was pulled rather than paused for fixes
- The incident echoes previous AI privacy controversies but is notable for the speed of the reversal — from launch to removal in days

### Why it matters

This is the most significant consumer AI privacy backlash since the early days of facial recognition, and it happened with breathtaking speed. Meta launched Muse, users revolted, and the feature was killed — all within the same week. The message from the public is unmistakable: just because content is "public" on your platform doesn't mean users consent to having it ingested into an AI model that can replicate their likeness and artistic style. The "missed the mark" language is corporate-speak for "we got caught," and the speed of the reversal suggests Meta's internal calculus was simple: the reputational damage exceeded any potential revenue. But here's the deeper problem: every AI company is training on public data. Meta just happened to do it in the most visible way possible, with people's actual photos, on a platform where they feel personal ownership. The question isn't whether AI should be trained on public data — it's whether the word "public" means what tech companies think it means. The answer, increasingly, is no.

---

## Micron Announces $250 Billion Investment in US AI Memory Chip Production

**Micron CEO Sanjay Mehrotra announced a staggering $250 billion investment plan for expanded AI memory chip development in the United States, committing the largest single semiconductor investment in US history through 2035. The bet: AI's insatiable demand for memory will only grow.**

### What's happening

- Micron CEO Sanjay Mehrotra announced a $250 billion investment in expanded AI memory chip development in the United States, the largest single semiconductor investment commitment in US history
- Reuters reported that Micron "boosts US spending plan again" — this is an increase from a previous commitment, reflecting accelerating demand
- The investment spans through 2035, with Fox Business noting Mehrotra described the AI boom as driving "unprecedented" memory demand
- Micron shares rose almost 5% following the announcement, with CNBC reporting the market's positive reaction
- The Motley Fool and Yahoo Finance both framed the investment as a direct play on the AI infrastructure buildout
- The investment comes amid a broader shift in the semiconductor industry: Goldman Sachs reported that AI investment is pivoting from training infrastructure to inference and enterprise adoption
- Bloomberg noted the investment positions Micron as the primary US-based competitor to Samsung and SK Hynix in the high-bandwidth memory (HBM) market that AI chips require

### Why it matters

$250 billion. Let that number sink in. That's more than the GDP of many countries, and Micron is spending it on memory chips — specifically, the high-bandwidth memory that AI accelerators need. The investment signals something important: the AI infrastructure buildout is far from over, and the bottleneck is shifting from compute to memory. Every GPU needs HBM, and right now Samsung and SK Hynix dominate that market. Micron's bet is that American-made HBM will have strategic value — both commercially and geopolitically — as AI becomes a national security priority. The timing aligns with Goldman Sachs' observation that AI investment is shifting from training to inference and enterprise adoption: as more companies deploy AI in production, memory demand will only accelerate. This isn't just a Micron story; it's a signal that the second wave of AI infrastructure investment — the deployment wave — is about to dwarf the first.

---

## CrowdStrike Identifies Five New Prompt Injection Attack Techniques Targeting AI Agents

**CrowdStrike's latest research identified five novel prompt injection attack techniques that specifically target AI agents, revealing that the security threat landscape for agentic AI is far more complex and dangerous than previously understood.**

### What's happening

- CrowdStrike published research identifying five new prompt injection attack techniques that specifically target AI agents and agentic systems
- CSO Online detailed the findings, noting that these attacks go beyond traditional prompt injection by exploiting the autonomous decision-making capabilities of AI agents
- CrowdStrike also reported that 90 organizations have already been targeted by prompt injection attacks, according to Crypto Briefing's coverage
- The company debuted "Falcon AIDR" (AI Detection and Response), a new product designed to detect threats at the prompt layer in Kubernetes AI applications
- Fierce Network highlighted CrowdStrike's warning that "companies give AI agents keys to the kingdom" — a security disaster in the making
- IT Pro reported that CrowdStrike's broader findings show AI is "officially supercharging cyber attacks," with average breakout times hitting just 29 minutes in 2025 — 65% faster than 2024, and some attacks taking only seconds
- CyberSecurityNews and CyberPress both covered the five new techniques, emphasizing that as AI agents gain more autonomy, the attack surface expands dramatically

### Why it matters

The AI security problem is no longer theoretical, and it's no longer just about data poisoning or model extraction. CrowdStrike's five new prompt injection techniques target the very thing that makes AI agents useful: their autonomy. When an AI agent can take actions on your behalf — booking flights, sending emails, accessing databases — a successful prompt injection doesn't just produce a funny output; it produces real-world consequences. The 90 organizations already targeted is a wake-up call. And the 29-minute average breakout time for cyber attacks (down from 84 minutes in 2024) means human responders can't keep up — which is exactly why CrowdStrike is selling AI-powered detection and response. The irony is structural: AI creates the attack surface, then sells you AI to defend it. But the underlying reality is clear — every company deploying AI agents needs agent-specific security, and almost none of them have it yet.

---

## Pope Leo XIV Releases First Encyclical Warning of AI "Babel Syndrome" and "Idolatry of Profit"

**Pope Leo XIV released his first encyclical, "Magnifica Humanitas," warning that artificial intelligence risks creating a modern Tower of Babel — a "Babel syndrome" where humanity's technological ambition outpaces its moral framework, and an "idolatry of profit" that treats people as means rather than ends.**

### What's happening

- Pope Leo XIV released his first encyclical, titled "Magnifica Humanitas" (Magnificent Humanity), addressing the moral and social implications of artificial intelligence
- The encyclical warns of a "Babel syndrome" — comparing AI's rapid, uncoordinated development to the biblical Tower of Babel, where humanity's ambition outpaced its wisdom
- The Pope specifically criticized the "idolatry of profit" in AI development, arguing that technology must serve humanity rather than concentrating power and wealth
- Forbes reported that the encyclical carries "apocalyptic warnings of moral, social collapse" if AI is not governed by ethical principles
- Vulture and Commonweal Magazine both noted the cultural significance of a Pope naming AI as a central moral concern in his first major teaching document
- OSV News reported that the encyclical warns of the "temptation to build a future excluding God" — a direct challenge to tech utopianism
- Vatican News framed the message as "AI must serve humanity not concentrate power"
- The encyclical comes at a moment when three AI companies are filing IPOs worth a combined $3 trillion+ — giving the Pope's warning about "idolatry of profit" a particular sting

### Why it matters

A Pope naming AI as a central concern in his first encyclical is not a tech story — it's a civilization story. "Magnifica Humanitas" isn't a policy document; it's a moral framework that will shape how 1.3 billion Catholics think about AI. The "Babel syndrome" metaphor is remarkably apt: humanity building something impressive that collapses because it lacks a shared ethical foundation. And the "idolatry of profit" language lands at exactly the moment when Anthropic, OpenAI, and SpaceX are racing to Wall Street with combined valuations exceeding $3 trillion. The Pope isn't saying AI is bad; he's saying AI without moral governance is dangerous. That's a position that transcends politics and should make every AI executive at least pause — not because the Pope has regulatory authority over Silicon Valley, but because he has moral authority over a lot of people who use AI, work in AI, and are affected by AI. The encyclical also represents a shift in the Vatican's engagement with technology: from occasional statements to a formal teaching document. That's a much higher bar.

---

## Colibrì Runs Frontier-Level 1.5TB AI Model on Just 25GB of RAM — a Potential Game-Changer for Local AI

**A proof-of-concept called Colibrì demonstrated the ability to run a frontier-level 1.5-terabyte AI model using only 25GB of RAM, using a novel architecture that could fundamentally change how large models are deployed — making powerful AI accessible on consumer hardware.**

### What's happening

- Tom's Hardware reported on Colibrì, a proof-of-concept project that successfully ran a frontier-level 1.5TB AI model on just 25GB of RAM
- The approach uses a novel memory management and model architecture that dramatically reduces the RAM requirements for running massive models
- The proof-of-concept "shows promise for local AI setups" — meaning you could potentially run GPT-4 class models on a high-end consumer machine rather than a data center
- If the approach scales, it could break the current dependency on cloud infrastructure for large model inference
- The project enters a space where companies like Apple, Qualcomm, and various startups are all racing to make large models run efficiently on edge devices
- The 60x compression ratio (1.5TB model on 25GB RAM) suggests architectural innovations beyond simple quantization or pruning

### Why it matters

This is either a breakthrough or an interesting experiment, and the difference matters enormously. Running a 1.5TB model on 25GB of RAM would be a 60x compression ratio — far beyond what quantization alone achieves. If Colibrì's approach preserves model quality while dramatically reducing hardware requirements, it could democratize access to frontier-level AI. The current AI deployment model requires expensive cloud infrastructure: you pay per token, you're dependent on API availability, and your data flows through someone else's servers. Colibrì suggests an alternative where the model lives on your machine, inference is free, and your data never leaves. That's the dream of the local AI movement, and it's been limited by the hardware requirements of large models. If this proof-of-concept becomes production-ready, it could shift power away from cloud AI providers and toward edge deployment. But "proof-of-concept" and "production-ready" are very different things. For now, it's a fascinating signal that the hardware bottleneck for AI might be more solvable than we thought.

---

## Also Making Headlines

### Trump Administration Lifts Restrictions on OpenAI's GPT 5.6, Driving Open-Source Shift
Axios reported that the Trump administration lifted restrictions on OpenAI's GPT 5.6, while simultaneously clamping down on other frontier model access. PYMNTS and The Hill both reported that the restrictions are driving a significant shift toward open-source AI models, as companies seek alternatives to government-controlled proprietary models. The Information detailed why "open-source models are benefitting from the White House clampdown." SecurityWeek noted that OpenAI and Anthropic are both limiting new model releases to "Trump-approved customers" during cybersecurity reviews. The emerging picture: the US government is increasingly treating frontier AI models as strategic assets, and companies are responding by hedging between proprietary and open-source approaches.

### University of Chicago Law School Bans Phones and Laptops for First-Year Students Over AI Concerns
The University of Chicago Law School will ban phones and laptops in first-year classrooms as part of an AI strategy, ABC7 Chicago and CBS News reported. Reuters confirmed that the ban targets AI-assisted cheating, with the school arguing that traditional note-taking on paper develops better analytical skills. It's one of the most aggressive institutional responses to AI in education — not regulating AI use, but removing the tools that enable it entirely. Whether this approach works or simply penalizes students who use technology responsibly remains to be seen.

### Over 40% of People Are Limiting AI Use as Popularity Starts to Wane
A new report reveals that over 40% of surveyed users are actively reducing their AI usage, with Tech Xplore and Eurasia Review both covering the findings. The data suggests that AI's initial novelty is wearing off, and users are hitting real limitations: hallucinations, reliability issues, and the simple realization that not every task benefits from AI assistance. The headline is provocative, but the nuance matters — "limiting" use isn't the same as "abandoning" it. Users are getting more selective about when and how they use AI, which is actually a sign of maturation, not rejection.

### UN Digital Tech Agency Launches Initiative to Improve Trust in AI Agents
Reuters reported that the International Telecommunication Union (ITU) — the UN's digital technology agency — launched a new initiative to improve trust in AI agents. The move comes as AI agents become more autonomous and are deployed in higher-stakes environments, from customer service to cybersecurity. The initiative aims to establish baseline trust and safety standards for agentic AI, recognizing that the current "trust us" approach from AI companies isn't sufficient for systems that take actions on behalf of users.

### Goldman Sachs: AI Investment Shifting From Training to Inference and Enterprise Adoption
Goldman Sachs published a research note observing that AI investment is shifting from training infrastructure to inference and enterprise adoption. The shift reflects the maturation of the AI market: the biggest models are already trained, and the next phase of value creation comes from deploying them efficiently and at scale. This aligns with Micron's $250B memory investment (inference needs memory), CrowdStrike's focus on AI agent security (deployment needs protection), and the broader trend of AI moving from research labs to production systems.

---

## The Takeaway

July 11, 2026 is the day the AI industry's ambition met its limits — on multiple fronts simultaneously. Meta's Instagram AI disaster showed that even the world's most sophisticated social media company can misjudge user consent. Micron's $250 billion bet showed that the infrastructure buildout is nowhere near finished. CrowdStrike's findings showed that every new AI capability creates new vulnerabilities. The Pope's encyclical showed that the moral questions aren't going away. And Colibrì's proof-of-concept showed that the hardware assumptions underpinning the entire AI industry might be more fragile than we think.

The connecting thread? The AI industry is moving faster than its governance, its security, its ethics, and its own understanding of what users actually want. Meta built an AI tool nobody asked for, trained it on data nobody consented to share, and pulled it when everyone objected. That's not a bug — it's a symptom of an industry that builds first and asks permission later. Micron's investment, CrowdStrike's warnings, and the Pope's encyclical are all responses to the same reality: AI is here, it's getting bigger, and we're still figuring out the rules. The Colibrì project is a reminder that the rules might change faster than we think — if frontier models can run on consumer hardware, the entire cloud-AI business model could be disrupted from below. The only certainty is that the pace isn't slowing down. The question is whether the industry's wisdom can catch up to its ambition before the next backlash.