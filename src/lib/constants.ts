export const siteConfig = {
  name: "ClonaLabs",
  productName: "Clonvo",
  productUrl: "https://clonvo.chat",
  tagline: "AI and software built for Canadian businesses that need it to work.",
  description:
    "ClonaLabs helps Canadian businesses turn AI and software ideas into production systems with clear scope, senior ownership and handover-ready delivery.",
  url: "https://clonalabs.ca",
  email: "hannah@clonalabs.ca",
  emails: ["hannah@clonalabs.ca", "abdul@clonalabs.ca"] as const,
  phone: "+923258821216",
  phoneDisplay: "+92 325 882 1216",
  bookingUrl: "https://cal.com/muhammad-owais/15-min-demo",
  bookingLabel: "Book a technical call",
  contactCta: "Book a technical call",
  discussCta: "Book a technical call",
  demoUrl: "https://cal.com/muhammad-owais/15-min-demo",
  demoLabel: "Book a 15-minute intro call",
  offices: [
    {
      country: "Canada",
      label: "Canada office",
      lines: [
        "Suite 1100 (C/O VentureX)",
        "Kingsbridge Immigration Inc.",
        "1290 Central Parkway West",
        "Mississauga, ON L5C 4R3",
      ],
    },
    {
      country: "Pakistan",
      label: "Pakistan office",
      lines: [
        "1st Floor, Huawei Building",
        "UET Lahore",
        "Lahore, Punjab, Pakistan",
      ],
    },
  ],
  address: "Mississauga, Canada · Lahore, Pakistan",
  founded: "2024",
};

/** Top-level nav — Engagements / Capabilities / Products / Industries / Company / Insights */
export const navLinks = [
  { label: "Engagements", href: "/engagements" },
  { label: "Capabilities", href: "/services" },
  { label: "Products", href: "/products" },
  { label: "Industries", href: "/industries" },
  { label: "Company", href: "/about" },
  { label: "Insights", href: "/insights" },
];

export const navMega = {
  engagements: {
    title: "Engagements",
    blurb: "Focused work with a clear start, finish and owner.",
    cta: { label: "View all engagements", href: "/engagements" },
    items: [
      {
        label: "Technology Roadmap Sprint",
        href: "/engagements#technology-roadmap-sprint",
        desc: "Architecture, build-versus-buy and a 90-day roadmap.",
        meta: "2–4 weeks",
      },
      {
        label: "Model Confidence Sprint",
        href: "/engagements#model-confidence-sprint",
        desc: "Benchmarks, failure analysis and production readiness.",
        meta: "Scoped to your system",
      },
      {
        label: "Fractional CTO and Engineering Pod",
        href: "/engagements#fractional-cto-engineering-pod",
        desc: "Senior technical leadership plus a dedicated delivery team.",
        meta: "Monthly",
      },
    ],
  },
  capabilities: {
    title: "Capabilities",
    blurb: "Six areas covering AI, software, evaluation, delivery and growth.",
    cta: { label: "All capabilities", href: "/services" },
    items: [
      {
        label: "AI and Intelligent Systems",
        href: "/services/aisystems",
        desc: "Workflows, conversations and knowledge that fit real operations.",
      },
      {
        label: "Custom Software and Product Engineering",
        href: "/services/customsoftware",
        desc: "Software, portals and tools built around your process.",
      },
      {
        label: "Web and Mobile Development",
        href: "/services/webmobile",
        desc: "Accessible experiences across web and mobile.",
      },
      {
        label: "AI Evaluation and Data Operations",
        href: "/services/aievaluation",
        desc: "Measure models and data quality before you scale.",
      },
      {
        label: "Product Development and Dedicated Delivery",
        href: "/services/dedicateddelivery",
        desc: "Dedicated capacity with senior ownership.",
      },
      {
        label: "Digital Presence and Growth",
        href: "/services/digitalgrowth",
        desc: "Website, content and practical growth systems.",
      },
    ],
  },
  products: {
    title: "Products",
    blurb: "Ready-to-deploy software with honest Live / Beta status.",
    cta: { label: "All products", href: "/products" },
    items: [
      {
        label: "Clonvo",
        href: "/products#clonvo",
        desc: "AI customer conversation platform across messaging channels.",
        meta: "Live",
      },
      {
        label: "ProTender",
        href: "/products#protender",
        desc: "Tender analysis, eligibility checks and bid workflows.",
        meta: "Beta",
      },
      {
        label: "Breaking Portal",
        href: "/products#breaking-portal",
        desc: "Newsroom and publishing workflow for editorial teams.",
        meta: "Beta",
      },
      {
        label: "Genesis Studio",
        href: "/products#genesis-studio",
        desc: "Website and content studio / CMS.",
        meta: "Live",
      },
    ],
  },
  company: {
    title: "Company",
    blurb: "Who we are, how we work and how to reach us.",
    cta: { label: "About ClonaLabs", href: "/about" },
    items: [
      { label: "About", href: "/about", desc: "Technology partner for Canadian businesses." },
      { label: "How we work", href: "/process", desc: "Six stages from discovery to improvement." },
      { label: "Trust Center", href: "/trust", desc: "Scope, data handling and what we do not claim." },
      { label: "FAQ", href: "/faq", desc: "Engagements, pricing, ownership and products." },
      { label: "Contact", href: "/contact", desc: "Book a technical call or send a message." },
    ],
  },
};

