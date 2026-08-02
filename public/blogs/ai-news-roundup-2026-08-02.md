---
title: "AI News Roundup: EU AI Act Transparency Rules Take Effect, OpenAI Slashes GPT-5.6 Luna Prices 80%, DeepSeek V4-Flash Beats Pro on Agent Benchmarks, Custom GPTs Get the Axe, and EU GPAI Enforcement Begins — August 2, 2026"
date: "2026-08-02"
tags: ["ai", "news", "eu-ai-act", "openai", "gpt-5.6", "deepseek", "custom-gpts", "workspace-agents", "regulation", "pricing", "transparency", "gpai", "glm"]
category: "AI News"
readTime: "14 min"
slug: "ai-news-roundup-2026-08-02"
excerpt: "The EU AI Act's Article 50 transparency obligations became enforceable on August 2, requiring AI-generated content to be machine-detectable and chatbots to disclose their AI nature. OpenAI slashed GPT-5.6 Luna prices by 80% and Terra by 20%. DeepSeek's V4-Flash-0731 public beta beats its own V4-Pro-Preview on nine agent benchmarks. Custom GPTs are being deprecated for Workspace Agents. And the EU AI Office gains enforcement powers over GPAI model providers."
---

# AI News Roundup: August 2, 2026

The EU's AI transparency rules are now law. OpenAI just made its cheapest model 80% cheaper — undercutting DeepSeek on input pricing. DeepSeek responded by releasing a retrained V4-Flash that beats its own flagship on agent tasks. OpenAI is killing Custom GPTs and forcing migration to Workspace Agents. And Europe's AI Office can now fine GPAI model providers up to €35 million or 7% of global revenue. It's Saturday, August 2 — let's get into it.

---

## EU AI Act Article 50 Transparency Obligations Now Enforceable

**As of August 2, 2026, the EU AI Act's Article 50 transparency obligations are in full effect, requiring providers and deployers of AI systems to ensure users know when they're interacting with AI and that AI-generated content is identifiable as such.**

This is the most broadly applicable provision in the entire AI Act. It doesn't just apply to high-risk systems — it applies to any AI system operating in the EU market, regardless of when it was placed on the market. The four key requirements:

1. **Chatbot disclosure**: Providers of AI systems intended to interact with people (chatbots, virtual assistants) must design them so users are informed they're interacting with AI.
2. **AI-generated content marking**: Providers of systems that generate synthetic audio, image, video, or text must ensure their outputs are machine-detectable as AI-generated.
3. **Emotion recognition and biometric categorization**: Deployers must inform users when these systems are being used on them.
4. **Deepfakes and public-interest text**: Deployers must disclose that content has been artificially generated or manipulated, especially deepfakes and AI-generated text on matters of public interest.

There's a limited grace period: systems already on the market before August 2 have until December 2, 2026, to comply with the machine-readable content marking requirement under Article 50(2). Everything else applies immediately.

Non-compliance carries fines of up to €15 million or 3% of worldwide annual revenue, whichever is higher. The European Commission published guidelines on Article 50's scope and application on July 20, 2026, giving companies just 13 days to digest and implement.

This is a watershed moment. Every company deploying a chatbot, generating synthetic content, or using emotion recognition in the EU needs to be in compliance — starting today. The "we're still figuring it out" window is closed.

---

## OpenAI Slashes GPT-5.6 Luna Prices by 80%, Terra by 20%

**On July 30, OpenAI cut GPT-5.6 Luna's API pricing by 80% — from $1/$6 per million input/output tokens down to $0.20/$1.20 — and GPT-5.6 Terra by 20%, from $2.50/$15 to $2/$12. GPT-5.6 Sol keeps its pricing but gained a new Fast mode that runs 2.5x faster at double the standard rate.**

This is aggressive, even by AI pricing standards. The price cut came just three weeks after the GPT-5.6 family launched on July 9. By comparison, model price cuts typically come months after launch. OpenAI says it achieved the savings by having GPT-5.6 optimize its own runtime efficiency — the model literally made itself cheaper to run.

