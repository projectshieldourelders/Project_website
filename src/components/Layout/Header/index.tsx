"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import AccessibilityControls from "@/components/Common/AccessibilityControls";
import Logo from "./Logo";

const navigation = [
  { label: "About", href: "/about" },
  { label: "Workshop", href: "/program" },
  { label: "Resources", href: "/resources" },
  { label: "Partners", href: "/partners" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const currentPath = pathname.replace(/\/$/, "") || "/";

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => event.key === "Escape" && setMenuOpen(false);
    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <Logo />
        <nav className="site-nav" aria-label="Primary navigation">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href} aria-current={currentPath === item.href ? "page" : undefined}>{item.label}</Link>
          ))}
        </nav>
        <div className="site-header__actions">
          <div className="site-header__reading"><AccessibilityControls /></div>
          <Link href="/contact" className="header-contact">Work with us</Link>
          <button type="button" className={`menu-trigger${menuOpen ? " is-open" : ""}`} onClick={() => setMenuOpen((open) => !open)} aria-expanded={menuOpen} aria-controls="mobile-navigation" aria-label={menuOpen ? "Close menu" : "Open menu"}>
            <span>Menu</span><i aria-hidden="true" />
          </button>
        </div>
      </div>

      {menuOpen && (
        <div id="mobile-navigation" className="mobile-menu">
          <nav aria-label="Mobile navigation">
            {navigation.map((item) => (
              <Link key={item.href} href={item.href} aria-current={currentPath === item.href ? "page" : undefined} onClick={() => setMenuOpen(false)}>{item.label}</Link>
            ))}
            <Link href="/contact" aria-current={currentPath === "/contact" ? "page" : undefined} onClick={() => setMenuOpen(false)}>Contact</Link>
          </nav>
          <div className="mobile-menu__reading">
            <AccessibilityControls />
          </div>
        </div>
      )}
    </header>
  );
}