export const glanceFacts = [
  {
    value: "3",
    label: "Focused engagements",
    detail: "With a defined start and finish",
  },
  {
    value: "6",
    label: "Capability areas",
    detail: "AI, software, web and mobile, evaluation, delivery and growth",
  },
  {
    value: "4",
    label: "Ready-to-deploy products",
    detail: "Honest Live and Beta status on each",
  },
  {
    value: "2",
    label: "Delivery hubs",
    detail: "Mississauga, Canada and Lahore, Pakistan",
  },
];

export const hiredProblems = [
  {
    pressure: "Manual work is slowing your team down.",
    next: "We replace repetitive handoffs with practical automation and AI assisted workflows.",
  },
  {
    pressure: "You need a digital product built around how your business really runs.",
    next: "We design and ship software, portals and customer experiences.",
  },
  {
    pressure: "Your systems do not talk to each other.",
    next: "We connect platforms, data and customer journeys so information moves with the work.",
  },
  {
    pressure: "You are not sure your AI works well enough.",
    next: "We benchmark models, test failure modes and check data quality before you scale.",
  },
  {
    pressure: "You have just raised and need a plan.",
    next: "We give you architecture clarity and a 90 day roadmap your team can execute.",
  },
  {
    pressure: "You need senior technical leadership but a full time hire is not ready.",
    next: "We provide a fractional CTO and, when needed, a dedicated team.",
  },
  {
    pressure: "Customer conversations are overwhelming your staff.",
    next: "We bring messaging, handoffs and knowledge into one workflow.",
  },
  {
    pressure: "A pilot works but production is a different problem.",
    next: "We take focused pilots into reliable systems with ownership and handover.",
  },
  {
    pressure: "Product, data and growth teams are working in isolation.",
    next: "We connect engineering choices to business results.",
  },
];

export const insightsPosts = [
  {
    title: "Fractional CTO in Canada: when it makes sense and when it does not",
    keyword: "fractional CTO Canada",
    linksTo: "/engagements",
  },
  {
    title: "How to evaluate an AI model before you launch it",
    keyword: "AI model evaluation",
    linksTo: "/services/aievaluation",
  },
  {
    title: "Custom software or off the shelf: a guide for Canadian businesses",
    keyword: "custom software development Canada",
    linksTo: "/services/customsoftware",
  },
  {
    title: "What a technology roadmap sprint includes",
    keyword: "technology roadmap sprint",
    linksTo: "/engagements",
  },
  {
    title: "AI customer service for Canadian businesses: what to automate first",
    keyword: "AI customer service Canada",
    linksTo: "/products#clonvo",
  },
  {
    title: "Questions to ask an AI vendor about data privacy (PIPEDA)",
    keyword: "AI vendor privacy Canada",
    linksTo: "/trust",
  },
];

