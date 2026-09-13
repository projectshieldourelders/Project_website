import Image from "next/image";
import Link from "next/link";
import { assetPath } from "@/utils/assets";

export default function HomeHero() {
  return (
    <section className="home-hero">
      <div className="home-hero__copy">
        <h1>Protect yourself from scams before money or information is lost.</h1>
        <p>Shield Our Elders is a Brevard County community program that helps older adults recognize scams, verify suspicious calls and messages, and know what to do when something does not seem right.</p>
        <div className="home-hero__actions">
          <Link href="/program" className="primary-button">See our workshops</Link>
          <Link href="/resources" className="secondary-button">Scam help &amp; resources</Link>
        </div>
      </div>

      <figure className="home-hero__photo">
        <Image
          src={assetPath("/images/photos/workshop-payment-requests.jpg")}
          alt="Shield Our Elders presenters discussing high-risk payment requests during a community workshop"
          width={2200}
          height={1650}
          priority
          sizes="(max-width: 1100px) calc(100vw - 3rem), 48vw"
        />
        <figcaption>A community workshop in Brevard County</figcaption>
      </figure>
    </section>
  );
}
