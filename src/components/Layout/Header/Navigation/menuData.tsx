import { HeaderItem } from "@/types/menu";

export const headerData: HeaderItem[] = [
  { label: "Home", href: "/" },
  {
    label: "System",
    href: "#",
    submenu: [
      { label: "Full system", href: "/cause" },
      { label: "Local snapshot", href: "/cause/scam-check" },
    ],
  },
  {
    label: "Workshops",
    href: "#",
    submenu: [
      { label: "Workshop sequence", href: "/events" },
      { label: "Baseline session", href: "/events/senior-center-workshop" },
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
