type PageHeroProps = {
  title: string;
  intro: string;
};

export default function PageHero({ title, intro }: PageHeroProps) {
  return (
    <section className="page-hero">
      <div className="page-hero__copy">
        <h1>{title}</h1>
        <p>{intro}</p>
      </div>
      <div className="page-hero__visual" aria-hidden="true">
        <div className="page-signal page-signal--one"><i />Unknown request</div>
        <div className="page-signal page-signal--two"><i />Pause before acting</div>
        <div className="page-signal page-signal--three"><i />Check another way</div>
        <div className="page-hero__orb"><span>✓</span></div>
      </div>
    </section>
  );
}
