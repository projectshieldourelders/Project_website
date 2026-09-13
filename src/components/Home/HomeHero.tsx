import Link from "next/link";

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

      <div className="hero-console" aria-label="Example suspicious call review">
        <div className="hero-console__header">
          <span>Unknown caller</span>
          <span className="hero-console__live"><i />Call review</span>
        </div>
        <div className="hero-console__body">
          <div className="hero-console__caller">
            <span className="hero-console__avatar">?</span>
            <div><strong>Unknown caller</strong><small>“Your account will close today.”</small></div>
          </div>
          <div className="hero-console__checks">
            <span><i>1</i>You weren’t expecting the call</span>
            <span><i>2</i>They want you to act immediately</span>
            <span><i>3</i>They ask for a private code</span>
          </div>
          <div className="hero-console__result"><span>What to do</span><strong>Hang up and call the bank using the number printed on your card.</strong></div>
        </div>
        <span className="hero-console__scan" aria-hidden="true" />
      </div>
    </section>
  );
}