export const pageSeo: Record<string, { title: string; description: string }> = {
  home: {
    title: "ClonaLabs | AI and Software Engineering Partner Canada",
    description:
      "ClonaLabs helps Canadian businesses turn AI and software ideas into production systems with clear scope, senior ownership and handover ready delivery.",
  },
  engagements: {
    title: "Technology Engagements for Canadian Teams | ClonaLabs",
    description:
      "Three focused engagements for Canadian teams: a Technology Roadmap Sprint, a Model Confidence Sprint and a Fractional CTO with an engineering pod.",
  },
  services: {
    title: "AI and Custom Software Services in Canada | ClonaLabs",
    description:
      "Six capability areas from ClonaLabs: AI systems, custom software, web and mobile, AI evaluation, dedicated delivery and digital growth in Canada.",
  },
  products: {
    title: "Ready to Deploy Business Software Products | ClonaLabs",
    description:
      "Four ready to deploy products from ClonaLabs: Clonvo for AI customer conversations, ProTender, Breaking Portal and Genesis Studio. Status shown for each.",
  },
  industries: {
    title: "Technology for Canadian Industries | ClonaLabs",
    description:
      "ClonaLabs builds AI and software for professional services, healthcare, retail, real estate, field services, agencies and tech companies in Canada.",
  },
  process: {
    title: "How We Deliver Software and AI Projects | ClonaLabs",
    description:
      "Six clear stages from discovery to improvement. See how ClonaLabs scopes, builds, validates and hands over software and AI projects for Canadian teams.",
  },
  about: {
    title: "About ClonaLabs | Technology Partner in Mississauga",
    description:
      "ClonaLabs is a technology partner for Canadian businesses, with delivery hubs in Mississauga, Ontario and Lahore, Pakistan. Learn how we work.",
  },
  trust: {
    title: "Trust Center | ClonaLabs",
    description:
      "How ClonaLabs works: honest product status, written scope, careful data handling and documented handover. See what we promise and what we do not claim.",
  },
  faq: {
    title: "FAQ | ClonaLabs Engagements and Products",
    description:
      "Answers to common questions about ClonaLabs engagements, pricing, data handling, ownership, products and working with a Canadian technology partner.",
  },
  contact: {
    title: "Book a Technical Call | ClonaLabs",
    description:
      "Book a 15 minute intro call with ClonaLabs. Tell us your goals and systems and we will suggest the right next step. No commitment.",
  },
  insights: {
    title: "Insights | ClonaLabs",
    description:
      "Practical writing for Canadian teams on fractional CTO work, AI evaluation, custom software decisions and vendor privacy questions.",
  },
};

