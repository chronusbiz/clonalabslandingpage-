export const site = {
  productName: "Clonvo",
  wordmark: "Clonalabs",
  tagline: "White-label AI inquiry handling for agencies",
  legal: {
    entityName: "TODO: Legal entity name",
    postalAddress: "TODO: Valid physical postal address",
    supportEmail: "support@clonvo.chat",
    trademarkLine:
      "WhatsApp, Instagram and Messenger are trademarks of Meta Platforms, Inc. Clonvo is an independent software provider.",
  },
  cta: {
    label: "Book a 15-minute walkthrough",
    secondaryLabel: "See pricing",
    reassurance:
      "No revenue share. No source code to maintain. Start with one client.",
    formNote: "We’ll reply about your walkthrough. No spam.",
  },
  proof: [
    { label: "Official Meta APIs", detail: "WhatsApp · Instagram · Messenger" },
    { label: "Cited AI replies", detail: "Grounded in your client’s docs" },
    { label: "Human handoff", detail: "Context preserved every time" },
    { label: "No revenue share", detail: "You bill. You keep the margin." },
  ],
  nav: [
    { label: "Product", href: "#product" },
    { label: "How it works", href: "#how" },
    { label: "Pricing", href: "#pricing" },
    { label: "FAQ", href: "#faq" },
  ],
  hero: {
    default: {
      h1: "Sell AI inquiry handling under your own brand.",
      sub: "Your logo. Your domain. Your clients. We run the Unibox — WhatsApp, Instagram and Messenger, with cited AI replies.",
    },
    afterHours: {
      h1: "Who answers your clients’ inquiries after hours?",
      sub: "Offer a branded Unibox that answers, captures leads and hands off to a human. You keep the relationship — we run the platform.",
    },
  },
  trust: {
    h2: "Built for Meta channels",
    intro:
      "WhatsApp, Instagram and Messenger are live today via official Meta APIs — same inbox your clients already expect.",
    channels: [
      { name: "WhatsApp Business", status: "Connected" },
      { name: "Instagram Direct", status: "Connected" },
      { name: "Facebook Messenger", status: "Connected" },
    ],
    points: [
      {
        title: "Cited sources",
        body: "Replies quote the client’s own docs. If it isn’t in the knowledge base, the AI escalates instead of guessing.",
      },
      {
        title: "Human handoff",
        body: "One tap pauses the AI and passes history, the last reply and why it stopped.",
      },
      {
        title: "Built for scrutiny",
        body: "Encrypted, tenant-isolated, audit logs and clear AI disclosure when asked.",
      },
    ],
  },
  opportunity: {
    h2: "Your clients’ inquiries arrive after hours. Someone should answer.",
    points: [
      {
        title: "Inquiries arrive where customers already are",
        body: "Website forms, Instagram DMs and Messenger threads land after hours, not on your client’s office clock.",
      },
      {
        title: "Slow replies lose leads",
        body: "A homeowner asking about HVAC repair, or a patient asking about availability, often chooses the first business that answers.",
      },
      {
        title: "You can sell this as a recurring service",
        body: "Package answering, lead capture and human handoff under your brand, billed monthly by you.",
      },
    ],
  },
  whoDoesWhat: {
    h2: "Who does what",
    intro: "You own the client relationship. We run the software.",
    clonvo: {
      heading: "Clonvo",
      items: [
        "Platform, hosting and updates",
        "Agency technical support",
        "Branding and domain setup",
      ],
    },
    agency: {
      heading: "Your agency",
      items: [
        "Find clients and set prices",
        "Collect approved business info",
        "Configure agents and day-to-day support",
      ],
    },
  },
  features: {
    h2: "What your clients get",
    intro:
      "Live capabilities only. Each item below is available today on the Clonvo platform.",
    items: [
      {
        title: "Unified inbox",
        body: "WhatsApp, Instagram and Messenger threads in one place, with the customer’s history attached.",
      },
      {
        title: "Cited AI replies",
        body: "Answers are grounded in documents the client uploads. Sources are shown with the reply. If it isn’t in the files, the AI does not invent it.",
      },
      {
        title: "Human handoff with context",
        body: "When the AI shouldn’t answer, it pauses and passes history, the last reply and the reason it stopped.",
      },
      {
        title: "CRM tags and stages",
        body: "Tag conversations and move leads through stages without a separate inbox.",
      },
      {
        title: "Appointment and booking tools",
        body: "Help capture booking requests and connect to calendar or booking flows you already use.",
      },
    ],
  },
  portal: {
    h2: "Your branded portal",
    intro:
      "Your logo, colours and domain. Separate workspaces per business client. You stay the face of the relationship.",
    bullets: [
      "Wordmark and colours on login and dashboard",
      "One custom domain — app.youragency.com",
      "One workspace per business client",
    ],
  },
  pricing: {
    h2: "Pricing for agencies",
    intro:
      "Same core product on every package. What changes is how many business clients you can run and the pooled AI reply allowance.",
    requestPricingCopy:
      "Package pricing is shared on the walkthrough. Book a slot and we will send the current numbers.",
    activation: {
      amount: 299,
      label: "One-time activation",
      per: "per agency",
      includes: [
        "Branding configuration",
        "One custom domain",
        "Agency account setup",
        "One training session",
        "Guided first-client setup",
      ],
    },
    packages: [
      {
        id: "launch",
        name: "Launch",
        monthly: 149,
        clients: 3,
        replies: 3000,
        firstPayment: 448,
      },
      {
        id: "growth",
        name: "Growth",
        monthly: 299,
        clients: 10,
        replies: 10000,
        firstPayment: 598,
      },
      {
        id: "scale",
        name: "Scale",
        monthly: 499,
        clients: 20,
        replies: 20000,
        firstPayment: 798,
      },
    ] as const,
    includedOnAll:
      "All packages include the same core features, branding, hosting, updates and agency technical support.",
    whatsapp: {
      title: "WhatsApp delivery fees are separate",
      points: [
        "Agencies top up a prepaid balance.",
        "Actual provider charges are deducted with no markup.",
        "Spend is shown per business client.",
        "Auto top-up is optional.",
        "Rates vary by market and message category.",
      ],
    },
    aiReply: {
      title: "What counts as an AI reply",
      definition:
        "TODO: Confirm with finance. Working definition: one AI reply is one outbound message generated by the AI, not a human. Inbound customer messages do not consume the allowance. Human replies do not consume the AI allowance; WhatsApp delivery may still draw from the prepaid balance.",
      atLimit:
        "TODO: Confirm with product. Working policy: when the pooled allowance is reached, the AI stops replying until the next billing period or an upgrade. Human replies can continue. A silent client inbox is avoided only if a person is covering the thread.",
    },
    suggestedRetail: {
      title: "Suggested retail pricing for your clients",
      disclaimer: "Your prices are your own. Clonvo takes no revenue share.",
      items: [
        {
          name: "AI Front Desk",
          price: 199,
          description:
            "FAQs, inquiry response, lead capture and handoff.",
        },
        {
          name: "AI Lead Assistant",
          price: 299,
          description:
            "Front Desk plus qualification and standard booking.",
        },
        {
          name: "Managed AI Service",
          price: 499,
          description:
            "Lead Assistant plus ongoing optimisation and reporting.",
        },
      ],
    },
    math: {
      title: "Illustrative, not a promise of earnings",
      body: "3 clients × $299 = $897; minus the $149 Launch subscription = $748 before your labour, WhatsApp spend, extra usage and other costs. This is not net profit.",
    },
  },
  launch: {
    h2: "How to launch",
    intro: "From first call to first AI reply — usually the same week.",
    steps: [
      {
        title: "Book a walkthrough",
        body: "Fifteen minutes on fit, channels and your first client.",
        meta: "≈ 15 min",
      },
      {
        title: "Brand and connect",
        body: "We apply your logo, colours and domain, then connect Meta channels via official APIs.",
        meta: "Working session",
      },
      {
        title: "Upload knowledge, go live",
        body: "Drop in PDFs and FAQs, set handoff rules, toggle AI on. Replies start within seconds.",
        meta: "Live in minutes",
      },
    ],
  },
  faq: [
    {
      id: "resell",
      q: "Can I resell this to other agencies?",
      a: "No. Agencies sell the branded service to their own business clients only. No source code or independent deployment rights are transferred.",
    },
    {
      id: "relationship",
      q: "Do I own my client relationships?",
      a: "Yes. You bill and support your clients. Clonvo takes no revenue share.",
    },
    {
      id: "ghl",
      q: "Is this a replacement for GoHighLevel?",
      a: "No. It is a focused, easier-to-operate product for AI inquiry handling. We do not claim to replace every GHL feature.",
    },
    {
      id: "unlimited",
      q: "Is there an unlimited plan?",
      a: "No. Each package has a stated AI reply allowance.",
    },
    {
      id: "not-included",
      q: "What isn’t included?",
      a: "Custom development and done-for-you setup for every client are separate.",
    },
    {
      id: "exit",
      q: "What about cancellation, refunds, billing and my data if I leave?",
      a: "TODO: Confirm with legal and finance. Placeholder: monthly billing after the first payment (activation plus first month). Cancellation, refunds, and what happens to agency and client data on exit are not yet published. We will state them in writing before you pay.",
    },
    {
      id: "ai-identity",
      q: "Does the AI identify itself?",
      a: "Yes, when asked.",
    },
  ],
  form: {
    h2: "Book a 15-minute walkthrough",
    intro:
      "Tell us who you are. We will reply about a walkthrough focused on the client type you serve.",
    clientTypeLabel: "What type of clients do you serve? (optional)",
    clientTypePlaceholder: "Local SEO, dental, HVAC, med spa…",
    submit: "Book a 15-minute walkthrough",
    success:
      "Received. We’ll reply about your walkthrough using the work email you provided.",
    error:
      "Something went wrong sending this. Email us at the address in the footer, or try again in a moment.",
  },
  seo: {
    title: "White-label AI inquiry handling for agencies | Clonalabs",
    description:
      "Sell AI inquiry handling under your own brand. Your logo, domain and client accounts. Clonvo runs the platform. Book a 15-minute walkthrough.",
  },
  mocks: {
    agency: {
      name: "YourAgency",
      workspace: "Inbox",
      domain: "app.youragency.com",
    },
    threads: [
      {
        name: "Dan M.",
        preview: "Furnace won’t kick on — can someone come tonight?",
        time: "2m",
        channel: "WhatsApp" as const,
        unread: true,
        active: true,
      },
      {
        name: "Lakeside Dental",
        preview: "Is Saturday still open for cleanings?",
        time: "18m",
        channel: "Instagram" as const,
        unread: true,
        active: false,
      },
      {
        name: "Aura Med Spa",
        preview: "Can I reschedule my consult?",
        time: "1h",
        channel: "Messenger" as const,
        unread: false,
        active: false,
      },
      {
        name: "Website visitor",
        preview: "Do you cover ZIP 43017 after hours?",
        time: "3h",
        channel: "Widget" as const,
        unread: false,
        active: false,
      },
    ],
    chat: {
      contact: "Dan M.",
      channel: "WhatsApp",
      channelTag: "WHATSAPP",
      status: "new",
      lastContact: "Just now",
      conversations: 1,
      aiOn: true,
      messages: [
        {
          from: "customer" as const,
          text: "Furnace won’t kick on — can someone come tonight?",
        },
        {
          from: "ai" as const,
          text: "Sorry you’re dealing with that. We cover evening emergencies in 43004–43081. Can I take your ZIP and a callback number?",
          source: "Service area.pdf · after-hours",
        },
      ],
    },
  },
} as const;

export type SiteContent = typeof site;
