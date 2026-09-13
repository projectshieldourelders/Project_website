import Image from "next/image";
import Link from "next/link";
import { assetPath } from "@/utils/assets";

export default function HomeHero() {
  return (
    <section className="home-hero">
      <div className="home-hero__copy">
        <h1>A simple way to deal with suspicious calls and messages.</h1>
        <p>Shield Our Elders helps older adults recognize scams, double-check suspicious requests, and know what to do before sending money or sharing personal information.</p>
        <div className="home-hero__actions">
          <Link href="/program" className="primary-button">See the workshop</Link>
          <Link href="/resources" className="secondary-button">Get help now</Link>
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