export const servicePages = [
  {
    slug: "aisystems",
    title: "AI Solutions for Canadian Businesses | ClonaLabs",
    description:
      "Practical AI for real operations. ClonaLabs builds AI workflows and intelligent systems for Canadian businesses that fit the tools your team already uses.",
    h1: "AI that fits the way your team works.",
    lead: "We apply AI to real workflows, customer interactions and operational bottlenecks. The goal is a working system your team uses every day, not a demo.",
    points: [
      "AI assisted workflows for intake, approvals and requests",
      "Customer conversation automation with human handoff",
      "Knowledge search over your own documents",
      "Integration with the systems you already run",
    ],
  },
  {
    slug: "customsoftware",
    title: "Custom Software Development Canada | ClonaLabs",
    description:
      "ClonaLabs designs and builds custom software around the way your Canadian business actually works, from first version to a dependable product.",
    h1: "Custom software built around your process.",
    lead: "We design and build software, portals and internal tools that match how your business operates, then connect them to the systems you already use through APIs.",
    points: [
      "Product discovery and MVP development",
      "Internal tools and customer portals",
      "System integration and APIs",
      "Architecture that is ready to grow",
    ],
  },
  {
    slug: "webmobile",
    title: "Web and Mobile App Development Canada | ClonaLabs",
    description:
      "We create useful, accessible web and mobile experiences for Canadian businesses, from customer portals to full applications, built and handed over cleanly.",
    h1: "Web and mobile experiences people can use.",
    lead: "We build clear, accessible digital experiences across web and mobile, designed around the people who will use them every day.",
    points: [
      "Web applications and customer portals",
      "Mobile apps for iOS and Android",
      "Accessible, responsive design",
      "Integration with your back office systems",
    ],
  },
  {
    slug: "aievaluation",
    title: "AI Model Evaluation and Data Operations | ClonaLabs",
    description:
      "Measure before you scale. ClonaLabs benchmarks AI models, tests failure modes and prepares quality data so your AI is ready for production.",
    h1: "Measure your AI before you scale it.",
    lead: "We evaluate model performance and prepare high quality data, so you know how your AI behaves before customers or regulators do.",
    points: [
      "Benchmarking and model comparison",
      "Adversarial and failure mode testing",
      "Test dataset creation and annotation",
      "Latency and cost assessment",
    ],
  },
  {
    slug: "dedicateddelivery",
    title: "Dedicated Product Engineering Team | ClonaLabs",
    description:
      "Move from product idea to a dependable delivery team. ClonaLabs provides dedicated engineering capacity with senior ownership and clear reporting.",
    h1: "From product idea to a delivery team you can rely on.",
    lead: "We build a dedicated team around your product, with senior technical ownership, regular reviews and documentation, so delivery stays steady as your needs change.",
    points: [
      "Dedicated engineering capacity",
      "Senior technical leadership",
      "Incremental delivery you can see every week",
      "Handover that lets you bring work in house",
    ],
  },
  {
    slug: "digitalgrowth",
    title: "Digital Presence and Growth Systems | ClonaLabs",
    description:
      "Build a consistent digital presence and practical growth systems. ClonaLabs helps Canadian businesses connect their website, content and customer journeys.",
    h1: "A digital presence that supports growth.",
    lead: "We help you build a consistent online presence and practical systems for content, leads and follow up, so growth does not depend on one person's spreadsheet.",
    points: [
      "Website and content management",
      "Lead capture and follow up workflows",
      "Consistent content and brand presence",
      "Reporting you can act on",
    ],
  },
];

export function linkTargetProps(href: string) {
  return /^https?:\/\//.test(href)
    ? { target: "_blank" as const, rel: "noopener noreferrer" }
    : {};
}

/** Six capability areas — rendered by the Services section */
export const productPillars = [
  {
    icon: "Bot",
    slug: "aisystems",
    title: "AI and Intelligent Systems",
    description:
      "Apply AI to real workflows, customer interactions and operational bottlenecks.",
  },
  {
    icon: "Code2",
    slug: "customsoftware",
    title: "Custom Software and Product Engineering",
    description:
      "Design and build software around the way your business actually works.",
  },
  {
    icon: "Smartphone",
    slug: "webmobile",
    title: "Web and Mobile Development",
    description:
      "Create useful, accessible digital experiences across web and mobile.",
  },
  {
    icon: "FlaskConical",
    slug: "aievaluation",
    title: "AI Evaluation and Data Operations",
    description:
      "Benchmark models, test failure modes and prepare quality data before you scale.",
  },
  {
    icon: "Users",
    slug: "dedicateddelivery",
    title: "Product Development and Dedicated Delivery",
    description:
      "Move from product idea to a dependable delivery team with senior ownership.",
  },
  {
    icon: "Megaphone",
    slug: "digitalgrowth",
    title: "Digital Presence and Growth",
    description:
      "Build a consistent digital presence and practical growth systems.",
  },
];

/** Hover detail points for each capability (same order as productPillars) */
export const servicePillarDetails: { subtitle: string; points: string[] }[] = [
  {
    subtitle: "AI that fits real work",
    points: [
      "AI-assisted workflows for intake, approvals and requests",
      "Customer conversation automation with human handoff",
      "Knowledge search over your own documents",
      "Integration with the systems you already run",
    ],
  },
  {
    subtitle: "Software around your process",
    points: [
      "Product discovery and MVP development",
      "Internal tools and customer portals",
      "System integration and APIs",
      "Architecture that is ready to grow",
    ],
  },
  {
    subtitle: "Experiences people can use",
    points: [
      "Web applications and customer portals",
      "Mobile apps for iOS and Android",
      "Accessible, responsive design",
      "Integration with your back-office systems",
    ],
  },
  {
    subtitle: "Measure before you scale",
    points: [
      "Benchmarking and model comparison",
      "Adversarial and failure-mode testing",
      "Test dataset creation and annotation",
      "Latency and cost assessment",
    ],
  },
  {
    subtitle: "From idea to delivery team",
    points: [
      "Dedicated engineering capacity",
      "Senior technical leadership",
      "Incremental delivery you can see every week",
      "Handover that lets you bring work in house",
    ],
  },
  {
    subtitle: "Presence that supports growth",
    points: [
      "Website and content management",
      "Lead capture and follow-up workflows",
      "Consistent content and brand presence",
      "Reporting you can act on",
    ],
  },
];

