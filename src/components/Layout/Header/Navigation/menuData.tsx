import { HeaderItem } from "@/types/menu";

export const headerData: HeaderItem[] = [
  { label: "Home", href: "/" },
  {
    label: "Features",
    href: "#",
    submenu: [
      { label: "All features", href: "/cause" },
      { label: "Message check", href: "/cause/scam-check" },
    ],
  },
  {
    label: "Workshops",
    href: "#",
    submenu: [
      { label: "Workshop list", href: "/events" },
      { label: "Senior center session", href: "/events/senior-center-workshop" },
    ],
  },
  {
    label: "Scam News",
    href: "#",
    submenu: [
      { label: "All notes", href: "/blog" },
      { label: "Blog details", href: "/blog/blog_1" },
    ],
  },
  { label: "Contact", href: "/contact" },
  { label: "Privacy", href: "/privacy" },
];
