---
title: "AI News Roundup: GPT-5.5 Codex Reasoning Token Bug Exposed, Anthropic's Fable 5 Goes Global, Armin Ronacher Reveals Claude's Tool-Calling Regression, Google's AI Electricity Use Surges 37%, and Anthropic Accuses Alibaba of Largest Claude Cloning Attack — July 5, 2026"
date: "2026-07-05"
tags: ["ai", "news", "openai", "gpt-5.5", "codex", "anthropic", "fable-5", "claude", "google", "alibaba", "chips", "energy", "tool-calling", "regulation"]
category: "AI News"
readTime: "17 min"
slug: "ai-news-roundup-2026-07-05"
excerpt: "OpenAI's GPT-5.5 Codex has a reasoning-token clustering bug that may be degrading complex task performance. Anthropic's Fable 5 achieved full global release after export controls were lifted. Armin Ronacher's deep dive reveals Claude Opus 4.8 and Sonnet 5 are worse at tool-calling schemas than older models. Google's AI infrastructure drove a 37% increase in electricity consumption. And Anthropic presented evidence that Alibaba ran the largest Claude capability extraction campaign ever measured."
---

# AI News Roundup: July 5, 2026

This week, the cracks in AI's foundation are showing — and they're coming from the most unexpected places. A detailed GitHub issue reveals that GPT-5.5's reasoning tokens cluster at suspicious fixed boundaries, potentially explaining degraded performance on complex Codex tasks. Armin Ronacher, creator of Flask and Sentry SDK architect, published a meticulous analysis showing that newer Claude models are *worse* at tool-calling than their predecessors — a regression that challenges the "better models solve everything" narrative. And Anthropic's Claude Code has a session leakage bug that's raising uncomfortable questions about enterprise data isolation.

On the policy front, Anthropic secured full global deployment for Fable 5 after a dramatic behind-the-scenes negotiation with the Trump administration. Google revealed that its AI infrastructure push drove a staggering 37% increase in electricity consumption. And Anthropic presented explosive evidence that Alibaba ran the largest Claude capability extraction campaign ever recorded — 28.8 million exchanges through 25,000 fraudulent accounts.

---

## GPT-5.5 Codex Reasoning-Token Clustering Bug Exposed

**A detailed GitHub issue reveals that GPT-5.5 responses in OpenAI's Codex product disproportionately land at exactly 516 reasoning tokens, with additional fixed-boundary spikes at 1034 and 1552 — a pattern that may explain degraded performance on complex tasks.**

### What's happening

