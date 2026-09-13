import Link from "next/link";
import Logo from "../Header/Logo";

const groups = [
  {
    title: "Learn",
    links: [["About", "/about"], ["Workshops", "/program"], ["Scam Examples", "/examples"]],
  },
  {
    title: "Resources",
    links: [["Scam Resources", "/resources"], ["App Support", "/support"], ["Accessibility", "/accessibility"]],
  },
  {
    title: "Connect",
    links: [["Partners", "/partners"], ["Contact", "/contact"], ["Email Us", "mailto:projectshieldourelders@gmail.com"]],
  },
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__cta">
        <div><h2>Looking for something you can keep by the phone?</h2><p>Our printable scam-prevention guides are available free.</p></div>
        <Link href="/resources" className="primary-button">View all resources</Link>
      </div>
      <div className="site-footer__main">
      <div className="site-footer__brand">
          <Logo />
          <p>Helping older adults and families in Brevard County recognize scams, verify suspicious requests, and respond safely.</p>
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
