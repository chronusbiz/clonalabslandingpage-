export const siteConfig = {
  name: "Clonalabs",
  productName: "Clonvo",
  productUrl: "https://clonvo.chat",
  tagline: "White-label AI inquiry handling for agencies.",
  description:
    "Clonalabs runs Clonvo — the AI inbox for WhatsApp, Instagram and Messenger — so agencies can sell it under their own brand. Cited AI replies, human handoff, no per-seat fees, no revenue share.",
  url: "https://clonalabs.ca",
  email: "support@clonvo.chat",
  // E.164 format for tel: links and WhatsApp deep links.
  phone: "+923258821216",
  // Human-readable variant for display in copy and the contact strip.
  phoneDisplay: "+92 325 8821216",
  bookingUrl: "https://cal.com/muhammad-owais/15-min-demo",
  bookingLabel: "Book a 15-minute walkthrough",
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

/** Mostly anchors on the home page. Anchors are root-relative so they also
 *  work when clicked from /faq, /contact, etc. */
export const navLinks = [
  { label: "Product", href: "/#product" },
  { label: "How it works", href: "/#how-it-works" },
  { label: "Pricing", href: "/#pricing" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

/** External links open in a new tab. */
export function linkTargetProps(href: string) {
  return /^https?:\/\//.test(href)
    ? { target: "_blank" as const, rel: "noopener noreferrer" }
    : {};
}

/** Product pillars (rendered by the Services section). */
export const productPillars = [
  {
    icon: "Inbox",
    slug: "unified-inbox",
    title: "Unified Meta inbox",
    description:
      "WhatsApp, Instagram and Messenger land in one inbox your clients' teams can actually keep up with — with an ops dashboard that shows what is open, answered and escalated.",
  },
  {
    icon: "BookCheck",
    slug: "cited-ai",
    title: "Cited AI replies",
    description:
      "The AI answers from your clients' own documents, FAQs and policies — and shows the source. Grounded replies, not guesses, so inquiries get a real answer at any hour.",
  },
  {
    icon: "UserRoundCheck",
    slug: "human-handoff",
    title: "Human handoff",
    description:
      "When a question needs a person, the conversation is handed to a human with full context. Clients stay in control of what the AI handles and what it never touches.",
  },
  {
    icon: "BadgeCheck",
    slug: "white-label-portal",
    title: "White-label portal",
    description:
      "Sell Clonvo as your own product. Your brand sits on the portal your clients see; Clonalabs runs the platform behind it — with no revenue share and no per-seat fees.",
  },
];

export const stats = [
  { value: 3, suffix: "", label: "Meta channels, one inbox" },
  { value: 0, suffix: "", label: "Per-seat fees" },
  { value: 3, suffix: "", label: "Steps to go live" },
  { value: 256, suffix: "-bit", label: "AES encryption" },
];

export const heroProofPoints = [
  { value: "3", label: "Channels, one inbox" },
  { value: "$0", label: "Per-seat fees" },
  { value: "~3 steps", label: "To go live" },
];

/** Use cases / agency client verticals (rendered by the Industries section). */
export const useCases = [
  {
    slug: "home-services",
    icon: "Wrench",
    title: "HVAC & home services",
    image: "/images/team-office.jpg",
    description:
      "Quote requests and booking questions arrive after hours on WhatsApp and Messenger. Cited AI answers service-area, pricing and availability questions and hands the hot leads to a person.",
    metric: { value: "After-hours", label: "Inquiries answered, not missed" },
    tags: ["Quotes", "Booking", "Service areas", "Handoff"],
  },
  {
    slug: "clinics",
    icon: "HeartPulse",
    title: "Clinics & dental practices",
    image: "/images/industry-health.jpg",
    description:
      "Front desks drown in the same questions — hours, services, insurance, prep. Answer them from the clinic's own documents and route anything clinical or sensitive straight to staff.",
    metric: { value: "Grounded", label: "Answers from the clinic's own docs" },
    tags: ["Hours & services", "FAQs", "Staff handoff", "Private"],
  },
  {
    slug: "ecommerce",
    icon: "ShoppingBag",
    title: "Ecommerce & D2C",
    image: "/images/industry-ecom.jpg",
    description:
      "Shipping, returns and product questions come in through Instagram DMs and WhatsApp. Resolve the repeatable ones instantly and give support one inbox for the rest.",
    metric: { value: "One inbox", label: "Instagram, WhatsApp & Messenger" },
    tags: ["Shipping", "Returns", "Product Q&A", "DMs"],
  },
  {
    slug: "real-estate",
    icon: "Building2",
    title: "Real estate & property",
    image: "/images/team-meeting.jpg",
    description:
      "Listings generate a flood of 'is this still available?' messages. Qualify and answer from listing details, then pass serious buyers to an agent with the full conversation attached.",
    metric: { value: "Qualified", label: "Leads handed to agents with context" },
    tags: ["Listings", "Qualification", "Viewings", "Handoff"],
  },
  {
    slug: "immigration-professional",
    icon: "Scale",
    title: "Immigration & professional services",
    image: "/images/team-collab.jpg",
    description:
      "Consultants and advisory firms field repeat intake questions all day. Answer from published guidance with citations, and escalate case-specific questions to a licensed human.",
    metric: { value: "Cited", label: "Every answer shows its source" },
    tags: ["Intake", "Citations", "Escalation", "Licensed review"],
  },
  {
    slug: "agencies",
    icon: "Megaphone",
    title: "Marketing & web agencies",
    image: "/images/service-digital.jpg",
    description:
      "The core fit: add AI inquiry handling to your retainers, brand it as yours and keep the margin. Clonalabs runs the platform; you own the client relationship.",
    metric: { value: "Your brand", label: "Your clients, your pricing, your margin" },
    tags: ["White-label", "Resell", "No rev share", "Your pricing"],
  },
];

/** Agency onboarding steps (rendered by the Approach section). */
export const approach = [
  {
    step: "01",
    title: "Book a walkthrough",
    description:
      "A 15-minute call to see Clonvo live, talk through your agency and client mix, and pick the plan tiers that fit what you plan to resell.",
  },
  {
    step: "02",
    title: "Brand it as yours",
    description:
      "Set up the white-label portal with your brand so clients see your name, not ours. Clonalabs runs the platform behind it.",
  },
  {
    step: "03",
    title: "Connect the channels",
    description:
      "Link WhatsApp, Instagram and Messenger through Meta's official APIs so every inquiry lands in one unified inbox.",
  },
  {
    step: "04",
    title: "Add client knowledge",
    description:
      "Upload each client's documents, FAQs and policies. The AI answers only from what you give it, and cites the source on every reply.",
  },
  {
    step: "05",
    title: "Set handoff rules",
    description:
      "Decide what the AI handles and what goes to a human. Escalations arrive with the full conversation so nothing has to be repeated.",
  },
  {
    step: "06",
    title: "Go live and resell",
    description:
      "Turn it on, watch results in the ops dashboard and bill clients at your own price. No per-seat fees and no revenue share to Clonalabs.",
  },
];

export const pricingPlans = [
  {
    name: "Starter",
    price: 35,
    blurb: "A first white-label client or a single-channel pilot.",
    messages: "5,000 messages / month",
    channels: "1 channel",
    features: [
      "Unified inbox",
      "Cited AI replies from client docs",
      "Human handoff",
      "Ops dashboard",
    ],
    popular: false,
  },
  {
    name: "Growth",
    price: 79,
    blurb: "Clients who live across Meta channels and their own website.",
    messages: "15,000 messages / month",
    channels: "WhatsApp, Instagram, Messenger + web chat",
    features: [
      "Everything in Starter",
      "All Meta channels plus web chat",
      "15,000 messages per month",
      "Ops dashboard and human handoff",
    ],
    popular: false,
  },
  {
    name: "Pro",
    price: 99,
    blurb: "The plan most agencies resell — adds voice for premium clients.",
    messages: "30,000 messages / month",
    channels: "All channels + voice",
    features: [
      "Everything in Growth",
      "Voice",
      "30,000 messages per month",
      "Ops dashboard and human handoff",
    ],
    popular: true,
  },
  {
    name: "Scale",
    price: 249,
    blurb: "High-volume and regulated clients who need guarantees.",
    messages: "100,000 messages / month",
    channels: "All channels + voice",
    features: [
      "Everything in Pro",
      "100,000 messages per month",
      "SLA",
      "DPA",
    ],
    popular: false,
  },
];

export const trustPoints = [
  { label: "Meta official APIs" },
  { label: "AES-256 encryption" },
  { label: "Tenant isolation" },
  { label: "Canada + Pakistan teams" },
];

export const faq = [
  {
    question: "What is Clonalabs?",
    answer:
      "Clonalabs runs Clonvo, an AI inbox that unifies WhatsApp, Instagram and Messenger. We offer it to agencies as a white-label platform: you sell it under your own brand, and we operate the platform behind it.",
  },
  {
    question: "What is Clonvo?",
    answer:
      "Clonvo (clonvo.chat) is the product. It brings WhatsApp, Instagram and Messenger into one inbox, answers inquiries with AI replies grounded in your documents with citations, hands conversations to humans when needed, and gives operators a dashboard to see what is happening.",
  },
  {
    question: "What does white-label mean here?",
    answer:
      "Your agency presents Clonvo as your own product. Your clients see your brand; Clonalabs runs the platform, infrastructure and updates behind the scenes. You own the client relationship and set your own pricing.",
  },
  {
    question: "Is there a revenue share?",
    answer:
      "No. There is no revenue share and no per-seat fee. You pay the plan price for the volume you need and keep whatever you charge your clients above it.",
  },
  {
    question: "How does the AI avoid making things up?",
    answer:
      "Replies are grounded in the documents, FAQs and policies you upload for each client, and each answer shows the source it came from. When the AI is not confident or the topic needs a person, the conversation is handed to a human.",
  },
  {
    question: "Which channels are supported?",
    answer:
      "WhatsApp, Instagram and Messenger through Meta's official APIs. The Growth plan and above also include web chat, and the Pro and Scale plans add voice.",
  },
  {
    question: "What do the plans cost?",
    answer:
      "Starter is $35/month (5,000 messages, 1 channel), Growth is $79/month (15,000 messages, WhatsApp, Instagram, Messenger and web chat), Pro is $99/month (voice, 30,000 messages) and Scale is $249/month (100,000 messages, SLA and DPA). All prices are in USD.",
  },
  {
    question: "How is client data protected?",
    answer:
      "Data is encrypted with AES-256 and every client runs in an isolated tenant, so one client's information is never mixed with another's. Scale plans include a DPA for clients who need one.",
  },
  {
    question: "How fast can we go live?",
    answer:
      "Clonvo goes live in about three steps: connect your channels, add client knowledge, and set handoff rules. A 15-minute walkthrough is the fastest way to see the flow end to end.",
  },
  {
    question: "Can we use it for our own agency as well as clients?",
    answer:
      "Yes. Running Clonvo on your own inquiries is a good way to show prospective clients exactly what they would be buying.",
  },
  {
    question: "Where is Clonalabs based?",
    answer:
      "We have an office in Mississauga, Ontario, Canada and an engineering office in Lahore, Pakistan.",
  },
  {
    question: "How do I get started?",
    answer:
      "Book a 15-minute walkthrough, or email support@clonvo.chat. We will show you the product, discuss your agency and clients, and recommend the plans that fit.",
  },
];

export const footerLinks = {
  product: [
    { label: "Unified Meta inbox", href: "/#product" },
    { label: "Cited AI replies", href: "/#product" },
    { label: "Human handoff", href: "/#product" },
    { label: "White-label portal", href: "/#product" },
  ],
  agencies: [
    { label: "How it works", href: "/#how-it-works" },
    { label: "Use cases", href: "/#use-cases" },
    { label: "Pricing", href: "/#pricing" },
    { label: "Visit Clonvo", href: "https://clonvo.chat" },
  ],
  company: [
    { label: "About", href: "/about" },
    { label: "FAQ", href: "/faq" },
    { label: "Contact", href: "/contact" },
    { label: "Book a walkthrough", href: "https://cal.com/muhammad-owais/15-min-demo" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
    { label: "Cookie Policy", href: "/cookie-policy" },
  ],
};
