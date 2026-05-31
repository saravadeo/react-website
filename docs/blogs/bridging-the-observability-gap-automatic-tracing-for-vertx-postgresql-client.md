---
title: "Bridging the Observability Gap: Automatic Tracing for Vert.x PostgreSQL Client"
date: "2026-05-03"
tags: ["datadog", "vertx", "observability", "apm", "java", "distributed-systems", "tracing", "open-source"]
category: "Technical"
readTime: "6 min"
slug: "bridging-the-observability-gap-automatic-tracing-for-vertx-postgresql-client"
excerpt: "How we contributed automatic tracing for the Vert.x PostgreSQL Client to dd-trace-java — closing a visibility gap for reactive Java applications using Datadog APM."
---

# Bridging the Observability Gap: Automatic Tracing for Vert.x PostgreSQL Client

In high-scale distributed systems, visibility into database performance is non-negotiable. While Datadog APM has long provided robust support for Java and various SQL clients, there was a notable gap for developers utilizing the Vert.x PostgreSQL Client within the Eclipse Vert.x 4 ecosystem.

I'm excited to share that this gap has been officially closed. Through a collaborative effort with the Datadog team, we've introduced automatic tracing for the Vert.x PostgreSQL Client, now merged and slated for the **1.48.0 release of dd-trace-java**.

---

## The Motivation: Why This Matters

Modern reactive applications built on Vert.x often leverage the non-blocking PostgreSQL client to handle high-concurrency workloads. However, without native instrumentation, these database calls appeared as **"blind spots"** in Datadog traces. Developers could see the overall request latency but lacked granular insights into:

- **How long specific SQL queries took to execute** — Were certain queries creating bottlenecks?
- **Database connection overhead** — Was connection pooling behaving as expected under load?
- **The relationship between reactive application logic and database performance** — How did async processing impact query latency?

By initiating this change, the goal was to bring **out-of-the-box visibility** to the Vert.x community, ensuring that every query is captured, timed, and contextualized within the larger trace.

---

## Technical Deep Dive: Under the Hood