The competitive context tells the real story. Luna at $0.20/$1.20 undercuts DeepSeek's V4-Flash on input costs ($0.14/$1M input with cache miss) and is competitive on output. But the deeper signal is that AI pricing is in free fall. Anthropic's Fable 5 sits at $10/$50, and even its Sonnet 5 introductory pricing of $2/$10 is set to rise to $3/$15 after August 31. The gap between the cheapest and most expensive frontier models is now 50x on output tokens.

OpenAI is clearly playing a volume game. If Luna is nearly free, every startup and enterprise routes their low-stakes, high-volume workloads through OpenAI. It's the AWS strategy: own the base layer, tax everything above it. The question is whether the pricing floor can sustain itself — OpenAI is reportedly projecting $25 billion in revenue this year alongside $25 billion in cash burn.

---

## DeepSeek V4-Flash-0731 Public Beta Beats V4-Pro on Agent Benchmarks

**DeepSeek released the official public beta of its V4-Flash API on July 31, under the build designation V4-Flash-0731. The headline: the retrained model beats DeepSeek's own V4-Pro-Preview on all nine agent and coding benchmarks the company published.**

This is remarkable. V4-Flash has 284 billion total parameters but activates only 13 billion per token through its Mixture-of-Experts architecture. It supports a 1 million token context window. The 0731 build keeps the exact same architecture and size as the April preview — the only change is re-post-training. DeepSeek reran its post-training pipeline with a much stronger emphasis on agentic tasks, and the results speak for themselves: the small model now outperforms the big one on the benchmarks that matter most for production use.

Pricing is unchanged: $0.14 per million input tokens (cache miss), $0.0028 (cache hit), and $0.28 per million output tokens for V4-Flash. V4-Pro output is $0.87 per million tokens. The model natively supports the Responses API format and is adapted for Codex.

There's an operational caveat: as of launch, only DeepSeek's own API provider is serving the 0731 build. Teams routing through OpenRouter or other aggregators may still receive the older April preview build until those providers update their routing.

The implications are significant. DeepSeek is demonstrating that re-post-training can produce qualitatively different behavior without any change to model architecture, size, or knowledge base. The pre-training determines what the model knows; the post-training determines how it acts. For developers, this means the model at any given API endpoint is not a fixed object — it can meaningfully change between builds. Version pinning is no longer optional.

---

## OpenAI Deprecating Custom GPTs, Forcing Migration to Workspace Agents

**OpenAI is deprecating Custom GPTs for Business, Enterprise, Edu, and Teachers accounts, pushing users toward Workspace Agents — the Codex-powered AI agents that connect to Slack, Salesforce, Gmail, and other enterprise tools. Individual users on Plus, Pro, and Free plans can keep their Custom GPTs for now, but every new feature is shipping into Workspace Agents. Custom GPTs are in maintenance mode.**

The move was telegraphed in April 2026, when OpenAI introduced Workspace Agents and described them as "an evolution of GPTs." But the reality is more pointed: Custom GPTs lived inside ChatGPT and couldn't be white-labeled or moved to your own domain. Workspace Agents live inside ChatGPT too, but with deeper lock-in. Pricing is credit-based and layered on top of paid workspace plans. The resale story is gone — your audience or clients need their own ChatGPT seat to access whatever you built.

The rumored shutdown date is August 26, 2026, though OpenAI hasn't published a clear public notice. A one-click conversion tool is reportedly on the way. The broader picture is that OpenAI is consolidating its agent infrastructure around Codex and removing the lower-friction GPT builder that let anyone create and share custom AI tools. It's a strategic play: kill the hobbyist tier, focus on the enterprise tier, and make it harder to leave.

For the thousands of businesses and creators who built products on top of Custom GPTs, this is a forced migration with no real alternative inside the OpenAI ecosystem. The lesson, again, is that platform dependencies are business risks.

---

## EU AI Office Gains GPAI Enforcement Powers

