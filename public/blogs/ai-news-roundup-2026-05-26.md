# AI News Roundup — May 26, 2026: OpenAI Cracks an 80-Year-Old Math Problem, DeepSeek Permanently Slashes Prices by 75%, Banks Declare War on Their Own Workforces, and the Pope's AI Encyclical Arrives

*May 26, 2026*

Three stories this week share a single thread: the real-world consequences of AI's acceleration. OpenAI's model just disproved an 80-year-old mathematical conjecture — and Fields Medalists are taking it seriously. DeepSeek made its 75% price cut permanent, making V4-Pro 34x cheaper than GPT-5.5 on output tokens. And two of the world's biggest banks told their employees point-blank: AI is coming for your job. Meanwhile, Pope Leo XIV's encyclical on AI dropped — and it's far more specific and engaged with the technology than anyone expected. This isn't a week of incremental updates. This is a week where the impact of AI became undeniable across mathematics, economics, labor, and ethics — simultaneously.

---

## OpenAI Disproves Erdős's 80-Year-Old Unit Distance Conjecture — and Mathematicians Are Stunned

On May 20, OpenAI announced that one of its models had **disproved Paul Erdős's planar unit distance conjecture** — a problem first posed in 1946 that had resisted human mathematicians for nearly 80 years.

The conjecture stated that the maximum number of unit distances among n points in a plane grows roughly like n^(1+o(1)) — essentially, that square grids were close to optimal. The OpenAI model found something no one expected: a family of point configurations using techniques from **algebraic number theory** that produces more unit distances than any square grid arrangement, directly disproving Erdős's proposed upper bound.

What makes this extraordinary:

- **It came from a general-purpose reasoning model**, not a domain-specific math system. OpenAI emphasized this was not AlphaProof or a dedicated solver — it was the model reasoning through the problem from scratch.
- **Fields Medalist Timothy Gowers** publicly validated the result, calling it significant. Mathematician **Thomas Bloom** — who maintains the Erdős problems website and had previously criticized OpenAI's earlier math claims as "a dramatic misrepresentation" — provided companion remarks supporting this disproof.
- The model ran for **under 32 hours at a cost of less than $1,000**, according to Latent Space's reporting.
- This is being called **the first time AI has autonomously solved a prominent open problem central to a field of mathematics**.

OpenAI published the full proof, companion remarks from mathematicians Noga Alon, Melanie Wood, and Thomas Bloom, and an abridged chain-of-thought trace. The proof is available on OpenAI's website.

The broader implication isn't just about discrete geometry. As OpenAI noted: "AI systems are becoming capable of holding together long, difficult chains of reasoning, connecting ideas across distant fields, and surfacing paths researchers may not have explored." If a general model can do this for math, the same long-horizon reasoning applies to biology, physics, engineering, and medicine.

And on a pointed note: seven months ago, OpenAI's former VP Kevin Weil claimed GPT-5 had "solved 10 previously unsolved Erdős problems," which Bloom called a misrepresentation. This time, the proof has real mathematicians' backing. The difference matters.

---

## DeepSeek Makes 75% Price Cut Permanent — V4-Pro Now 34x Cheaper Than GPT-5.5

On May 24, DeepSeek announced that the 75% promotional discount on its flagship **V4-Pro model** is now **permanent**. What was a limited-time offer is now the standard price — and the numbers are staggering.

New permanent V4-Pro pricing:
- **$0.435 per million input tokens** (down from $1.74)
- **$0.87 per million output tokens** (down from $3.48)
- **$0.003625 per million cache-hit tokens** — a 90% reduction on top of the headline cut

Compare that to the frontier:
| Model | Input (1M tokens) | Output (1M tokens) |
|-------|-------------------|---------------------|
| DeepSeek V4-Pro | $0.435 | $0.87 |
| GPT-5.5 | $5.00 | $30.00 |
| Claude Opus 4.7 | $5.00 | $25.00 |

That makes V4-Pro roughly **11.5x cheaper on input** and **34x cheaper on output** compared to GPT-5.5. For long-context work above 200K tokens, the gap widens to **51.7x cheaper on output**.

The performance gap? According to Artificial Analysis, V4-Pro lands within **~95% of GPT-5.5 on most coding and reasoning benchmarks**. For the vast majority of production workloads, 95% of the capability at 1/34th of the price is a compelling trade-off.

DeepSeek also open-sourced V4's weights, making it the first frontier-class open-weight model with a 1-million-token context window. The pricing move reflects a fundamentally different competitive strategy: while American labs charge premium prices for incremental capability gains, Chinese labs are commoditizing frontier performance at aggressive price points.

For developers, the calculation is now straightforward. If your workload doesn't require the absolute frontier of reasoning, V4-Pro at $0.87/M output tokens is the best price-performance ratio in the market by a wide margin. If you need the absolute best, you still pay 34x more for GPT-5.5 or 28x more for Opus 4.7.