/** Three focused engagements */
export const engagements = [
  {
    slug: "technology-roadmap-sprint",
    title: "Technology Roadmap Sprint",
    timeline: "2 to 4 weeks",
    bestFor:
      "Canadian technology companies after a raise, and established businesses planning a major build.",
    blurb:
      "An architecture review, build-versus-buy decisions, an AI feasibility check, a team plan and a sequenced 90-day roadmap.",
    problem:
      "You have funding or a mandate to build, but the engineering list is long, nobody has sequenced it and decisions about architecture, hiring and AI are being made on the fly.",
    youGet: [
      "An architecture review of your current or planned system",
      "Build versus buy decisions with reasons",
      "An AI feasibility assessment: what AI can and cannot do for your product",
      "A team plan covering roles, hiring and delivery capacity",
      "A sequenced 90-day roadmap your leadership team and board can track",
    ],
    howItWorks: [
      "Intro call to agree scope and success criteria.",
      "Working sessions with your team, led by a senior engineer.",
      "Final review and a roadmap you own and can take to any team.",
    ],
    youOwn:
      "The roadmap and every document produced. There is no obligation to build with us.",
    cta: "Book a technical call about the Roadmap Sprint",
  },
  {
    slug: "model-confidence-sprint",
    title: "Model Confidence Sprint",
    timeline: "Scoped to your system",
    bestFor:
      "Teams shipping AI features, companies deploying large language models, and enterprise teams moving from pilot to production.",
    blurb:
      "Benchmarks, test datasets, reliability and cost testing, and a failure analysis, so you know how your AI performs before you scale it.",
    problem:
      "You have built AI functionality but cannot yet show that it performs reliably, securely, consistently and at an acceptable cost.",
    youGet: [
      "Model benchmarking and evaluation",
      "Test datasets and annotation where required",
      "Accuracy and reliability testing",
      "Latency and cost assessment",
      "Failure analysis and production readiness recommendations",
    ],
    howItWorks: [
      "Agree what good looks like for your use case.",
      "Build test sets from your real workflows and run the evaluation.",
      "Review a report that shows where the system fails and what to fix first.",
    ],
    youOwn:
      "We agree data handling before we receive any access, and we sign an NDA first if you ask.",
    cta: "Book a technical call about Model Confidence",
  },
  {
    slug: "fractional-cto-engineering-pod",
    title: "Fractional CTO and Engineering Pod",
    timeline: "Monthly engagement",
    bestFor:
      "Companies that know the technical problem they need solved but lack senior leadership and spare engineering capacity.",
    blurb:
      "Technical leadership for roadmap, architecture and delivery, plus a dedicated engineering team, on a monthly engagement.",
    problem:
      "Hiring a full-time CTO and a team can take months, while the product roadmap keeps moving.",
    youGet: [
      "A senior technical leader who owns roadmap, architecture and delivery priorities",
      "A dedicated product engineering team working against that roadmap",
      "Regular progress reviews and clear reporting",
      "Documentation and handover so you can bring the work in house later",
    ],
    howItWorks: [
      "We agree the problem, the team shape and the monthly scope.",
      "The leader sets priorities and the team delivers in increments you can see.",
      "We review each month and adjust the scope as your needs change.",
    ],
    youOwn:
      "Documentation and handover so you can bring the work in house later.",
    cta: "Book a technical call about the Fractional CTO",
  },
];

