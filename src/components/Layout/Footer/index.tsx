import Link from "next/link";
import Logo from "../Header/Logo";

const groups = [
  {
    title: "Learn",
    links: [["About", "/about"], ["Workshop", "/program"], ["Scam examples", "/examples"]],
  },
  {
    title: "Get help",
    links: [["Resources", "/resources"], ["App support", "/support"], ["Accessibility", "/accessibility"]],
  },
  {
    title: "Connect",
    links: [["Partners", "/partners"], ["Contact", "/contact"], ["Email us", "mailto:projectshieldourelders@gmail.com"]],
  },
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__cta">
        <h2>Make the next suspicious call easier to handle.</h2>
        <Link href="/resources" className="primary-button">Open the free guides</Link>
      </div>
      <div className="site-footer__main">
        <div className="site-footer__brand">
          <Logo />
          <p>Community scam-safety workshops and practical tools for older adults, families, and the people who serve them.</p>
          <span>Brevard County, Florida</span>
        </div>
        <div className="site-footer__links">
          {groups.map((group) => (
            <div key={group.title}>
              <strong>{group.title}</strong>
              {group.links.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}
            </div>
          ))}
        </div>
      </div>
      <div className="site-footer__legal">
        <span>&copy; {new Date().getFullYear()} Shield Our Elders</span>
        <div><Link href="/privacy">Privacy</Link><Link href="/terms">Terms</Link></div>
      </div>
    </footer>
  );
}