The real story: the AI pricing war is no longer hypothetical. It's permanent.

---

## HSBC and Standard Chartered: Banks Tell Workers to Embrace the AI That Will Replace Them

This week, two of the world's largest banks made it clear that AI-driven job displacement is no longer a prediction — it's a strategy.

**HSBC** CEO Georges Elhedery, speaking at an investor day on May 21, told employees directly: "We all know generative AI will destroy certain jobs and will create new jobs." He urged staff not to be "fighting us, not disenfranchised, not anxious, overwhelmed, and resisting the change," promising AI could make them "more productive versions of themselves."

The context: Bloomberg reported in March that HSBC is considering cutting up to **20,000 jobs** — roughly 10% of its global workforce — primarily in middle and back-office roles, as AI automates compliance, risk assessment, and document processing.

**Standard Chartered** went even further. CEO Bill Winters announced the bank would eliminate **8,000 roles** — over 15% of its workforce by 2030 — replacing what he called "lower-value human capital" with AI and technology. The bank is cutting 7,000 roles immediately and has set a target of reducing roles by 15% by the end of the decade.

The banks aren't hiding behind euphemisms. The message is explicit: AI will do your job, and your job will go away. HSBC's 2025 Annual Report explicitly states the plan to shift toward "scaled delivery of generative AI" and integrate it deeper into core processes by 2026.

Norway's $2.2 trillion sovereign wealth fund CEO Nicolai Tangen warned in April that companies using AI to cut jobs risk backlash from employees who resist adopting the very technology that makes them redundant. That tension — between corporate efficiency and human consequences — is exactly what Pope Leo XIV's encyclical addressed the same week.

---

## Pope Leo XIV's *Magnifica Humanitas*: The First Papal Encyclical on AI

On May 25, Pope Leo XIV released *Magnifica Humanitas* ("Magnificent Humanity"), the first papal encyclical ever to address artificial intelligence directly. The choice of name echoes Pope Leo XIII's *Rerum Novarum* (1891), which defined Catholic social teaching on workers' rights during the industrial revolution — a deliberate parallel to today's AI disruption.

The encyclical was presented at the Vatican's Synod Hall with a remarkable group of speakers: Cardinal Víctor Manuel Fernández, Cardinal Michael Czerny, theologian Professor Anna Rowlands, **Christopher Olah** (co-founder of Anthropic and head of interpretability research), and Professor Leocadie Lushombo of Santa Clara University.

The inclusion of Olah — an AI researcher at a Vatican encyclical presentation — signals how seriously the Church is engaging with the actual builders of this technology, not just commenting from the outside.

Key themes from the encyclical:
- The **sacred character of the human face and voice** — and the moral implications of machines that can replicate them
- The **dignity of labor** — work as human development, not reducible to economic output that can be automated away
- **Protecting children** from AI products that "pretend to be their friend" while isolating or manipulating them
- A call for a **politics of the common good** that regulates markets and technology to serve everyone, not just the powerful
- The encyclical frames AI disruption in the century-old tradition of Catholic social teaching — not as a novel crisis, but as the latest chapter in an ongoing story about power, labor, and human dignity

The Future of Life Institute called the encyclical "a hopeful sign and may even prove to be a turning-point" in efforts to steer AI toward benefiting all life. Vice President JD Vance reflected that a pope speaking into the age of technology could be as pivotal as Pope Leo XIII's guidance during the industrial revolution.

The timing is not coincidental. The same week that HSBC and Standard Chartered announced tens of thousands of AI-driven job cuts, the Pope issued a moral framework for thinking about exactly that kind of displacement.

---

## What to Watch

- **The Erdős disproof** is a milestone, but the real question is what comes next. If general-purpose AI models can now produce novel mathematical results, what fields are next? Watch for follow-up work in biology, physics, and engineering.
- **DeepSeek's permanent pricing** changes the economics for every API consumer. Expect OpenAI and Anthropic to respond — either with price cuts of their own or with stronger capability arguments for premium tiers.
- **The banking layoffs** are a preview of what's coming across every white-collar industry. HSBC and Standard Chartered are the first big banks to go public — others are making the same cuts quietly.
- **The Pope's encyclical** will shape the regulatory conversation globally. Watch for how governments, particularly in Europe and Latin America, cite *Magnifica Humanitas* in upcoming AI legislation.
- **OpenAI's confidential S-1** is expected imminently. The IPO will test whether public markets agree with the $852B private valuation — especially with DeepSeek commoditizing frontier performance.

---

*That's your AI news roundup for May 26, 2026. The week that AI proved an 80-year-old math conjecture wrong, made frontier intelligence 34x cheaper, told bank employees to embrace their replacement, and got a papal encyclical. If this doesn't convince you that AI has left the lab, nothing will.*