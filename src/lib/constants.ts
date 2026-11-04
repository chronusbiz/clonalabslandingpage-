export const siteConfig = {
  name: "ClonaLabs",
  productName: "Clonvo",
  productUrl: "https://clonvo.chat",
  tagline: "Technology that works harder for your business.",
  description:
    "ClonaLabs helps Canadian businesses improve operations, build custom digital solutions and put practical AI to work—with technology shaped around real business needs.",
  url: "https://clonalabs.ca",
  email: "support@clonvo.chat",
  phone: "+923258821216",
  phoneDisplay: "+92 325 8821216",
  bookingUrl: "/contact",
  bookingLabel: "Talk to Our Team",
  contactCta: "Talk to Our Team",
  discussCta: "Discuss Your Project",
  demoUrl: "https://cal.com/muhammad-owais/15-min-demo",
  demoLabel: "Book a 15-minute demo",
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

/** Top-level nav — Solutions / Products / Industries / Our Work / About + Contact CTA */
export const navLinks = [
  { label: "Solutions", href: "/#solutions" },
  { label: "Products", href: "/#products" },
  { label: "Industries", href: "/#industries" },
  { label: "Our Work", href: "/#how-we-work" },
  { label: "About", href: "/about" },
  { label: "FAQ", href: "/faq" },
];

export function linkTargetProps(href: string) {
  return /^https?:\/\//.test(href)
    ? { target: "_blank" as const, rel: "noopener noreferrer" }
    : {};
}

/** Six service pillars — rendered by the Services section */
export const productPillars = [
  {
    icon: "Bot",
    slug: "ai-intelligent-systems",
    title: "AI & Intelligent Systems",
    description:
      "Apply AI to real workflows, customer interactions and operational bottlenecks.",
  },
  {
    icon: "Code2",
    slug: "custom-software",
    title: "Custom Software & Product Engineering",
    description:
      "Design and build software around the way your business actually works.",
  },
  {
    icon: "Smartphone",
    slug: "web-mobile",
    title: "Web & Mobile Development",
    description:
      "Create useful, accessible digital experiences across web and mobile.",
  },
  {
    icon: "FlaskConical",
    slug: "ai-evaluation",
    title: "AI Evaluation & Data Operations",
    description:
      "Evaluate model performance and prepare high-quality data for AI development.",
  },
  {
    icon: "Users",
    slug: "product-delivery",
    title: "Product Development & Dedicated Delivery",
    description:
      "Move from product idea to a dependable delivery capability.",
  },
  {
    icon: "Megaphone",
    slug: "digital-growth",
    title: "Digital Presence & Growth",
    description:
      "Build a consistent digital presence and practical growth systems.",
  },
];

/** Hover detail points for each service pillar (same order as productPillars) */
export const servicePillarDetails: { subtitle: string; points: string[] }[] = [
  {
    subtitle: "AI that fits real work",
    points: [
      "AI strategy and discovery",
      "AI workflow automation",
      "AI agents and assistants",
      "Conversational AI",
      "LLM integration",
    ],
  },
  {
    subtitle: "Software around your process",
    points: [
      "Custom software",
      "SaaS development",
      "Business platforms and portals",
      "API and system integration",
      "Modernization",
    ],
  },
  {
    subtitle: "Experiences people can use",
    points: [
      "Business websites",
      "Web applications",
      "Customer portals",
      "Mobile applications",
      "UI/UX design",
    ],
  },
  {
    subtitle: "Measure before you scale",
    points: [
      "LLM benchmarking",
      "Model evaluation",
      "Adversarial testing",
      "Data annotation",
      "Dataset quality and review",
    ],
  },
  {
    subtitle: "From idea to delivery team",
    points: [
      "Product discovery",
      "MVP development",
      "Product modernization",
      "Dedicated development teams",
      "Ongoing engineering",
    ],
  },
  {
    subtitle: "Presence that supports growth",
    points: [
      "Brand identity",
      "Website development",
      "Social media management",
      "Lead generation",
      "Digital marketing",
    ],
  },
];

export const stats = [
  { value: 4, suffix: "", label: "Ready-to-deploy products" },
  { value: 6, suffix: "", label: "Service capability pillars" },
  { value: 2, suffix: "", label: "Delivery hubs" },
  { value: 15, suffix: " min", label: "Typical first conversation" },
];

export const heroProofPoints = [
  { value: "Products", label: "Ready-to-deploy platforms" },
  { value: "Services", label: "Six delivery pillars" },
  { value: "Practical", label: "AI for real operations" },
];

/** Buyer challenges — four outcome cards */
export const buyerChallenges = [
  {
    label: "Reduce handoffs",
    value: "Cut repetitive tasks",
    note: "Fewer manual handoffs across teams and tools",
  },
  {
    label: "Connect systems",
    value: "One clearer workflow",
    note: "Bring disconnected tools into one process",
  },
  {
    label: "Modernize",
    value: "Replace outdated steps",
    note: "Useful software instead of workarounds",
  },
  {
    label: "Build capacity",
    value: "Grow without clutter",
    note: "Digital capacity without unnecessary complexity",
  },
];

/** Featured products — rendered by the Pricing/products section */
export const featuredProducts = [
  {
    name: "Clonvo",
    category: "AI customer conversation platform",
    blurb:
      "Manage customer conversations through configured AI-assisted communication workflows. Branded partner experiences may be offered under agreed white-label terms.",
    href: "https://clonvo.chat",
    cta: "Explore Clonvo",
    status: "Live",
    points: [
      "WhatsApp, Instagram and Messenger",
      "Cited AI replies from your docs",
      "Human handoff with context",
      "Partner white-label options",
    ],
    featured: true,
  },
  {
    name: "ProTender",
    category: "Tender and proposal workflow software",
    blurb:
      "Software designed to support tender and proposal-related workflows. Feature language matches approved live product scope only.",
    href: "/contact",
    cta: "Explore ProTender",
    status: "Live",
    points: [
      "Tender and proposal workflows",
      "Team collaboration paths",
      "Structured submission support",
      "Scope confirmed on enquiry",
    ],
    featured: false,
  },
  {
    name: "Breaking Portal",
    category: "Newsroom and publishing workflow platform",
    blurb:
      "Organize breaking-news and publishing workflows. We present only verified live editorial, publishing and team capabilities.",
    href: "/contact",
    cta: "Explore Breaking Portal",
    status: "Live",
    points: [
      "Newsroom workflow structure",
      "Publishing coordination",
      "Team roles and handoffs",
      "Verified capabilities only",
    ],
    featured: false,
  },
  {
    name: "Genesis Studio",
    category: "Website and content studio / CMS",
    blurb:
      "A studio/CMS product for creating and managing website or content experiences—not an AI-agent orchestration platform.",
    href: "/contact",
    cta: "Explore Genesis Studio",
    status: "Live",
    points: [
      "Website and content management",
      "Editable page experiences",
      "Studio-style authoring",
      "Practical publishing controls",
    ],
    featured: false,
  },
];

/** Keep alias used by older imports during transition */
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

/** Industries — buyer-specific relevance */
export const useCases = [
  {
    slug: "professional-services",
    icon: "Scale",
    title: "Professional services",
    image: "/images/team-collab.jpg",
    description:
      "Intake, client communication and delivery workflows that need clear process, secure knowledge and practical automation.",
    metric: { value: "Process", label: "Clarity without extra complexity" },
    tags: ["Intake", "Knowledge", "Automation", "Portals"],
  },
  {
    slug: "healthcare-operations",
    icon: "HeartPulse",
    title: "Healthcare operations",
    image: "/images/industry-health.jpg",
    description:
      "Front-office and back-office digital experiences that respect careful data handling and human oversight.",
    metric: { value: "Careful", label: "Oversight built into the workflow" },
    tags: ["Operations", "Portals", "FAQs", "Handoff"],
  },
  {
    slug: "retail-ecommerce",
    icon: "ShoppingBag",
    title: "Retail & ecommerce",
    image: "/images/industry-ecom.jpg",
    description:
      "Customer conversations, catalogues and order workflows brought into systems teams can actually run day to day.",
    metric: { value: "Customers", label: "Meet them where they already message" },
    tags: ["Conversations", "Orders", "Support", "Web"],
  },
  {
    slug: "real-estate",
    icon: "Building2",
    title: "Real estate & property",
    image: "/images/team-meeting.jpg",
    description:
      "Listing questions, lead qualification and follow-up flows shaped around how property teams already work.",
    metric: { value: "Leads", label: "Context preserved for every handoff" },
    tags: ["Listings", "Leads", "Follow-up", "Portals"],
  },
  {
    slug: "home-services",
    icon: "Wrench",
    title: "Home & field services",
    image: "/images/team-office.jpg",
    description:
      "Quotes, booking and after-hours questions handled with useful software—not more spreadsheets.",
    metric: { value: "After hours", label: "Inquiries that still get answered" },
    tags: ["Quotes", "Booking", "Field", "Messaging"],
  },
  {
    slug: "agencies-partners",
    icon: "Megaphone",
    title: "Agencies & partners",
    image: "/images/service-digital.jpg",
    description:
      "White-label and partner delivery models for teams that want to offer digital products under their own brand.",
    metric: { value: "Partners", label: "Your brand on agreed terms" },
    tags: ["White-label", "Products", "Delivery", "Growth"],
  },
];

/** How we work — five delivery steps */
export const approach = [
  {
    step: "01",
    title: "Discover",
    description:
      "We map the challenge, current systems, constraints and success criteria so the next step is grounded in how the business actually operates.",
  },
  {
    step: "02",
    title: "Define",
    description:
      "Scope, priorities, ownership and a clear delivery plan. You know what will be built, what is out of scope, and how progress will be reviewed.",
  },
  {
    step: "03",
    title: "Design & Build",
    description:
      "Interfaces, workflows and integrations are designed and implemented against the agreed scope—with regular checkpoints, not big surprises.",
  },
  {
    step: "04",
    title: "Launch",
    description:
      "Go-live with the training, handoff and operational checks needed for real users. Launch is a controlled release, not a hand-wave.",
  },
  {
    step: "05",
    title: "Improve",
    description:
      "Measure what matters, fix friction and iterate. Delivery continues through practical improvements after the first release.",
  },
];

export const approachStepMeta = [
  {
    icon: "Search",
    tagline: "Understand the real constraint",
    owner: "You + ClonaLabs",
    deliverables: [
      "Workflow and system map",
      "Success criteria",
      "Priority opportunities",
    ],
  },
  {
    icon: "ClipboardList",
    tagline: "Agree scope before build",
    owner: "You + ClonaLabs",
    deliverables: [
      "Clear scope boundaries",
      "Delivery plan and owners",
      "Review cadence",
    ],
  },
  {
    icon: "PencilRuler",
    tagline: "Build against the plan",
    owner: "ClonaLabs",
    deliverables: [
      "Working software increments",
      "Design and engineering checkpoints",
      "Integration against live systems",
    ],
  },
  {
    icon: "Rocket",
    tagline: "Release with operational care",
    owner: "You + ClonaLabs",
    deliverables: [
      "Go-live checklist",
      "Handoff and training",
      "Support path",
    ],
  },
  {
    icon: "RefreshCw",
    tagline: "Keep improving what ships",
    owner: "You + ClonaLabs",
    deliverables: [
      "Usage and friction review",
      "Prioritized improvements",
      "Ongoing delivery options",
    ],
  },
];

export const whyChooseUs = [
  {
    icon: "Handshake",
    label: "Business-first discovery",
    desc: "We start with the workflow and the outcome, not a tool pitch.",
  },
  {
    icon: "Layers",
    label: "Products and services",
    desc: "Ready platforms where they fit, custom delivery where they do not.",
  },
  {
    icon: "MessageSquare",
    label: "Clear scope and communication",
    desc: "Agreed boundaries, regular updates and no vague promises.",
  },
  {
    icon: "ShieldCheck",
    label: "Practical delivery",
    desc: "Launch carefully, then improve with real usage in mind.",
  },
];

export const trustPoints = [
  { label: "Products + services, clearly separated" },
  { label: "Practical AI for real operations" },
  { label: "Verified capabilities only" },
  { label: "Canada + Pakistan delivery hubs" },
];

export const faq = [
  {
    question: "What is ClonaLabs?",
    answer:
      "ClonaLabs is a technology partner for Canadian businesses. We help improve operations, build custom digital solutions and put practical AI to work—through ready-to-deploy products and six service capability pillars.",
  },
  {
    question: "How are products different from services?",
    answer:
      "Products are commercial platforms you can explore and adopt (Clonvo, ProTender, Breaking Portal, Genesis Studio). Services are delivery capabilities—AI systems, custom software, web and mobile, evaluation and data operations, product teams, and digital presence—scoped to your business.",
  },
  {
    question: "What is Clonvo?",
    answer:
      "Clonvo is our AI customer conversation platform for managing conversations through configured AI-assisted workflows across channels such as WhatsApp, Instagram and Messenger. Branded partner experiences may be offered under agreed white-label terms. White-label access does not transfer platform or source-code ownership.",
  },
  {
    question: "What other products do you offer?",
    answer:
      "ProTender supports tender and proposal workflows. Breaking Portal supports newsroom and publishing workflows. Genesis Studio is a website and content studio/CMS. We only describe verified live capabilities on each product.",
  },
  {
    question: "Do you offer SEO or Google Search management?",
    answer:
      "No. Digital Presence & Growth is a supporting capability for brand, websites, social, lead generation and digital marketing—not a substitute for our core engineering proposition, and not an SEO/Search management offering.",
  },
  {
    question: "How do engagements usually start?",
    answer:
      "With a conversation about your goals, current systems and challenges. From there we route you to the right product path or service discovery—Discover → Define → Design & Build → Launch → Improve.",
  },
  {
    question: "Where does ClonaLabs operate?",
    answer:
      "We work with Canadian-market buyers and operate delivery hubs in Mississauga, Canada and Lahore, Pakistan. Specific legal entity, contracting and residency claims are confirmed with the Canadian partner for each engagement.",
  },
  {
    question: "How do I get started?",
    answer:
      "Use Talk to Our Team on the contact page, or book a short demo when you want to see a specific product such as Clonvo.",
  },
];

export const footerLinks = {
  company: [
    { label: "About", href: "/about" },
    { label: "How we work", href: "/#how-we-work" },
    { label: "FAQ", href: "/faq" },
    { label: "Contact", href: "/contact" },
  ],
  services: [
    { label: "AI & Intelligent Systems", href: "/#solutions" },
    { label: "Custom Software", href: "/#solutions" },
    { label: "Web & Mobile", href: "/#solutions" },
    { label: "AI Evaluation & Data Ops", href: "/#solutions" },
    { label: "Product Delivery", href: "/#solutions" },
    { label: "Digital Presence & Growth", href: "/#solutions" },
  ],
  products: [
    { label: "Clonvo", href: "https://clonvo.chat" },
    { label: "ProTender", href: "/#products" },
    { label: "Breaking Portal", href: "/#products" },
    { label: "Genesis Studio", href: "/#products" },
  ],
  resources: [
    { label: "Industries", href: "/#industries" },
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
