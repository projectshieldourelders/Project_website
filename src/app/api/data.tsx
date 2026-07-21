export const menuItems = [
  { name: "Home", href: "/" },
  { name: "Features", href: "/cause" },
  { name: "Workshops", href: "/events" },
  { name: "Scam News", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

export const helpdata: { icon: string; title: string; text: string }[] = [
  {
    icon: "/images/help/help-icon-3.svg",
    title: "Check the message",
    text: "Paste a text, email, link, QR code, screenshot, or voicemail transcript and get a plain-language warning.",
  },
  {
    icon: "/images/help/help-icon-2.svg",
    title: "Ask a trusted person",
    text: "Store family or caregiver contacts so help is one tap away when something feels urgent.",
  },
  {
    icon: "/images/help/help-icon-1.svg",
    title: "Practice before it happens",
    text: "Short lessons and realistic examples help older adults build confidence before the next scam arrives.",
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
    title: "Scam Check for Messages, Emails, and Screenshots",
    slug: "scam-check",
    text: "The main app flow explains why a message looks suspicious instead of just saying yes or no.",
    raised: "AI review",
    goal: "Clear next step",
    tag: "Main Feature",
    date: "Jul 20, 2026"
  },
  {
    image: "/images/causes/cause-2.jpg",
    title: "I Just Got a Call Safety Checklist",
    slug: "call-check",
    text: "Users answer simple questions about money, secrecy, codes, threats, and remote access.",
    raised: "Call prompts",
    goal: "Risk score",
    tag: "Calls",
    date: "Jul 20, 2026"
  },
  {
    image: "/images/causes/cause-3.jpg",
    title: "Trusted Contact and Family Verification Phrase",
    slug: "trusted-contact",
    text: "One tap can call or text a daughter, son, caregiver, or trusted family member.",
    raised: "One tap",
    goal: "Ask first",
    tag: "Family",
    date: "Jul 20, 2026"
  },
  {
    image: "/images/causes/cause-4.jpg",
    title: "Link and QR Code Checker",
    slug: "link-qr-check",
    text: "Paste a link or scan a QR code before opening it, especially for banking, delivery, and toll scams.",
    raised: "Preview",
    goal: "Avoid taps",
    tag: "Links",
    date: "Jul 20, 2026"
  },
  {
    image: "/images/causes/cause-5.jpg",
    title: "Payment Safety Before Money Leaves",
    slug: "payment-safety",
    text: "The app slows down gift card, crypto, wire, Zelle, Cash App, and Venmo pressure.",
    raised: "Payment check",
    goal: "Pause first",
    tag: "Payments",
    date: "Jul 20, 2026"
  },
  {
    image: "/images/causes/cause-6.jpg",
    title: "Voice Clone and Grandparent Scam Warning",
    slug: "voice-clone",
    text: "A simple reminder to use the family phrase before believing urgent family money requests.",
    raised: "Family phrase",
    goal: "Verify voice",
    tag: "AI Voice",
    date: "Jul 20, 2026"
  },
  {
    image: "/images/causes/cause-7.jpg",
    title: "Recovery Guide After a Click or Payment",
    slug: "recovery-guide",
    text: "Clear steps for calling the bank, freezing cards, changing passwords, reporting, and avoiding recovery scams.",
    raised: "Recovery steps",
    goal: "Act quickly",
    tag: "Recovery",
    date: "Jul 20, 2026"
  },
  {
    image: "/images/causes/cause-8.jpg",
    title: "One-Minute Lessons for Common Scam Types",
    slug: "learn",
    text: "Bank scams, romance scams, tech support scams, IRS scams, investment scams, and delivery scams.",
    raised: "Lessons",
    goal: "Confidence",
    tag: "Learn",
    date: "Jul 20, 2026"
  },
  {
    image: "/images/causes/cause-9.jpg",
    title: "Practice Mode With Realistic Examples",
    slug: "practice-mode",
    text: "Users choose safe, suspicious, or scam, then see a short explanation that builds skill over time.",
    raised: "Practice",
    goal: "Score lift",
    tag: "Training",
    date: "Jul 20, 2026"
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
    title: "Senior Center Scam Safety Workshop",
    slug: "senior-center-workshop",
    text: "A short in-person session that teaches the Stop, Check, Ask routine.",
    date: "Aug 05, 2026",
    location: "Brevard County",
    type: "Community",
    entrants: "Open",
    duration: "60 minutes",
    category: "Workshop, Education",
    detail:
      "This workshop walks older adults through real examples of suspicious calls, texts, QR codes, and payment requests. The goal is simple: slow the moment down, check the warning signs, and ask a trusted person before acting.",
  },
  {
    image: "/images/event/event-img-2.jpg",
    title: "Family Verification Phrase Setup Day",
    slug: "family-phrase-day",
    text: "Families create a phrase they can use when voice clone scams sound real.",
    date: "Aug 12, 2026",
    location: "Local library",
    type: "Family",
    entrants: "Open",
    duration: "45 minutes",
    category: "Voice Safety, Families",
    detail:
      "Families and caregivers set up trusted contacts and a private verification phrase. The session focuses on grandparent scams, AI voice scams, and urgent money requests.",
  },
  {
    image: "/images/event/event-img-3.jpg",
    title: "Caregiver App Training Session",
    slug: "caregiver-training",
    text: "Caregivers learn how to help without taking control away from older adults.",
    date: "Aug 19, 2026",
    location: "Community room",
    type: "Training",
    entrants: "Open",
    duration: "50 minutes",
    category: "Caregivers, App Demo",
    detail:
      "This session shows caregivers how to use the app respectfully with older adults: checking suspicious content, storing trusted contacts, and following recovery steps after a scam attempt.",
  },
  {
    image: "/images/event/event-4.jpg",
    title: "Fake Delivery Text Mini Lesson",
    slug: "fake-delivery-texts",
    text: "Learn why package and toll texts are so common and what to do before tapping.",
    date: "Aug 26, 2026",
    location: "Online",
    type: "Mini lesson",
    entrants: "Open",
    duration: "20 minutes",
    category: "Texts, Links",
    detail:
      "A short session focused on delivery, toll, and account-alert links. Participants practice spotting urgency, lookalike domains, and unusual payment requests.",
  },
  {
    image: "/images/event/event-5.jpg",
    title: "Payment Safety Practice Lab",
    slug: "payment-safety-lab",
    text: "Practice slowing down gift card, crypto, wire, and app-payment requests.",
    date: "Sep 02, 2026",
    location: "Senior center",
    type: "Practice",
    entrants: "Open",
    duration: "45 minutes",
    category: "Payments",
    detail:
      "Participants review realistic payment-pressure examples and learn why scammers often push irreversible payment methods.",
  },
  {
    image: "/images/event/event-6.jpg",
    title: "Recovery Steps After a Scam",
    slug: "recovery-steps",
    text: "What to do if someone already clicked, paid, or shared information.",
    date: "Sep 09, 2026",
    location: "Community partner site",
    type: "Recovery",
    entrants: "Open",
    duration: "45 minutes",
    category: "Recovery, Reporting",
    detail:
      "This session covers calling the bank, freezing cards, changing passwords, reporting scams, and avoiding recovery scammers who promise to get money back.",
  },
];

export const footerLinks: { link: string, href: string }[] = [
  {
    link: "Message Check",
    href: "/cause/scam-check"
  },
  {
    link: "Call Check",
    href: "/cause/call-check"
  },
  {
    link: "Trusted Contact",
    href: "/cause/trusted-contact"
  },
  {
    link: "Payment Safety",
    href: "/cause/payment-safety"
  },
  {
    link: "Recovery Guide",
    href: "/cause/recovery-guide"
  },
  {
    link: "Features",
    href: "/cause"
  },
  {
    link: "Workshops",
    href: "/events"
  },
  {
    link: "Scam News",
    href: "/blog"
  },
  {
    link: "Contact",
    href: "/contact"
  },
  {
    link: "Privacy",
    href: "/privacy"
  },
  {
    link: "Terms",
    href: "/terms"
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
    review: "The app gives us a clear way to pause and check before anyone sends money or shares a code.",
    post: "Trusted contact",
  },
  {
    clientImg: "/images/testimonial/customer-img-2.jpg",
    clientName: "Senior center volunteer",
    review: "The biggest win is how simple the steps are. People remember hang up, check, and ask.",
    post: "Community helper",
  },
  {
    clientImg: "/images/testimonial/customer-img-3.jpg",
    clientName: "Older adult learner",
    review: "The examples feel like the real texts and calls I get. It makes me more comfortable saying no.",
    post: "Practice participant",
  },
  {
    clientImg: "/images/testimonial/customer-img-4.jpg",
    clientName: "Library partner",
    review: "Short lessons make it easy to teach without overwhelming people who are already under stress.",
    post: "Workshop host",
  },
];
