import Link from "next/link";

const Volunteer = () => (
  <section className="site-ink py-20 sm:py-28">
    <div className="mx-auto grid max-w-[92rem] gap-8 px-5 sm:px-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end lg:px-10">
      <div className="max-w-3xl">
        <h2 className="font-display text-5xl leading-none sm:text-6xl">Make room for a useful conversation.</h2>
        <p className="mt-6 text-lg leading-8 text-white/75 sm:text-xl">
          We can shape a session around the scam concerns your members, residents, patients, clients, or families are already bringing up.
        </p>
      </div>
      <Link href="/contact" className="action-button action-button--primary min-h-14 justify-center px-7 text-base font-bold">
        Ask about a workshop
      </Link>
    </div>
  </section>
);

export default Volunteer;