**Also on August 2, 2026, the European Commission's AI Office gains full enforcement powers over providers of general-purpose AI (GPAI) models, including the ability to request technical documentation, evaluate models, require corrective measures, and issue fines of up to €35 million or 7% of global annual revenue.**

This is the regulatory backbone that makes Article 50's transparency rules enforceable. The AI Office's powers extend beyond just GPAI models — for vertically integrated providers (which describes most frontier labs), oversight covers both the model and the system built on it where they come from the same business group. This consolidates oversight in Brussels rather than across 27 national regulators.

The AI Board, Scientific Panel, and Advisory Forum will steer and advise the AI Act's governance. Member States are required to have at least one AI regulatory sandbox operational by today as well.

The practical impact: frontier AI companies operating in the EU — OpenAI, Anthropic, Google, Meta, and others — are now subject to direct regulatory oversight by Brussels. The AI Office can demand documentation, run evaluations, and mandate changes. This is the regulatory framework that 1,300+ AI employees effectively asked for in last week's "Pacing the Frontier" letter. Whether it'll be effective enforcement or bureaucratic theater depends entirely on the AI Office's budget, staffing, and willingness to use its new powers.

---

## GLM-5.5 Rumored for August: Zhipu AI's 1T+ Open-Weight Challenger

**Zhipu AI (Z.ai) is reportedly preparing GLM-5.5 for release in August 2026, according to a JPMorgan research note relayed by Reuters and confirmed by CGTN. Community leaks suggest the model will have over 1 trillion total parameters, a 1 million token context window, open weights, and a heavy focus on long-running coding agents.**

GLM-5.5 would succeed GLM-5.2, which launched June 13 and immediately became the highest-scoring open-source model on the Artificial Analysis Intelligence Index at 51. Leaks suggest Zhipu may skip GLM-5.3 and GLM-5.4 entirely. The model is positioned to compete directly with Anthropic's Fable 5 and Mythos — the community has already dubbed the target "Open Fable."

The open-weight angle is critical. If GLM-5.5 ships with MIT-style licensing (as GLM-5.2 did), it would give developers and researchers full access to train, fine-tune, and deploy a frontier-class model on their own infrastructure. That's the opposite of the lock-in strategy OpenAI is pursuing with Workspace Agents. The AI market is bifurcating: closed platforms tightening control on one side, open-weight models eroding the price floor on the other.

Zhipu hasn't confirmed specs or a launch date. But with the August window and Zhipu's aggressive release cadence (GLM-5.2 shipped just seven weeks ago), this is a credible forecast rather than speculation.

---

## Quick Hits

- **GPT-5.4 and GPT-5.4 mini being removed from Codex:** OpenAI announced that GPT-5.4 and GPT-5.4 mini will be removed from Codex on August 31, 2026, though they'll remain available via API. The models are being replaced by the GPT-5.6 family across Codex and ChatGPT Work.

- **Agent Builder deprecation confirmed:** OpenAI formally deprecated Agent Builder on June 3, with a shutdown date of November 30, 2026. Developers are being directed to the Agents SDK or ChatGPT Workspace Agents. The deprecation page was quietly added to OpenAI's API documentation.

- **Suno loses Munich copyright ruling:** AI music generator Suno lost a significant copyright case in Munich, where a court ruled that GEMA (the German performing rights organization) demonstrated sufficient probability that Suno's AI was trained on copyrighted works. The ruling adds to the growing body of AI copyright decisions in Europe.

---

**That's the roundup for August 2.** The theme this week is clear: the regulatory walls are closing in. The EU AI Act's transparency rules are now enforceable, the AI Office can levy massive fines, and every company deploying AI in Europe needs to be in compliance today. Meanwhile, OpenAI is cutting prices aggressively (Luna at $0.20/$1.20 is shockingly cheap) while simultaneously tightening its ecosystem lock-in by killing Custom GPTs. And DeepSeek proved that you don't need a bigger model to beat a bigger model — just better post-training. The AI market is simultaneously becoming more regulated, more commoditized, and more consolidated. Pick two out of three, they said. Turns out you can have all three.