/**
 * StudyRight Website Content Source of Truth
 * All client-facing text, contact information, services, packages, and media paths.
 * Components must read strictly from this file.
 * Mark any pending client information with "// TODO client".
 */

export const content = {
  businessName: "StudyRight",
  legalName: "Study Right Global Web Limited",
  tagline: "Your Pathway to Study, Travel & Business Partnership",
  subheadline:
    "Study abroad, Hajj and Umrah, travel planning, business consulting and flexible tricycle ownership, all in one place.",

  // Contact details
  phones: ["07068474849", "09047220470", "08141828270", "08038231013"],
  whatsappNumber: "2347068474849", // international format, no plus sign
  email: "Olaqrightstudy26@gmail.com",

  // Visual branding
  logo: "/studyright-logo.png",
  partner: {
    name: "Toluwalase Multi Blitz",
    legalName: "Toluwalase Tricycle Multibliz Limited",
    regNumber: "9553810",
    logo: "/toluwalase-logo.png",
    description: "Transportation • Logistics • General Merchandise • Business Services",
  },

  // Physical office address
  address: "10/11 Tagoe Street, Oke-Ilewo, Abeokuta, Ogun State",

  // TODO client: provide official social media handles/links
  socials: {
    instagram: "", // TODO client
    facebook: "", // TODO client
    tiktok: "", // TODO client
    youtube: "", // TODO client
  },

  // Corporate registrations & certifications
  licences: [
    { label: "CAC Registered", number: "RC 9315987" },
  ],

  // Key facts / metrics
  stats: [
    { label: "Services", value: "4" }, // TODO client
    { label: "CAC Registered", value: "Yes" }, // TODO client
  ],

  // 4 Core Colour-Blocked Services
  services: [
    {
      id: "study-abroad",
      title: "Study Abroad & Travel Advisory",
      category: "Education & Global Mobility",
      color: "charcoal", // #2B2B2B
      accentColor: "#2B2B2B",
      bgClass: "bg-[#2B2B2B] text-white",
      badgeClass: "bg-white/10 text-white border-white/20",
      icon: "GraduationCap",
      description:
        "Comprehensive support to help students secure international admissions and navigate visa requirements with confidence.",
      bullets: [
        "Visa Assistance",
        "School Admission",
        "Travel Planning",
      ],
      whatsappMessage:
        "Hello StudyRight, I would like to enquire about your Study Abroad & Travel Advisory services.",
    },
    {
      id: "hajj-umrah",
      title: "Hajj & Umrah",
      category: "Spiritual Pilgrimage",
      color: "orange", // #F27A2E
      accentColor: "#F27A2E",
      bgClass: "bg-[#F27A2E] text-white",
      badgeClass: "bg-white/20 text-white border-white/30",
      icon: "MoonStar",
      description:
        "Dignified, stress-free holy pilgrimage arrangements crafted with devotion, care, and dependable logistics.",
      bullets: [
        "Visa processing",
        "Flights and hotel arrangements",
        "Guided travel support",
      ],
      whatsappMessage:
        "Assalamu Alaikum StudyRight, I would like to enquire about your Hajj and Umrah pilgrimage packages.",
    },
    {
      id: "business-consultant",
      title: "Business Consultant",
      category: "Corporate & Enterprise",
      color: "blue", // #1E9BE0
      accentColor: "#1E9BE0",
      bgClass: "bg-[#1E9BE0] text-white",
      badgeClass: "bg-white/20 text-white border-white/30",
      icon: "Briefcase",
      description:
        "End-to-end corporate solutions to establish, document, and scale your commercial ventures legally in Nigeria.",
      bullets: [
        "Business Registration",
        "Proposal & Documentation",
        "Strategy & Growth Consulting",
      ],
      whatsappMessage:
        "Hello StudyRight, I need professional assistance with Business Registration and Corporate Consulting.",
    },
    {
      id: "tricycle-installment",
      title: "Tricycle Installment",
      category: "Empowerment & Asset Financing",
      color: "yellow", // #FFD92E
      accentColor: "#FFD92E",
      bgClass: "bg-[#FFD92E] text-[#2B2B2B]",
      badgeClass: "bg-black/10 text-[#2B2B2B] border-black/15",
      icon: "Truck",
      description:
        "Empowering transport operators and entrepreneurs through accessible, structured, and transparent hire-purchase plans.",
      bullets: [
        "Ride Now, Pay Small Small",
        "Flexible installment terms",
        "Low initial commitment",
      ],
      whatsappMessage:
        "Hello StudyRight, I would like to enquire about your Tricycle Installment ('Ride Now, Pay Small Small') plans.",
    },
  ],

  // Hajj & Umrah Feature Content
  hajjUmrah: {
    title: "Hajj & Umrah Pilgrimage Services",
    subtitle:
      "A peaceful, spiritually fulfilling journey guided with utmost care from your initial visa application to your safe return home.",
    highlights: [
      {
        title: "Visa Processing",
        description:
          "Complete documentation support ensuring official clearance and hassle-free visa approvals.",
        icon: "FileCheck2",
      },
      {
        title: "Flights & Hotels Arrangements",
        description:
          "Convenient flight bookings and comfortable accommodation within easy proximity to the Holy Mosques in Makkah and Madinah.",
        icon: "Building2",
      },
      {
        title: "Guided Travel Support",
        description:
          "Dedicated on-ground guidance and spiritual leadership to assist you through every pillar of your pilgrimage.",
        icon: "Compass",
      },
    ],
    whatsappPrompt:
      "Assalamu Alaikum StudyRight, I would like to enquire about your upcoming Hajj and Umrah pilgrimage schedules and details.",
  },

  // TODO client: populate packages when released (name, duration, dates, price, hotels, airline, included, excluded)
  // When empty, component displays a graceful announcement card.
  packages: [], // TODO client

  // Tricycle Installment Feature Content
  tricycle: {
    headline: "Ride Now, Pay Small Small",
    subheadline:
      "In collaboration with Toluwalase Multi Blitz, StudyRight provides straightforward, reliable hire-purchase options so you can own your commercial tricycle while earning daily income.",
    benefits: [
      {
        title: "Flexible Installment Plans",
        description:
          "Repayment terms tailored to realistic daily or weekly transport earnings without crippling your cash flow.",
        icon: "CalendarCheck",
      },
      {
        title: "Low Initial Deposit",
        description:
          "Accessible down-payment threshold designed to get hard-working riders and operators on the road faster.",
        icon: "Coins",
      },
      {
        title: "Easy Monthly Payment",
        description:
          "Clear payment schedules, transparent accounting, and absolutely no hidden fees or surprise penalties.",
        icon: "Wallet",
      },
      {
        title: "Trusted & Reliable Ownership",
        description:
          "Full official documentation with genuine handover of vehicle papers upon completion of your plan.",
        icon: "ShieldCheck",
      },
    ],
    whatsappPrompt:
      "Hello StudyRight, I am interested in your Tricycle Installment ('Ride Now, Pay Small Small') plan. Please share the requirements and available units.",
  },

  // How It Works - 3 Step Process
  howItWorks: [
    {
      step: "01",
      title: "Contact Us",
      description:
        "Reach out via WhatsApp, phone, or our online enquiry form with the service you need assistance with.",
      icon: "MessageSquare",
    },
    {
      step: "02",
      title: "We Guide You Through",
      description:
        "Our consultants review your profile, answer questions, verify documentation, and lay out the exact roadmap.",
      icon: "Compass",
    },
    {
      step: "03",
      title: "Get Started With Confidence",
      description:
        "Begin your study admission, holy journey, business filing, or tricycle plan with total clarity and dedicated support.",
      icon: "CheckCircle2",
    },
  ],

  // TODO client: real testimonials, only with permission
  testimonials: [],

  faqs: [
    {
      question: "What visas do you help with?",
      answer:
        "We help with UK student, working and family visas, and working visas for Gulf countries. We also handle USA visas based on your request.",
    },
    {
      question: "How do I get started?",
      answer:
        "Contact us on WhatsApp or fill in the enquiry form. We'll ask about your goal, then tell you which route fits and what documents you need.",
    },
    {
      question: "What documents will I need?",
      answer:
        "It depends on the visa type and country. We'll give you a checklist for your case after the first consultation.",
    },
    {
      question: "Can you help me with a UK student visa?",
      answer:
        "Yes. Tell us what you want to study and where, and we'll guide you through the process.",
    },
    {
      question: "Do you offer work visas outside the UK?",
      answer:
        "Yes, for Gulf countries. Message us with the country and the kind of work.",
    },
    {
      question: "Can you help with a USA visa?",
      answer:
        "Yes, on request. Contact us with your plans and we'll tell you how we can help.",
    },
    {
      question: "How much do your services cost?",
      answer:
        "Fees depend on the visa type and your case. Contact us for a quote.",
    },
    {
      question: "How long does the process take?",
      answer:
        "Timelines vary by country, visa type and the authority handling your application. We'll give you an honest estimate once we know your case.",
    },
    {
      question: "Where is your office?",
      answer:
        "10/11 Tagoe Street, Oke-Ilewo, Abeokuta, Ogun State. You can also reach us on WhatsApp.",
    },
  ],

  // Navigation Links
  navigation: [
    { label: "Services", href: "#services" },
    { label: "Hajj & Umrah", href: "#hajj-umrah" },
    { label: "Tricycle Plans", href: "#tricycle" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#contact" },
  ],
};
