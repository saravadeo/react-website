// Content shared by the Home, Projects and About pages.

export const links = {
  github: "https://github.com/saravadeo",
  linkedin: "https://www.linkedin.com/in/onkar-sarvade-4b36ab63/",
  stackoverflow: "https://stackoverflow.com/users/4539951/onkar-saravade",
};

export const elsewhere = [
  { label: "GitHub", href: links.github, platform: "github" },
  { label: "LinkedIn", href: links.linkedin, platform: "linkedin" },
  { label: "Stack Overflow", href: links.stackoverflow, platform: "stackoverflow" },
];


// Numbers checked against GitHub on 2026-10-09
export const ossStats = [
  { value: "2", label: "PRs merged into Datadog's Java tracer" },
  { value: "127", label: "commits to LogWise, its top contributor" },
  { value: "70+", label: "PRs merged across the Odin platform" },
];

export const openSource = [
  {
    title: "dd-trace-java",
    org: "Datadog",
    role: "Contributor",
    link: "https://github.com/DataDog/dd-trace-java",
    description:
      "Datadog's APM tracer for Java and the JVM. I contributed new instrumentation and fixes upstream.",
    highlights: [
      {
        text: "Vert.x PostgreSQL client instrumentation, so Vert.x 4 apps get database spans in Datadog APM automatically",
        link: "https://github.com/DataDog/dd-trace-java/pull/8471",
        label: "#8471",
      },
      {
        text: "Explicit UTF-8 charset for String.getBytes(), fixing encoding bugs on servers with a non-UTF-8 default locale",
        link: "https://github.com/DataDog/dd-trace-java/pull/11149",
        label: "#11149",
      },
    ],
    tags: ["Java", "APM", "Bytecode instrumentation"],
  },
  {
    title: "LogWise",
    org: "Dream Horizon",
    role: "Maintainer",
    link: "https://github.com/dream-horizon-org/logwise",
    description:
      "Open-source, cost-effective end-to-end logging: Vector → Kafka → Spark → S3/Athena, with Grafana dashboards, deployment automation and production scaling guides.",
    highlights: [
      { text: "Top contributor: 127 commits and 56 merged pull requests" },
      { text: "89 stars on GitHub, LGPL-3.0" },
    ],
    tags: ["Java", "Kafka", "Spark", "Observability"],
  },
  {
    title: "Odin",
    org: "Dream Horizon",
    role: "Contributor",
    link: "https://github.com/dream-horizon-org/odin",
    description:
      "A production-ready deployment platform: define software once and deploy it anywhere, any number of times.",
    highlights: [
      { text: "Built the Asgard AI agent: an MCP server, agent service and chat dock in the dashboard" },
      { text: "70+ merged pull requests across odin-ui, odin-mcp, odin-agent and the deployer" },
    ],
    tags: ["TypeScript", "MCP", "AI agents", "Platform"],
  },
];

export const moreOpenSource = [
  {
    title: "prerender-io-cloudfront-s3",
    org: "Personal",
    description: "CloudFormation and manual setup for Prerender.io with CloudFront and S3, to make JavaScript SPAs crawlable.",
    link: "https://github.com/saravadeo/prerender-io-cloudfront-s3",
  },
  {
    title: "Spark Streaming & Kafka rack-aware fetching",
    org: "Datadog / Apache Kafka",
    description: "Spark Structured Streaming integration using bytecode instrumentation, and follower fetching with rack-aware assignment in Kafka.",
  },
];

export const experience = [
  {
    role: "Software Development Engineer III",
    company: "Dream11 (Sporta Technologies)",
    location: "Mumbai",
    period: "2020 — now",
    points: [
      "Built and scaled the company-wide observability platform: 16+ Gbps of telemetry across 600+ microservices, used by 500+ engineers.",
      "Designed observability stacks on OpenTelemetry, ClickHouse and SigNoz, and set the telemetry standards teams follow.",
      "Added AI-assisted anomaly detection and root-cause diagnostics with LangChain and LangGraph.",
      "Head of Engineering for DreamSetGo: owned the architecture and built DORA, an event-driven admin/ERP platform covering CMS, sales, invoicing and operations.",
    ],
  },
  {
    role: "Software Engineer — Team Lead",
    company: "StyleCracker",
    location: "Mumbai",
    period: "2019 — 2020",
    points: [
      "Led the tech team and built full-stack modules from the ground up on React, Node.js and AWS.",
    ],
  },
  {
    role: "Senior Software Engineer",
    company: "Gupshup",
    location: "Mumbai",
    period: "2019",
    points: ["Built Java backend systems and led a blockchain proof of concept on Hyperledger Fabric."],
  },
  {
    role: "Senior Software Engineer",
    company: "Kyepot",
    location: "Mumbai",
    period: "2016 — 2019",
    points: [
      "Built a fintech app end to end: ledger, transaction flows and concurrency controls.",
      "Led the company's first end-to-end UPI integration and worked on its React Native app (100K+ downloads).",
    ],
  },
  {
    role: "Associate Consultant",
    company: "TIBCO Software",
    location: "Pune",
    period: "2015 — 2016",
    points: ["Built a data management application for Nielsen on TIBCO BW, plus reporting dashboards."],
  },
];

export const skills = [
  { group: "Languages", items: "Java, TypeScript, JavaScript, Node.js, React Native" },
  { group: "Infrastructure", items: "AWS (EC2, RDS, SQS, CloudFront), Kafka, microservices, event-driven systems" },
  { group: "Observability", items: "OpenTelemetry, distributed tracing, SigNoz, ClickHouse, alerting, incident response" },
  { group: "Data", items: "MySQL, PostgreSQL, Redis, MongoDB, Elasticsearch" },
  { group: "AI", items: "LangChain, LangGraph, LLM orchestration, anomaly detection" },
];
