export const siteConfig = {
  name: "ClonaLabs",
  tagline: "Technology that works harder for your business.",
  description:
    "ClonaLabs helps Canadian businesses improve operations, build custom digital solutions and put practical AI to work—with technology shaped around real business needs.",
  url: "https://clonalabs.ca",
  email: "support@clonvo.chat",
  phone: "+923258821216",
  phoneDisplay: "+92 325 8821216",
  bookingUrl: "https://cal.com/muhammad-owais/15-min-demo",
  bookingLabel: "Talk to Our Team",
  contactCta: "Talk to Our Team",
  discussCta: "Discuss Your Project",
  productUrl: "https://clonvo.chat",
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

export function linkTargetProps(href: string) {
  return /^https?:\/\//.test(href)
    ? { target: "_blank" as const, rel: "noopener noreferrer" }
    : {};
}

/** Top-level nav (mega-menus for Solutions + Products). */
export const primaryNav = [
  { label: "Solutions", href: "/solutions", mega: "solutions" as const },
  { label: "Products", href: "/products", mega: "products" as const },
  { label: "Industries", href: "/industries", mega: null },
  { label: "Our Work", href: "/work", mega: null },
  { label: "About", href: "/about", mega: null },
  { label: "Insights", href: "/insights", mega: null },
];

export const servicePillars = [
  {
    slug: "ai-intelligent-systems",
    title: "AI & Intelligent Systems",
    icon: "Bot",
    value:
      "Apply AI to real workflows, customer interactions and operational bottlenecks.",
    children: [
      { label: "AI Strategy & Consulting", href: "/solutions/ai-intelligent-systems#strategy" },
      { label: "AI Workflow Automation", href: "/solutions/ai-intelligent-systems#automation" },
      { label: "AI Agents & Assistants", href: "/solutions/ai-intelligent-systems#agents" },
      { label: "Conversational AI", href: "/solutions/ai-intelligent-systems#conversational" },
      { label: "AI Integration", href: "/solutions/ai-intelligent-systems#integration" },
    ],
  },
  {
    slug: "custom-software-product-engineering",
    title: "Custom Software & Product Engineering",
    icon: "Code2",
    value:
      "Design and build software around the way your business actually works.",
    children: [
      { label: "Custom Software Development", href: "/solutions/custom-software-product-engineering#custom" },
      { label: "SaaS Development", href: "/solutions/custom-software-product-engineering#saas" },
      { label: "Business Applications", href: "/solutions/custom-software-product-engineering#apps" },
      { label: "API & System Integration", href: "/solutions/custom-software-product-engineering#api" },
      { label: "Application Modernization", href: "/solutions/custom-software-product-engineering#modernization" },
    ],
  },
  {
    slug: "web-mobile-development",
    title: "Web & Mobile Development",
    icon: "Smartphone",
    value:
      "Create useful, accessible digital experiences across web and mobile.",
    children: [
      { label: "Business Websites", href: "/solutions/web-mobile-development#websites" },
      { label: "Web Applications", href: "/solutions/web-mobile-development#web-apps" },
      { label: "Customer Portals", href: "/solutions/web-mobile-development#portals" },
      { label: "Mobile Applications", href: "/solutions/web-mobile-development#mobile" },
      { label: "UI/UX Design", href: "/solutions/web-mobile-development#ux" },
    ],
  },
  {
    slug: "ai-evaluation-data-operations",
    title: "AI Evaluation & Data Operations",
    icon: "FlaskConical",
    value:
      "Evaluate model performance and prepare high-quality data for AI development.",
    children: [
      { label: "LLM Benchmarking", href: "/solutions/ai-evaluation-data-operations#benchmarking" },
      { label: "Model Evaluation", href: "/solutions/ai-evaluation-data-operations#evaluation" },
      { label: "Adversarial Testing", href: "/solutions/ai-evaluation-data-operations#adversarial" },
      { label: "Data Annotation", href: "/solutions/ai-evaluation-data-operations#annotation" },
      { label: "Data Quality Operations", href: "/solutions/ai-evaluation-data-operations#quality" },
    ],
    attribution:
      "Selected capabilities and experience delivered through our specialist data and evaluation partner; project scope and attribution available on request.",
  },
  {
    slug: "product-development-delivery",
    title: "Product Development & Dedicated Delivery",
    icon: "Rocket",
    value:
      "Move from product idea to a dependable delivery capability.",
    children: [
      { label: "Product Discovery", href: "/solutions/product-development-delivery#discovery" },
      { label: "MVP Development", href: "/solutions/product-development-delivery#mvp" },
      { label: "Dedicated Teams", href: "/solutions/product-development-delivery#teams" },
      { label: "Ongoing Product Engineering", href: "/solutions/product-development-delivery#ongoing" },
    ],
  },
  {
    slug: "digital-presence-growth",
    title: "Digital Presence & Growth",
    icon: "Megaphone",
    value:
      "Build a consistent digital presence and practical growth systems.",
    children: [
      { label: "Brand Identity", href: "/solutions/digital-presence-growth#brand" },
      { label: "Website Development", href: "/solutions/digital-presence-growth#website" },
      { label: "Social Media Management", href: "/solutions/digital-presence-growth#social" },
      { label: "Lead Generation", href: "/solutions/digital-presence-growth#leads" },
      { label: "Digital Marketing", href: "/solutions/digital-presence-growth#marketing" },
    ],
  },
] as const;

export const products = [
  {
    slug: "clonvo",
    name: "Clonvo",
    category: "AI customer conversation platform",
    status: "Live" as const,
    summary:
      "A platform for managing customer conversations through configured AI-assisted communication workflows. Branded partner experiences may be offered under agreed white-label terms.",
    audience: "Agencies and businesses handling WhatsApp, Instagram and Messenger inquiries",
    cta: "Explore Clonvo",
    href: "/products/clonvo",
    externalUrl: "https://clonvo.chat",
    note: "Branded portal access does not transfer platform ownership, source-code ownership or unrestricted resale rights.",
  },
  {
    slug: "protender",
    name: "ProTender",
    category: "Tender and proposal workflow software",
    status: "Beta" as const,
    summary:
      "A software product designed to support tender and proposal-related workflows. Final feature language matches approved live product scope.",
    audience: "Teams preparing bids, RFPs and proposal packages",
    cta: "Explore ProTender",
    href: "/products/protender",
    externalUrl: null,
    note: "Feature claims limited to approved product specifications.",
  },
  {
    slug: "breaking-portal",
    name: "Breaking Portal",
    category: "Newsroom and publishing workflow platform",
    status: "Beta" as const,
    summary:
      "A platform for organizing breaking-news and publishing workflows. Present only verified live editorial, publishing and team capabilities.",
    audience: "Newsrooms and content operations teams",
    cta: "Explore Breaking Portal",
    href: "/products/breaking-portal",
    externalUrl: null,
    note: "Only verified publishing capabilities are listed publicly.",
  },
  {
    slug: "genesis-studio",
    name: "Genesis Studio",
    category: "Website and content studio / CMS",
    status: "Planned" as const,
    summary:
      "A studio/CMS product for creating and managing website or content experiences.",
    audience: "Teams that need editable web and content experiences",
    cta: "Explore Genesis Studio",
    href: "/products/genesis-studio",
    externalUrl: null,
    note: "Not an AI-agent orchestration platform.",
  },
] as const;

export const challenges = [
  {
    title: "Reduce repetitive tasks and manual handoffs",
    body: "Automate the handoffs that slow teams down so people can focus on judgment work.",
    href: "/solutions/ai-intelligent-systems",
  },
  {
    title: "Bring disconnected tools into one workflow",
    body: "Connect the systems your teams already use instead of forcing another siloed app.",
    href: "/solutions/custom-software-product-engineering",
  },
  {
    title: "Replace outdated processes with useful software",
    body: "Rebuild processes around how work actually happens — not how a template assumes it should.",
    href: "/solutions/product-development-delivery",
  },
  {
    title: "Build digital capacity without unnecessary complexity",
    body: "Ship practical tools your team will use, with clear scope and a path to improve.",
    href: "/solutions/web-mobile-development",
  },
];

export const credibility = [
  { label: "Products & services", detail: "Ready-to-deploy products plus delivery capabilities" },
  { label: "Meta channels live", detail: "WhatsApp · Instagram · Messenger via Clonvo" },
  { label: "Delivery model", detail: "Discover → define → build → launch → improve" },
  { label: "Offices", detail: "Mississauga · Lahore" },
];

export const industries = [
  {
    slug: "professional-services",
    title: "Professional services",
    summary: "Client intake, document workflows and inquiry handling shaped around service businesses.",
  },
  {
    slug: "healthcare-operations",
    title: "Healthcare operations",
    summary: "Back-office and patient-operations workflows with careful access and review practices.",
  },
  {
    slug: "retail-ecommerce",
    title: "Retail & ecommerce",
    summary: "Conversation, order and support workflows that meet customers where they already message.",
  },
  {
    slug: "logistics-operations",
    title: "Logistics & operations",
    summary: "Exception handling, document processing and operational handoffs across teams.",
  },
  {
    slug: "saas-product-companies",
    title: "SaaS & product companies",
    summary: "Product engineering, evaluation and customer-facing AI capabilities with clear controls.",
  },
  {
    slug: "agencies-partners",
    title: "Agencies & partners",
    summary: "White-label and partner-ready product experiences under agreed commercial terms.",
  },
];

export const howWeWork = [
  {
    step: "01",
    title: "Discover",
    output: "Map goals, systems, constraints and the outcomes that matter to the business.",
  },
  {
    step: "02",
    title: "Define",
    output: "Agree scope, success criteria, risks and a delivery plan the team can stand behind.",
  },
  {
    step: "03",
    title: "Design & Build",
    output: "Design the workflow, build the product or capability, and keep stakeholders close to progress.",
  },
  {
    step: "04",
    title: "Launch",
    output: "Ship into real use with training, handoff and the operational checks required to go live.",
  },
  {
    step: "05",
    title: "Improve",
    output: "Measure what happens in production and iterate on quality, cost and usefulness.",
  },
];

export const whyChooseUs = [
  {
    title: "Business-first discovery",
    body: "We start with the workflow and the outcome — not a tool pitch.",
  },
  {
    title: "Product and service experience",
    body: "We ship our own products and deliver client work, so advice stays grounded in delivery.",
  },
  {
    title: "Clear scope and communication",
    body: "You know what is in, what is out, and how decisions get made as the work moves.",
  },
  {
    title: "Practical delivery and ongoing improvement",
    body: "Launch is a checkpoint, not the finish line. We plan for what happens after day one.",
  },
];

/** Illustrative examples — clearly labelled, not client projects. */
export const workExamples = [
  {
    kind: "illustrative" as const,
    title: "Unified customer conversation inbox",
    context: "Service and retail inquiry handling",
    challenge: "Messages arrive across WhatsApp, Instagram and Messenger with no shared history.",
    scope: "Configured AI-assisted replies from approved knowledge, human handoff and ops visibility.",
    role: "Product (Clonvo) + implementation guidance",
    outcome: "One inbox pattern teams can operate without inventing answers.",
  },
  {
    kind: "illustrative" as const,
    title: "Custom operations portal",
    context: "Internal business workflows",
    challenge: "Critical work still lives in spreadsheets and email threads.",
    scope: "Role-aware portal, integrations and clear handoff states.",
    role: "Custom software delivery",
    outcome: "A single place for status, ownership and next actions.",
  },
  {
    kind: "illustrative" as const,
    title: "Model evaluation & data quality loop",
    context: "AI product teams",
    challenge: "Teams need reliable evaluation before putting models into sensitive workflows.",
    scope: "Benchmark design, review workflows and quality operations.",
    role: "Specialist evaluation partner capabilities (attributed)",
    outcome: "Clearer go/no-go signals before production use.",
  },
];

/** Hide Insights homepage section until ≥3 quality resources exist. */
export const insights: {
  slug: string;
  category: string;
  title: string;
  summary: string;
  date: string;
}[] = [];

export const faq = [
  {
    question: "Are you a product company or a services company?",
    answer:
      "Both — with a clear split. ClonaLabs offers ready-to-deploy products and client delivery capabilities. The homepage routes you into the right journey instead of mixing everything into one catalogue.",
  },
  {
    question: "Does Clonvo white-label transfer ownership of the platform?",
    answer:
      "No. Branded partner experiences may be offered under agreed white-label terms. That access does not transfer platform ownership, source-code ownership or unrestricted resale rights.",
  },
  {
    question: "Do you offer SEO or Google Search management?",
    answer:
      "No. Digital presence and growth support focuses on brand, websites, social, lead generation and digital marketing — not SEO or Google Search management retainers.",
  },
  {
    question: "How do we start?",
    answer:
      "Use Talk to Our Team on the site. Share goals, current systems and challenges — we will help you explore the right next step on a short consultation.",
  },
];

export const footerLinks = {
  Company: [
    { label: "About", href: "/about" },
    { label: "How we work", href: "/about#how-we-work" },
    { label: "Contact", href: "/contact" },
    { label: "FAQ", href: "/faq" },
  ],
  Services: servicePillars.map((p) => ({
    label: p.title,
    href: `/solutions/${p.slug}`,
  })),
  Products: products.map((p) => ({
    label: p.name,
    href: p.href,
  })),
  Resources: [
    { label: "Insights", href: "/insights" },
    { label: "Our Work", href: "/work" },
    { label: "Privacy", href: "/privacy" },
    { label: "Terms", href: "/terms" },
    { label: "Cookie policy", href: "/cookie-policy" },
  ],
};

/** Back-compat aliases used by older components during migration. */
export const navLinks = primaryNav.map(({ label, href }) => ({ label, href }));
export const services = servicePillars.map((p) => ({
  icon: p.icon,
  slug: p.slug,
  title: p.title,
  description: p.value,
}));
export const productPillars = products.map((p) => ({
  icon: "Box",
  slug: p.slug,
  title: p.name,
  description: p.summary,
}));
export const stats = [
  { value: 4, suffix: "", label: "Product lines" },
  { value: 6, suffix: "", label: "Service pillars" },
  { value: 2, suffix: "", label: "Office locations" },
  { value: 5, suffix: "", label: "Delivery steps" },
];
export const heroProofPoints = credibility.map((c) => ({
  value: c.label,
  label: c.detail,
}));
export const approach = howWeWork.map((s, i) => ({
  number: String(i + 1).padStart(2, "0"),
  title: s.title,
  description: s.output,
  duration: "",
}));
export const pricingPlans: never[] = [];
export const trustPoints = credibility;
export const useCases = industries;
