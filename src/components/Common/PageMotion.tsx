"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

const PageMotion = () => {
  const pathname = usePathname();

  useEffect(() => {
    const sections = Array.from(
      document.querySelectorAll<HTMLElement>("#main-content main > section > div")
    );
    const reduceMotion =
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      document.documentElement.dataset.motion === "reduce";

    sections.forEach((section) => section.classList.add("site-reveal"));

    if (reduceMotion) {
      sections.forEach((section) => section.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -8%", threshold: 0.08 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [pathname]);

  return null;
};

export default PageMotion;