- GitHub user `maille` filed issue #30364 on the OpenAI Codex repository, presenting aggregate evidence that GPT-5.5's `reasoning_output_tokens` cluster at fixed boundaries — particularly exactly 516 tokens
- The analysis covers 390,195 response-level token records across 865 sessions from February through June 2026
- GPT-5.5 accounts for 82% of exact-516 reasoning token events despite representing only 19.3% of all responses
- 44% of GPT-5.5 responses with ≥516 reasoning tokens land at exactly 516, compared to just 1.3% for non-GPT-5.5 models
- The clustering has gotten dramatically worse over time: from 0.11% in February to 53.3% in May 2026
- The issue is related to a prior report (#29353) showing that GPT-5.5 runs ending at exactly 516 reasoning tokens returned the wrong answer
- GPT-5.3-codex and gpt-5.3-codex-spark show 0% exact-516 clustering, and gpt-5.2 shows only 0.34%

### Why it matters

This is the kind of finding that should make anyone relying on GPT-5.5 for complex work very nervous. If 44% of your model's responses with ≥516 reasoning tokens are hitting a fixed boundary rather than naturally concluding their reasoning, it means the model is being artificially truncated — and truncated reasoning means truncated thinking.

The data is damning precisely because it's model-specific. GPT-5.2, GPT-5.3-codex, and GPT-5.3-codex-spark all show negligible clustering at 516. Only GPT-5.5 has this pattern, and it's getting worse over time — jumping from 0.11% in February to over 50% in May. That's not random noise; that's a systematic behavior that's being reinforced.

The implications for developers are serious. If you're using GPT-5.5 through Codex for complex programming tasks and getting wrong answers, the model may not be failing because it can't reason — it may be failing because it's being stopped mid-thought. The fixed boundaries at 516, 1034, and 1552 suggest some kind of thresholded reasoning-budget mechanism that's cutting off reasoning at predetermined points rather than letting it conclude naturally.

OpenAI hasn't responded to the issue yet, and that's telling. When your flagship model's reasoning tokens have a statistical anomaly this clear, silence isn't reassuring. Developers deserve to know whether this is a bug, a feature, or something in between — and whether it's being fixed.

---

## Anthropic's Fable 5 Achieves Full Global Release After Export Controls Lifted

**Anthropic's Claude Fable 5 is now available globally after the Trump administration lifted export controls, following a behind-the-scenes negotiation where Anthropic agreed to expanded safety testing and government partnership in exchange for deployment freedom.**

### What's happening

- As of July 3, Anthropic confirmed that Fable 5 is available globally, and US organizations have had access to Mythos 5 restored since June 26
- Commerce Secretary Howard Lutnick sent a letter to Anthropic stating that the company "no longer need[s] a license for exports or in-country transfers of its Claude Mythos and Claude Fable AI models"
- The release follows a tense period where Anthropic's models were briefly restricted from international deployment due to export control concerns
- Anthropic agreed to expand its partnership with the US government, set up a dedicated red-team program with hackers, and create an internal team to monitor emerging jailbreak techniques
- White House Chief of Staff Susie Wiles celebrated the deployment on X, framing it as a win for the "America First" agenda: "the government and private sector have worked together in a way we have never seen before"
- Lutnick's letter included a warning that the US "reserves the right to re-evaluate the decisions" and reimpose export curbs at any point

### Why it matters

The Fable 5 global release is really two stories. The first is straightforward: Anthropic got its most capable model back in the hands of international users, which is good for the company's revenue and competitive position against OpenAI and Google. The second is more complicated: the mechanism by which Anthropic achieved this was essentially a negotiated settlement with the Trump administration, where the company traded expanded government access and safety testing for deployment freedom.

The explicit quid pro quo is unprecedented. Anthropic agreed to a government partnership, a red-team program, and a dedicated monitoring team — not because it wanted to, but because it was the price of global deployment. Lutnick's letter makes this crystal clear: the freedom to deploy comes with conditions, and those conditions can be revoked at any time.

For the AI industry, this establishes a new template. The US government now has a playbook for extracting concessions from AI companies in exchange for deployment permissions. Anthropic went first. Who goes next? And what happens when a company refuses the deal — does it simply lose the ability to compete internationally?

The irony is that Anthropic, the company that made "AI safety" its entire brand identity, ended up partnering with an administration that has been skeptical of AI regulation. Sometimes the most effective safety measure is a seat at the table, even if the table is in a building you'd rather not be in.

---

## Armin Ronacher's "Better Models: Worse Tools" — Claude's Tool-Calling Regression

**Flask creator and Sentry SDK architect Armin Ronacher published a detailed analysis showing that Anthropic's newer Claude models (Opus 4.8 and Sonnet 5) are *worse* at tool-calling schema compliance than older models, inventing phantom parameters that violate the specified schema.**

### What's happening

- Ronacher discovered that Claude Opus 4.8 and Sonnet 5 frequently add invented fields to tool call parameters — keys like `requireUnique`, `type`, `id`, `kind`, `matchCase`, `in_file`, `children`, and even `cost`
- The problem is specific to newer Anthropic models: older Claude models do not exhibit this behavior
- The actual edit content (oldText/newText) in the malformed calls is byte-correct — the model correctly understands what to do, but adds phantom parameters afterward
- The failure is context-dependent: fresh single-turn prompts don't reproduce it; it occurs primarily in agentic sessions with longer conversation histories
- Stripping thinking blocks from history reduced the failure rate by half; enabling strict tool invocation eliminated it entirely
- Ronacher's hypothesis: this is a training artifact from Claude Code's own tool harness, which contains retry paths, parameter aliases, type coercions, Unicode repairs, and filtering of unknown keys — meaning slightly malformed tool calls still receive reward during RL training
- The post went viral on Hacker News, hitting #8 on the front page with 126 points in 8 hours

### Why it matters

This is one of the most important AI engineering posts of 2026, and it's important precisely because it's about something that most people would consider a boring detail: tool-calling schema compliance. But Ronacher's analysis reveals something fundamental about how modern AI models are trained, and it's not flattering.

When your newest, most expensive, most capable model is *worse* at following a specified JSON schema than the model it replaced, something has gone wrong in the training pipeline. Ronacher's hypothesis is compelling: Claude Code's harness silently repairs malformed tool calls during reinforcement learning, so the model never gets a strong gradient against adding phantom parameters. The model learns that "close enough" tool calls work, because the harness forgives them.

The broader lesson is about the gap between benchmark performance and real-world reliability. Opus 4.8 and Sonnet 5 score higher on standard benchmarks than their predecessors, but they're worse at a specific, critical task: following the tool schema that developers define. For anyone building production systems with AI agents, this is the gap that matters. Benchmarks don't capture it. Your integration tests might.

The fix is known — strict tool invocation mode — but it comes with its own trade-offs. When you force a model to follow a schema exactly, you sometimes lose flexibility that makes it creative in other ways. The question for Anthropic is whether they'll address this at the training level, or continue to rely on clients silently forgiving their model's hallucinated parameters.

---

## Claude Code Enterprise Session Leakage Bug Reported

**A GitHub issue reports potential session and cache leakage between Claude Code workspace instances, raising serious questions about data isolation in Anthropic's enterprise product.**

### What's happening

- A Claude Code Enterprise user reported that their agent suddenly started asking about "Minecraft bricks" and confidently asserted it was building a Minecraft temple — something from someone else's session
- The user was authenticated to an Enterprise ZDR (Zero Data Retention) workspace, which is supposed to provide the highest level of data isolation
- The issue raises two possibilities: either cache is leaking between workspace instances within the same enterprise, or it's leaking from consumer accounts into enterprise ones
- If the former, it's a workspace isolation bug. If the latter, it's a far more serious data confidentiality breach
- The issue gained significant traction on Hacker News, hitting #12 with 281 points and 129 comments
- Anthropic has not yet issued a public response or fix

### Why it matters

Enterprise AI tools live or die on data isolation. When a company pays for ZDR — Zero Data Retention — they're paying for the promise that their data stays within their organization and gets deleted after use. If Claude Code's caching layer is leaking context between workspace instances, or worse, between enterprise and consumer accounts, that promise is broken.

The specific report is almost comical in its details — a Minecraft temple leaking into a corporate workspace — but the implications are deadly serious. If session data can leak between enterprise accounts, what else is leaking? Source code from one company appearing in another company's context window? Confidential strategy documents? Customer data?

Anthropic needs to respond quickly and transparently. The ZDR enterprise tier is a premium product with premium pricing, and its customers have zero tolerance for data leakage. Every hour without a clear explanation is an hour where enterprise customers are questioning whether Claude Code can be trusted with their most sensitive data.

---

## Google's AI Buildout Drove 37% Increase in Electricity Use

**Google's latest sustainability report reveals that the company's total electricity consumption increased by 37% in 2025, driven primarily by AI data center construction and operations.**

### What's happening

- Google's data centers consumed over 42 million megawatt-hours of electricity in 2025, up from 30.6 million MWh in 2024 — a 37% year-over-year increase
- Google's total electricity usage has increased by more than 250% since 2019
- The company acknowledged that its "AI infrastructure buildout is currently accelerating faster than the grid is decarbonizing"
- Despite the steep rise in electricity consumption, Google reported reducing operational emissions by 2% — a "decoupling" it attributes to clean energy procurement
- However, supply chain emissions from contracted manufacturers grew by 25%, driven by Asia-Pacific supply chains operating on grids that remain undersupplied with carbon-free energy
- Google's total carbon footprint for 2025 was approximately 14.5 million metric tons of CO2 equivalent — comparable to the entire country of Ivory Coast
- 42 million MWh of data center electricity consumption rivals the total electricity consumption of entire countries

### Why it matters

37% in a single year. That's not gradual growth — that's an inflection point. And Google is just one company. When you add Microsoft, Amazon, Meta, and the growing fleet of AI startups all building data centers, the aggregate electricity demand from AI is becoming a meaningful fraction of global power consumption.

The "decoupling" claim — that Google reduced operational emissions while increasing electricity use by 37% — is technically true but deeply misleading. It works because Google is buying enormous amounts of clean energy to offset its data center power. But clean energy contracts don't create new clean energy capacity fast enough; they often just redirect existing clean energy from other buyers, who then buy fossil fuel power instead. The net effect on the grid may be much worse than Google's numbers suggest.

The 25% increase in supply chain emissions is the detail that gives the game away. Google's AI infrastructure isn't just consuming electricity — it's consuming hardware, and that hardware is being manufactured in Asia on grids that are still heavily coal-powered. You can buy clean energy for your data centers in Oregon, but you can't buy your way out of the emissions embedded in the chips, servers, and networking equipment produced in Taiwan and mainland China.

---

## Anthropic Accuses Alibaba of Largest Claude Cloning Attack Ever

**Anthropic presented evidence to US Senators that operators affiliated with Alibaba generated over 28.8 million exchanges with Claude through nearly 25,000 fraudulent accounts in the largest capability extraction campaign ever measured.**

### What's happening

- In a June 10 letter to Senators Tim Scott (R-SC) and Elizabeth Warren (D-MA), Anthropic shared "confidential evidence of the largest campaign to illicitly extract Claude's capabilities we have ever measured"
- The attacks occurred between April 22 and June 5, 2026, with operators "affiliated with Alibaba and Alibaba Qwen" generating 28.8+ million exchanges through approximately 25,000 fraudulent accounts
- The campaign targeted "some of Claude's most valuable capabilities, including agentic reasoning" — suggesting the goal was capability extraction, not casual use
- Alibaba evaded detection using "obfuscation techniques and proxy networks"
- Anthropic warned of a "growing circumvention economy" fueling an expanding web of distillation attacks
- Anthropic characterized the attacks as turning "hundreds of billions of dollars in American investment and R&D into a massive subsidy for our geopolitical competitors"
- The letter was sent one day before a Senate committee hearing on "AI and the American Dream"

### Why it matters

This is the most detailed public allegation of state-adjacent AI model theft to date, and it comes from one of America's most valuable AI companies directly to US Senators. The scale is staggering: 28.8 million exchanges through 25,000 fraudulent accounts in just 45 days. That's not a research project or a student experimenting — that's an industrial-scale operation designed to extract as much capability as possible from Claude.

The timing is notable too. Anthropic presented this evidence the day before a Senate hearing, in a letter that also advocated for stronger enforcement against model extraction. This is Anthropic making its case for policy protection using hard data, and the data is compelling.

But the harder question is whether this changes the competitive dynamics. If Alibaba can extract enough capability from Claude to improve Qwen, does it matter whether they did it through 28.8 million API calls or through reading research papers and training their own models? The cat-and-mouse game between model creators and extraction attackers is fundamentally asymmetrical — it's always cheaper to distill than to train, and no amount of terms-of-service enforcement or rate limiting can change that economics.

The real story here is that the US-China AI competition is no longer just about who can build the best model. It's also about who can protect their models from being copied, and whether intellectual property protections can survive in a world where the "theft" happens through API calls and prompt engineering rather than traditional hacking.

---

## The Big Picture

This week's news is unified by a single uncomfortable truth: **scale exposes cracks.**

GPT-5.5's reasoning-token clustering bug shows that OpenAI's rush to ship more capable models has introduced subtle failures that only become visible at scale. Armin Ronacher's tool-calling regression shows that Anthropic's optimization for Claude Code's harness has made its best models worse at the fundamental task of following specifications. The Claude Code session leakage shows that enterprise-grade isolation is still a work in progress. And Google's 37% electricity increase shows that the physical infrastructure of AI is growing faster than our ability to make it sustainable.

These aren't random failures. They're all symptoms of the same underlying pressure: the AI industry is moving faster than its engineering and governance can support. Models are being pushed to market before their failure modes are fully understood. Enterprise products are being sold with isolation guarantees that haven't been stress-tested at scale. Data centers are being built faster than the grid can decarbonize. And training pipelines are producing models that score higher on benchmarks but regress on the specific, measurable tasks that matter in production.

The antidote isn't to slow down — that ship has sailed. The antidote is to invest in the boring, unglamorous work of making AI systems reliable, isolated, and sustainable at the scale they've already reached. Schema compliance. Session isolation. Reasoning integrity. Grid capacity. These are the problems that determine whether AI becomes trusted infrastructure or expensive novelty.

Armin Ronacher's post should be required reading for every AI engineer. Not because tool-calling schemas are the most important problem in AI, but because his methodology — meticulous, empirical, focused on what the model actually does rather than what the benchmarks say — is exactly the kind of scrutiny that AI systems need at every level. Better models don't automatically mean better tools. Sometimes they mean worse ones. The only way to know is to measure.

---

*Stay tuned for the next roundup. The cracks are showing — and that's actually a sign of progress. You just have to know where to look.*