export const stats = [
  { value: 3, suffix: "", label: "Focused engagements" },
  { value: 6, suffix: "", label: "Capability areas" },
  { value: 4, suffix: "", label: "Ready-to-deploy products" },
  { value: 2, suffix: "", label: "Delivery hubs" },
];

export const heroProofPoints = [
  { value: "3", label: "Focused engagements" },
  { value: "6", label: "Capability areas" },
  { value: "4", label: "Ready-to-deploy products" },
];

/** Problems we are hired to solve — home strip */
export const buyerChallenges = [
  {
    label: "Manual work",
    value: "Slowing your team down",
    note: "We replace repetitive handoffs with practical automation and AI-assisted workflows.",
  },
  {
    label: "Disconnected systems",
    value: "Information stuck in silos",
    note: "We connect platforms, data and customer journeys so information moves with the work.",
  },
  {
    label: "AI readiness",
    value: "Not sure it works well enough",
    note: "We benchmark models, test failure modes and check data quality before you scale.",
  },
  {
    label: "Senior leadership",
    value: "A full-time hire is not ready",
    note: "We provide a fractional CTO and, when needed, a dedicated team.",
  },
];

/** Featured products — status mirrors the content pack */
export const featuredProducts = [
  {
    id: "clonvo",
    name: "Clonvo",
    category: "AI customer conversation platform",
    blurb:
      "Manage customer conversations through configured AI-assisted workflows. Branded partner experiences may be offered under agreed white-label terms.",
    href: "https://clonvo.chat",
    cta: "Explore Clonvo",
    status: "Live" as const,
    points: [
      "WhatsApp, Instagram and Messenger conversations",
      "AI replies drawn from your own documents",
      "Human handoff with context",
    ],
    featured: true,
  },
  {
    id: "protender",
    name: "ProTender",
    category: "Tender and proposal workflow software",
    blurb:
      "Built to help bid teams analyze tenders, check eligibility and prepare submissions in one workspace.",
    href: "/contact",
    cta: "Request a walkthrough",
    status: "Beta" as const,
    points: [
      "Tender document analysis",
      "Eligibility and compliance checks",
      "Bid preparation workflows",
    ],
    featured: false,
  },
  {
    id: "breaking-portal",
    name: "Breaking Portal",
    category: "Newsroom and publishing workflow platform",
    blurb:
      "Organize breaking-news and publishing workflows for editorial teams.",
    href: "/contact",
    cta: "Request a walkthrough",
    status: "Beta" as const,
    points: [
      "Newsroom workflow structure",
      "Publishing coordination",
      "Team roles and handoffs",
    ],
    featured: false,
  },
  {
    id: "genesis-studio",
    name: "Genesis Studio",
    category: "Website and content studio / CMS",
    blurb:
      "A studio/CMS for creating and managing website and content experiences—not an AI-agent platform.",
    href: "/contact",
    cta: "Request a walkthrough",
    status: "Live" as const,
    points: [
      "Website and content management",
      "Editable page experiences",
      "Studio-style authoring",
    ],
    featured: false,
  },
];

export const pricingPlans = featuredProducts.map((p) => ({
  name: p.name,
  price: 0,
  blurb: p.blurb,
  messages: p.category,
  channels: p.status,
  features: p.points,
  popular: p.featured,
  href: p.href,
  cta: p.cta,
}));

