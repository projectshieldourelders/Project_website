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

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const currentPath = pathname.replace(/\/$/, "") || "/";

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
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

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b-[3px] border-[#17345c] bg-[#f4f7fb]">
      <div className="mx-auto flex h-[82px] max-w-[92rem] items-center justify-between px-5 sm:px-8 lg:px-10">
        <Logo />

        <nav className="hidden items-center gap-6 xl:flex" aria-label="Primary navigation">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={currentPath === item.href ? "page" : undefined}
              className="doodle-nav text-base font-extrabold text-[#17345c]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <div className="hidden lg:block"><AccessibilityControls /></div>
          <Link
            href="/contact"
            aria-current={currentPath === "/contact" ? "page" : undefined}
            className="doodle-button hidden min-h-12 items-center bg-[#3977f6] px-6 text-sm font-black uppercase text-white sm:inline-flex"
          >
            Work with us
          </Link>
          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            className="doodle-button flex min-h-11 min-w-11 items-center justify-center bg-[#f4f7fb] px-4 text-sm font-black text-[#17345c] xl:hidden"
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
          >
            Menu
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="fixed inset-0 z-50 bg-[#17345c]/60 xl:hidden" onMouseDown={() => setMenuOpen(false)}>
          <div
            id="mobile-navigation"
            className="ml-auto flex h-full w-[min(90vw,25rem)] flex-col overflow-y-auto border-l-[3px] border-[#17345c] bg-[#f4f7fb] p-6"
            onMouseDown={(event) => event.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b-[3px] border-[#17345c] pb-5">
              <span className="font-display text-3xl text-[#17345c]">Come on in</span>
              <button type="button" onClick={() => setMenuOpen(false)} className="doodle-button min-h-11 bg-white px-4 text-sm font-black text-[#17345c]" aria-label="Close menu">
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
                  className="border-b-2 border-[#17345c]/35 py-5 font-display text-4xl text-[#17345c]"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <div className="mobile-reading mt-6"><AccessibilityControls /></div>
            <Link href="/contact" onClick={() => setMenuOpen(false)} className="doodle-button mt-auto flex min-h-14 items-center justify-center bg-[#3977f6] px-5 text-base font-black text-white">
              Work with us
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
