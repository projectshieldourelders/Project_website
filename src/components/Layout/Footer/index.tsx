import Link from "next/link";
import Logo from "../Header/Logo";

const footerLinks = [
  { label: "System", href: "/cause" },
  { label: "Workshops", href: "/events" },
  { label: "Contact", href: "/contact" },
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
];

const Footer = () => {
  return (
    <footer className="border-t border-border bg-white py-10 dark:border-dark_border dark:bg-dark">
      <div className="container mx-auto px-4 md:max-w-(--breakpoint-md) lg:max-w-(--breakpoint-xl)">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="max-w-md">
            <Logo />
            <p className="mt-5 text-base leading-7 text-dustGray dark:text-white/85">
              A student-led program helping older adults slow down, verify urgent claims, and ask someone trusted before acting.
            </p>
          </div>

          <div className="flex flex-col gap-5 md:items-end">
            <nav className="flex flex-wrap gap-x-6 gap-y-3">
              {footerLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-base font-semibold text-midnight_text hover:text-primary dark:text-white dark:hover:text-primary"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <Link
              href="mailto:projectshieldourelders@gmail.com"
              className="text-base text-dustGray hover:text-primary dark:text-white/85 dark:hover:text-primary"
            >
              projectshieldourelders@gmail.com
            </Link>
          </div>
        </div>

        <p className="mt-10 border-t border-border pt-6 text-sm text-dustGray dark:border-dark_border dark:text-white/75">
          © Shield Our Elders. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
