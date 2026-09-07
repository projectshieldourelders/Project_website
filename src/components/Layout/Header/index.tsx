"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import AccessibilityControls from "@/components/Common/AccessibilityControls";
import Logo from "./Logo";

const navigation = [
  { label: "About", href: "/about" },
  { label: "Program", href: "/program" },
  { label: "Resources", href: "/resources" },
  { label: "Partners", href: "/partners" },
];

const programLinks = [
  {
    title: "Something feels wrong now",
    detail: "Quick steps for a call, message, or payment request.",
    href: "/#urgent",
  },
  {
    title: "Suspicious calls",
    detail: "Pressure, impersonation, and what to do before you answer again.",
    href: "/examples#calls",
  },
  {
    title: "Messages and links",
    detail: "How to check a text, email, or link without opening it.",
    href: "/examples#messages",
  },
  {
    title: "Recovery after a payment",
    detail: "The first calls to make after money or information was sent.",
    href: "/resources#recovery",
  },
  {
    title: "Community workshops",
    detail: "A practical session for residents, families, and staff.",
    href: "/program",
  },
  {
    title: "For partners",
    detail: "Ways to bring a session to a local group or team.",
    href: "/partners",
  },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [programOpen, setProgramOpen] = useState(false);
  const pathname = usePathname();
  const currentPath = pathname.replace(/\/$/, "") || "/";

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        setProgramOpen(false);
      }
    };
    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    setProgramOpen(false);
  }, [pathname]);

  return (
    <header className="site-header fixed inset-x-0 top-0 z-50">
      <div className="mx-auto flex h-[82px] max-w-[92rem] items-center justify-between px-5 sm:px-8 lg:px-10">
        <Logo />

        <nav
          className="hidden items-center gap-6 xl:flex"
          aria-label="Primary navigation"
        >
          <Link
            href="/about"
            aria-current={currentPath === "/about" ? "page" : undefined}
            className="nav-link text-base font-bold text-[#183b36]"
          >
            About
          </Link>
          <button
            type="button"
            className="nav-link header-program-button text-base font-bold text-[#183b36]"
            aria-expanded={programOpen}
            aria-controls="program-menu"
            onClick={() => setProgramOpen(true)}
            onMouseEnter={() => setProgramOpen(true)}
            onFocus={() => setProgramOpen(true)}
          >
            How we help
          </button>
          {navigation.slice(2).map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={currentPath === item.href ? "page" : undefined}
              className="nav-link text-base font-bold text-[#183b36]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <div className="hidden lg:block">
            <AccessibilityControls />
          </div>
          <Link
            href="/contact"
            aria-current={currentPath === "/contact" ? "page" : undefined}
            className="action-button action-button--primary hidden min-h-12 items-center px-6 text-sm font-bold sm:inline-flex"
          >
            Contact us
          </Link>
          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            className="action-button action-button--secondary flex min-h-11 min-w-11 items-center justify-center px-4 text-sm font-bold xl:hidden"
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
          >
            Menu
          </button>
        </div>
      </div>

      <div
        id="program-menu"
        className={`header-program-menu ${programOpen ? "is-open" : ""}`}
        aria-hidden={!programOpen}
      >
        <div className="header-program-menu__inner">
          {programLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              tabIndex={programOpen ? 0 : -1}
              onClick={() => setProgramOpen(false)}
              className="header-program-menu__item"
            >
              <strong>{item.title}</strong>
              <span>{item.detail}</span>
            </Link>
          ))}
        </div>
      </div>

      {menuOpen && (
        <div
          className="fixed inset-0 z-50 bg-[#183b36]/60 xl:hidden"
          onMouseDown={() => setMenuOpen(false)}
        >
          <div
            id="mobile-navigation"
            className="ml-auto flex h-full w-[min(90vw,25rem)] flex-col overflow-y-auto border-l border-[#cbd7cf] bg-[#fbfaf7] p-6"
            onMouseDown={(event) => event.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-5">
              <span className="font-display text-3xl text-[#183b36]">
                Menu
              </span>
              <button
                type="button"
                onClick={() => setMenuOpen(false)}
                className="action-button action-button--secondary min-h-11 px-4 text-sm font-bold"
                aria-label="Close menu"
              >
                Close
              </button>
            </div>
            <nav className="mt-5 flex flex-col" aria-label="Mobile navigation">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={currentPath === item.href ? "page" : undefined}
                  onClick={() => setMenuOpen(false)}
                  className="py-5 font-display text-4xl text-[#183b36]"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <div className="mobile-reading mt-6">
              <AccessibilityControls />
            </div>
            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="action-button action-button--primary mt-auto flex min-h-14 items-center justify-center px-5 text-base font-bold"
            >
              Contact us
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