The instrumentation (introduced in [PR #8457](https://github.com/DataDog/dd-trace-java/pull/8457) by [onkar-dream11](https://github.com/onkar-dream11) and finalized in [PR #8471](https://github.com/DataDog/dd-trace-java/pull/8471) by [vandonr](https://github.com/vandonr)) hooks into the Vert.x 4.2.0+ internals. The initial PR was opened on February 26, 2025, and after collaborative refinement over the following days, it was merged and is slated for the 1.48.0 release.

### 1. Bytecode Instrumentation

We utilized the `dd-java-agent`'s ability to safely inject tracing logic into the Vert.x client **without requiring users to change a single line of their application code**. The agent intercepts the PostgreSQL client's query execution methods at runtime, injecting trace start/stop logic around each database operation.

This is the beauty of Java agent instrumentation — zero code changes, zero config, and it just works.

### 2. Context Propagation Across Async Boundaries

One of the primary challenges was ensuring that the trace context **remains intact across the asynchronous boundaries** of Vert.x's event loop.

In a traditional synchronous application, context propagation is straightforward — the trace context lives on the current thread. But Vert.x operates on an event loop model where callbacks execute on different iterations of the same thread, and the trace context can easily be lost between the query initiation and the result callback.

The instrumentation ensures that:

- The database span is correctly **parented to the active request span**
- Context is captured at query initiation and **restored when the callback fires**
- Multiple concurrent queries within the same request maintain their individual trace identity

### 3. Semantic Conventions

The new spans follow standard **OpenTelemetry and Datadog conventions**, capturing essential metadata:

- `db.instance` — The database instance name
- `db.statement` — The sanitized SQL query (parameters stripped for security)
- `db.system` — `postgresql`
- `span.type` — `sql`
- Execution status and error details when queries fail

This means the spans integrate seamlessly with existing Datadog dashboards, monitors, and service maps.

---

## A Collaborative Journey

Open source is at its best when it's a team sport. After I created the initial PR, I worked closely with the Datadog engineering team — **special thanks to @vandonr and @PerfectSlayer** — to refine the implementation.

We focused on three key areas:

### Code Reusability

One of the key improvements in the collaborative review was **extracting shared logic into common modules**. [@vandonr](https://github.com/vandonr) refactored the code in commit [`2fbadf4`](https://github.com/DataDog/dd-trace-java/pull/8457/commits/2fbadf412322941626af7e8dd2a9e8411026873f) to move common Vert.x SQL code into a shared module, and further unified the older instrumentation in [`c6e281c`](https://github.com/DataDog/dd-trace-java/pull/8457/commits/c6e281c6836c372eb37212a5674c852c998ca05d). This means rather than duplicating instrumentation code for each SQL client, shared patterns can serve future Vert.x client instrumentations (like MySQL) — a much cleaner architecture.

### Rigorous Testing

Ensuring the instrumentation works across **various versions of Vert.x 4** and handles edge cases in reactive stream processing was critical. We tested:

- Multiple Vert.x versions (4.2.0+)
- Connection pool behavior under load
- Error handling and span status propagation
- Reactive stream backpressure scenarios

### CI/CD Alignment

The PR was migrated to allow Datadog's internal CI suite to run **comprehensive performance and regression benchmarks**. The results confirmed **zero performance regression** — startup overhead remained effectively unchanged across all test configurations (tracing, appsec, iast, profiling variants on both petclinic and insecure-bank benchmarks). This meant adapting our PR structure to fit their release pipeline, ensuring the contribution meets the same quality bar as any internal Datadog instrumentation.

---

## How to Use It

Once dd-trace-java version 1.48.0 is released, you can enable this by simply **updating your Datadog agent version**. No configuration changes or code modifications are required for your Vert.x applications.

```bash
# Just update your agent — that's it
java -javaagent:dd-java-agent.jar -jar your-vertx-app.jar
```

Your Vert.x PostgreSQL queries will automatically appear as spans in your Datadog APM dashboards, complete with query timing, connection details, and error tracking.

---

## What This Looks Like in Practice

Before this instrumentation, a typical Vert.x reactive pipeline looked like this in Datadog:

```
[web-handler] → [business-logic] → ??? (database call invisible)
```

Now it looks like this:

```
[web-handler] → [business-logic] → [vertx-postgresql.query]
                                            ├── db.instance: mydb
                                            ├── db.statement: SELECT * FROM users WHERE id = ?
                                            └── duration: 12ms
```

Every query, every connection, every error — fully visible.

---

## Looking Ahead

This contribution is a step toward **100% visibility for reactive Java applications**. As we continue to push the boundaries of high-scale system architecture, contributing back to the tools we rely on ensures a more robust ecosystem for everyone.

The Vert.x ecosystem is growing rapidly, and observability should grow with it. If you're using Vert.x and other reactive clients that lack native Datadog instrumentation, this PR serves as a template for how to contribute that support.

If you are using Vert.x and PostgreSQL, I encourage you to try out the new version and see the difference in your APM dashboards!

---

## References

- [PR #8457: Add vertx postgresql client instrumentation](https://github.com/DataDog/dd-trace-java/pull/8457) — Initial implementation by [onkar-dream11](https://github.com/onkar-dream11)
- [PR #8471: Add vertx postgresql client instrumentation (finalized)](https://github.com/DataDog/dd-trace-java/pull/8471) — Refined and merged by [vandonr](https://github.com/vandonr)
- [Datadog dd-trace-java Repository](https://github.com/DataDog/dd-trace-java)
- [Eclipse Vert.x PostgreSQL Client Documentation](https://vertx.io/docs/)

---

*Written on 2026-05-03 | Based on production experience contributing to [dd-trace-java](https://github.com/DataDog/dd-trace-java)*