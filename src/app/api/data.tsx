export const menuItems = [
  { name: "Home", href: "/" },
  { name: "System", href: "/cause" },
  { name: "Workshops", href: "/events" },
  { name: "Scam News", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

export const helpdata: { icon: string; title: string; text: string }[] = [
  {
    icon: "/images/help/help-icon-3.svg",
    title: "Measure local need",
    text: "Anonymous pre-tests, post-tests, and follow-up checks show what seniors know, learn, and remember.",
  },
  {
    icon: "/images/help/help-icon-2.svg",
    title: "Teach scam pressure",
    text: "Workshops use realistic calls, texts, links, payment requests, AI voice claims, and recovery scams.",
  },
  {
    icon: "/images/help/help-icon-1.svg",
    title: "Leave tools behind",
    text: "Each site gets large-print materials, trusted-contact cards, family phrase prompts, and app support.",
  },
];

export const CauseData: {
  image: string;
  title: string;
  slug: string;
  text: string;
  raised: string;
  goal: string;
  tag: string;
  date: string;
}[] = [
  {
    image: "/images/app-home.png",
    title: "Brevard Elder Scam Vulnerability Snapshot",
    slug: "scam-check",
    text: "Original local surveys, recognition checks, staff interviews, and observations show where older adults need support.",
    raised: "Surveys",
    goal: "Local proof",
    tag: "Evidence",
    date: "Jul 21, 2026",
  },
  {
    image: "/images/causes/cause-2.jpg",
    title: "Repeated-Site Workshop Model",
    slug: "call-check",
    text: "Anchor sites receive a baseline assessment, full workshop, follow-up retention check, and staff handoff.",
    raised: "4 steps",
    goal: "Retain skills",
    tag: "Workshop",
    date: "Jul 21, 2026",
  },
  {
    image: "/images/causes/cause-3.jpg",
    title: "Trusted Contact Cards and Family Phrase",
    slug: "trusted-contact",
    text: "Seniors write down who to call and create a private family phrase before an emergency scam happens.",
    raised: "Ask first",
    goal: "Verify claims",
    tag: "Family",
    date: "Jul 21, 2026",
  },
  {
    image: "/images/causes/cause-4.jpg",
    title: "App Checks for Calls, Texts, QR Codes, and Links",
    slug: "link-qr-check",
    text: "The app supports message checks, link checks, QR warnings, voicemail transcripts, and suspicious call questions.",
    raised: "App tools",
    goal: "Slow down",
    tag: "App",
    date: "Jul 21, 2026",
  },
  {
    image: "/images/causes/cause-5.jpg",
    title: "Payment Pressure Safety Routine",
    slug: "payment-safety",
    text: "Participants learn why gift cards, crypto, wire transfers, Zelle, Cash App, and Venmo are high-risk under pressure.",
    raised: "Pause",
    goal: "No rushed pay",
    tag: "Payments",
    date: "Jul 21, 2026",
  },
  {
    image: "/images/causes/cause-6.jpg",
    title: "AI Voice and Family Emergency Defense",
    slug: "voice-clone",
    text: "The project treats voice-clone calls as emotional pressure systems, not proof that the caller is family.",
    raised: "Phrase",
    goal: "Verify voice",
    tag: "AI Voice",
    date: "Jul 21, 2026",
  },
  {
    image: "/images/causes/cause-7.jpg",
    title: "Recovery Guide and Reporting Steps",
    slug: "recovery-guide",
    text: "If someone already clicked, paid, or shared information, the program gives calm steps for damage control.",
    raised: "Recover",
    goal: "Act quickly",
    tag: "Recovery",
    date: "Jul 21, 2026",
  },
  {
    image: "/images/causes/cause-8.jpg",
    title: "Staff Handoff Materials",
    slug: "learn",
    text: "Partner sites receive scripts, large-print reminders, QR access, and simple materials they can keep using.",
    raised: "Sustain",
    goal: "Site-ready",
    tag: "Materials",
    date: "Jul 21, 2026",
  },
  {
    image: "/images/causes/cause-9.jpg",
    title: "Practice Mode and Confidence Score",
    slug: "practice-mode",
    text: "Realistic examples let users choose safe, suspicious, or scam, then see why the answer makes sense.",
    raised: "Practice",
    goal: "Skill growth",
    tag: "Training",
    date: "Jul 21, 2026",
  },
];

export const Eventdata: {
  image: string;
  title: string;
  text: string;
  date: string;
  location: string;
  type: string;
  entrants: string;
  duration: string;
  category: string;
  detail: string;
  slug: string;
}[] = [
  {
    image: "/images/event/event-img-1.jpg",
    title: "Anchor Site Baseline Session",
    slug: "senior-center-workshop",
    text: "The first visit measures scam recognition before instruction begins.",
    date: "Aug 05, 2026",
    location: "Brevard County",
    type: "Assessment",
    entrants: "Open",
    duration: "30 minutes",
    category: "Survey, Pre-test",
    detail:
      "The baseline session gives the team anonymous local evidence before instruction. Seniors review realistic scam examples, answer short recognition questions, and identify trusted contacts they would call before acting.",
  },
  {
    image: "/images/event/event-img-2.jpg",
    title: "Full Scam-Defense Workshop",
    slug: "family-phrase-day",
    text: "A practical workshop built around pressure, verification, and safe next steps.",
    date: "Aug 12, 2026",
    location: "Senior-serving site",
    type: "Workshop",
    entrants: "Open",
    duration: "60 minutes",
    category: "Calls, Texts, Payments",
    detail:
      "The workshop covers fake bank calls, Medicare and government impersonation, delivery texts, QR codes, verification-code requests, gift cards, crypto, remote access, and AI voice family emergencies.",
  },
  {
    image: "/images/event/event-img-3.jpg",
    title: "Follow-Up Retention Check",
    slug: "caregiver-training",
    text: "A later visit checks what seniors retained after the workshop.",
    date: "Aug 19, 2026",
    location: "Anchor site",
    type: "Follow-up",
    entrants: "Open",
    duration: "30 minutes",
    category: "Post-test, Retention",
    detail:
      "The follow-up check measures whether participants still recognize scam pressure, remember the Stop, Check, Ask routine, and know how to use a trusted contact or family verification phrase.",
  },
  {
    image: "/images/event/event-4.jpg",
    title: "Staff Handoff and Caregiver Briefing",
    slug: "fake-delivery-texts",
    text: "Site staff and caregivers receive the materials needed to keep the work going.",
    date: "Aug 26, 2026",
    location: "Partner site",
    type: "Handoff",
    entrants: "Open",
    duration: "40 minutes",
    category: "Materials, Sustainability",
    detail:
      "The handoff gives partner sites large-print reminders, workshop scripts, app QR access, trusted-contact prompts, and a simple way to keep scam safety visible after the team leaves.",
  },
  {
    image: "/images/event/event-5.jpg",
    title: "Library Scam Safety Pop-Up",
    slug: "payment-safety-lab",
    text: "A shorter public-library session for older adults, caregivers, and families.",
    date: "Sep 02, 2026",
    location: "Public library",
    type: "Community",
    entrants: "Open",
    duration: "45 minutes",
    category: "Library, Outreach",
    detail:
      "This pop-up introduces the project, teaches the main warning signs, helps participants set a trusted contact, and connects families to the app and large-print materials.",
  },
  {
    image: "/images/event/event-6.jpg",
    title: "Family Phrase Setup Night",
    slug: "recovery-steps",
    text: "Families create a private verification phrase before a voice-clone scam occurs.",
    date: "Sep 09, 2026",
    location: "Community partner site",
    type: "Family",
    entrants: "Open",
    duration: "45 minutes",
    category: "AI Voice, Family Plans",
    detail:
      "Families and caregivers set up a phrase that can be used during urgent calls. The session focuses on grandparent scams, AI voice clones, secrecy pressure, and emergency money requests.",
  },
];

export const footerLinks: { link: string; href: string }[] = [
  {
    link: "Local Snapshot",
    href: "/cause/scam-check",
  },
  {
    link: "Workshop Model",
    href: "/cause/call-check",
  },
  {
    link: "Trusted Contacts",
    href: "/cause/trusted-contact",
  },
  {
    link: "App Checks",
    href: "/cause/link-qr-check",
  },
  {
    link: "Recovery Guide",
    href: "/cause/recovery-guide",
  },
  {
    link: "System",
    href: "/cause",
  },
  {
    link: "Workshops",
    href: "/events",
  },
  {
    link: "Scam News",
    href: "/blog",
  },
  {
    link: "Contact",
    href: "/contact",
  },
  {
    link: "Privacy",
    href: "/privacy",
  },
  {
    link: "Terms",
    href: "/terms",
  },
];

export const Reviews: {
  clientImg: string;
  clientName: string;
  review: string;
  post: string;
}[] = [
  {
    clientImg: "/images/testimonial/customer-img-1.jpg",
    clientName: "Family caregiver",
    review:
      "The trusted-contact card makes the plan simple. My parent knows exactly who to call before sending money or sharing a code.",
    post: "Caregiver support",
  },
  {
    clientImg: "/images/testimonial/customer-img-2.jpg",
    clientName: "Senior center volunteer",
    review:
      "The repeated visit matters. People remember more when the lesson comes back with a follow-up check instead of ending after one talk.",
    post: "Anchor site",
  },
  {
    clientImg: "/images/testimonial/customer-img-3.jpg",
    clientName: "Older adult learner",
    review:
      "The examples feel like the real texts and calls I get. It makes me more comfortable hanging up and asking someone first.",
    post: "Practice participant",
  },
  {
    clientImg: "/images/testimonial/customer-img-4.jpg",
    clientName: "Library partner",
    review:
      "Large-print reminders and the app QR make it easier for families to keep using the same steps after the workshop.",
    post: "Sustainability",
  },
];
