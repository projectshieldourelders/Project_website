import Link from "next/link";

type LogoProps = { inverted?: boolean };

export default function Logo({ inverted = false }: LogoProps) {
  return (
    <Link href="/" className={`site-logo ${inverted ? "site-logo--inverted" : ""}`} aria-label="Shield Our Elders home">
      <span className="site-logo__mark" aria-hidden="true"><i /></span>
      <span>Shield Our Elders</span>
    </Link>
  );
}