/** Industries */
export const useCases = [
  {
    slug: "professional-services",
    icon: "Scale",
    title: "Professional services",
    image: "/images/team-collab.jpg",
    description:
      "Client intake, communication and delivery workflows that need clear process, secure knowledge and practical automation.",
    metric: { value: "Process", label: "Clarity without extra complexity" },
    tags: ["Intake", "Knowledge", "Automation"],
  },
  {
    slug: "healthcare-operations",
    icon: "HeartPulse",
    title: "Healthcare operations",
    image: "/images/industry-health.jpg",
    description:
      "Front-office and back-office digital experiences that respect careful data handling and human oversight.",
    metric: { value: "Careful", label: "Oversight built into the workflow" },
    tags: ["Operations", "Portals", "Handoff"],
  },
  {
    slug: "retail-ecommerce",
    icon: "ShoppingBag",
    title: "Retail and ecommerce",
    image: "/images/industry-ecom.jpg",
    description:
      "Customer conversations, catalogues and order workflows in systems your team can run every day.",
    metric: { value: "Customers", label: "Meet them where they already message" },
    tags: ["Conversations", "Orders", "Support"],
  },
  {
    slug: "real-estate",
    icon: "Building2",
    title: "Real estate and property",
    image: "/images/team-meeting.jpg",
    description:
      "Listing questions, lead qualification and follow-up flows shaped around how property teams already work.",
    metric: { value: "Leads", label: "Context preserved for every handoff" },
    tags: ["Listings", "Leads", "Follow-up"],
  },
  {
    slug: "home-services",
    icon: "Wrench",
    title: "Home and field services",
    image: "/images/team-office.jpg",
    description:
      "Quotes, booking and after-hours questions handled with useful software instead of more spreadsheets.",
    metric: { value: "After hours", label: "Inquiries that still get answered" },
    tags: ["Quotes", "Booking", "Field"],
  },
  {
    slug: "agencies-partners",
    icon: "Megaphone",
    title: "Agencies and partners",
    image: "/images/service-digital.jpg",
    description:
      "White-label and partner delivery models for teams that want to offer digital products under their own brand.",
    metric: { value: "Partners", label: "Your brand on agreed terms" },
    tags: ["White-label", "Products", "Delivery"],
  },
];

/** How we deliver — six stages */
export const approach = [
  {
    step: "01",
    title: "Discover",
    description:
      "We frame the problem, the users, the systems and the constraints before any build starts. You leave with a problem statement, a systems map and success criteria.",
  },
  {
    step: "02",
    title: "Architect",
    description:
      "We define the solution, the integration points and the controls that keep delivery safe. You leave with an architecture outline, a risk list and a delivery plan.",
  },
  {
    step: "03",
    title: "Build and integrate",
    description:
      "We ship working increments with testing and approvals, so you can see progress every week. You leave with working software and review notes.",
  },
  {
    step: "04",
    title: "Validate",
    description:
      "We test against the agreed acceptance criteria before anything reaches real users. You leave with test evidence and a list of remaining gaps.",
  },
  {
    step: "05",
    title: "Deploy",
    description:
      "We release with clear ownership, operating guidance and a handover your team can run. You leave with a stable release, a runbook and a handover package.",
  },
  {
    step: "06",
    title: "Improve",
    description:
      "We measure friction after launch, fix what matters and plan the next increment. You leave with a post-launch review and a next-step plan.",
  },
];

export const approachStepMeta = [
  {
    icon: "Search",
    tagline: "Frame the problem first",
    owner: "You + ClonaLabs",
    deliverables: ["Problem statement", "Systems map", "Success criteria"],
  },
  {
    icon: "ClipboardList",
    tagline: "Define a safe plan",
    owner: "You + ClonaLabs",
    deliverables: ["Architecture outline", "Risk list", "Delivery plan"],
  },
  {
    icon: "PencilRuler",
    tagline: "Ship working increments",
    owner: "ClonaLabs",
    deliverables: ["Working software", "Testing and approvals", "Review notes"],
  },
  {
    icon: "FlaskConical",
    tagline: "Prove it before users",
    owner: "You + ClonaLabs",
    deliverables: ["Test evidence", "Remaining gaps", "Acceptance sign-off"],
  },
  {
    icon: "Rocket",
    tagline: "Release with ownership",
    owner: "You + ClonaLabs",
    deliverables: ["Stable release", "Runbook", "Handover package"],
  },
  {
    icon: "RefreshCw",
    tagline: "Keep improving what ships",
    owner: "You + ClonaLabs",
    deliverables: ["Post-launch review", "Friction fixes", "Next-step plan"],
  },
];

export const whyChooseUs = [
  {
    icon: "ListChecks",
    label: "Scope first",
    desc: "We agree the result and the boundaries in writing before any build starts.",
  },
  {
    icon: "Users",
    label: "Senior ownership",
    desc: "Experienced engineers lead the work, not a rotating cast.",
  },
  {
    icon: "FileText",
    label: "Handover ready",
    desc: "Everything is documented so your team can run it without us.",
  },
  {
    icon: "ShieldCheck",
    label: "Honest about what is live",
    desc: "We label product status and say plainly what is not ready.",
  },
];

