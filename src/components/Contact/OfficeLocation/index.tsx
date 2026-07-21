import React from "react";
import Link from "next/link";

const Location = () => {
  const breadcrumbLinks = [
    { href: "/", text: "Home" },
    { href: "/contact", text: "Contact" },
  ];
  return (
    <>
      <section className="bg-primary lg:py-24 py-16">
        <div className="container mx-auto lg:max-w-(--breakpoint-xl) md:max-w-(--breakpoint-md) px-4">
          <div className="">
            <div className="grid md:grid-cols-6 lg:grid-cols-9 grid-cols-1 gap-7 border-b border-solid border-white/50 pb-11">
              <div className="col-span-3">
                <h2 className="text-white text-[34px] leading-tight font-semibold">Community workshops</h2>
              </div>
              <div className="col-span-3">
                <p className="text-lg text-white font-normal max-w-72">Senior centers, libraries, families, caregiver groups, and classrooms.</p>
              </div>
              <div className="col-span-3">
                <Link href="mailto:projectshieldourelders@gmail.com" className="text-lg text-white hover:text-black font-semibold">projectshieldourelders@gmail.com</Link>
                <Link href="/events" className="text-lg font-semibold text-white hover:text-black flex items-center gap-2 w-fit"><span className="text-white">See:</span>Workshops</Link>
              </div>
            </div>
            <div className="grid md:grid-cols-6 lg:grid-cols-9 grid-cols-1 gap-7 pt-12">
              <div className="col-span-3">
                <h2 className="text-white text-[34px] leading-tight font-bold">App support</h2>
              </div>
              <div className="col-span-3">
                <p className="text-lg text-white font-normal max-w-72">Questions about the app, trusted contacts, model checks, or legal pages.</p>
              </div>
              <div className="col-span-3">
                <Link href="mailto:projectshieldourelders@gmail.com" className="text-lg text-white hover:text-black font-semibold">projectshieldourelders@gmail.com</Link>
                <Link href="/privacy" className="text-lg font-semibold text-white hover:text-black flex items-center gap-2 w-fit"><span className="text-white">Read:</span>Privacy</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Location;