export const trustPoints = [
  { label: "3 focused engagements with a defined start and finish" },
  { label: "6 capability areas covering AI, software, web, evaluation, delivery and growth" },
  { label: "4 ready-to-deploy products with real status labels" },
  { label: "2 delivery hubs: Mississauga, Canada and Lahore, Pakistan" },
];

export const trustCenter = [
  {
    title: "Honest product status",
    body: "Every product shows whether it is Live, Beta or Planned. We never describe planned features as available.",
  },
  {
    title: "Scope agreed in writing",
    body: "The result, the deliverables and the boundaries are agreed before work starts.",
  },
  {
    title: "Careful data handling",
    body: "We agree data handling before we receive access. For data and AI work we begin with the minimum access needed, usually read-only, and we sign an NDA on request.",
  },
  {
    title: "Documented handover",
    body: "Work is documented so your team can operate it. Handover is part of delivery, not an extra.",
  },
  {
    title: "What we do not claim",
    body: "We do not list certifications, customer names or performance numbers on this site unless we can document them.",
  },
];

export const faq = [
  {
    question: "What does ClonaLabs do?",
    answer:
      "We help Canadian businesses build custom software, apply practical AI, evaluate AI systems and, where it fits, deploy ready-made products.",
  },
  {
    question: "How do you scope the work?",
    answer:
      "Every engagement is scoped around a result. We agree the deliverables, boundaries and success criteria in writing before work starts.",
  },
  {
    question: "How is pricing set?",
    answer:
      "Engagements are fixed in scope, and pricing depends on complexity. Book a call and we will give you a clear figure.",
  },
  {
    question: "Who owns the work?",
    answer:
      "You own the deliverables produced for you. Ownership terms are written into the agreement.",
  },
  {
    question: "How do you handle our data?",
    answer:
      "We agree data handling before receiving access, start with the least access needed, and sign an NDA on request.",
  },
  {
    question: "Can we bring the work in house later?",
    answer:
      "Yes. Documentation and handover are part of every engagement.",
  },
  {
    question: "What is the difference between a product and a custom project?",
    answer:
      "Products such as Clonvo are ready platforms for specific workflows. Custom projects are built around your own process.",
  },
  {
    question: "Where are you based?",
    answer:
      "We have a Canada office in Mississauga, Ontario and a delivery hub in Lahore, Pakistan.",
  },
];

export const footerLinks = {
  company: [
    { label: "About", href: "/about" },
    { label: "How we work", href: "/#how-we-work" },
    { label: "Trust Center", href: "/trust" },
    { label: "FAQ", href: "/faq" },
    { label: "Contact", href: "/contact" },
  ],
  services: [
    { label: "AI and Intelligent Systems", href: "/services/aisystems" },
    { label: "Custom Software", href: "/services/customsoftware" },
    { label: "Web and Mobile", href: "/services/webmobile" },
    { label: "AI Evaluation", href: "/services/aievaluation" },
    { label: "Dedicated Delivery", href: "/services/dedicateddelivery" },
    { label: "Digital Presence and Growth", href: "/services/digitalgrowth" },
  ],
  products: [
    { label: "Clonvo", href: "/products#clonvo" },
    { label: "ProTender", href: "/products#protender" },
    { label: "Breaking Portal", href: "/products#breaking-portal" },
    { label: "Genesis Studio", href: "/products#genesis-studio" },
  ],
  resources: [
    { label: "Engagements", href: "/engagements" },
    { label: "Industries", href: "/industries" },
    { label: "Insights", href: "/insights" },
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
    { label: "Cookie Policy", href: "/cookie-policy" },
  ],
};

/** Detail pages and alternate home sections — from bak content pack */
export {
  servicePillars,
  products,
  industries,
  howWeWork,
  workExamples,
  insights,
  challenges,
  credibility,
} from "./constants.clonalabs.bak";
