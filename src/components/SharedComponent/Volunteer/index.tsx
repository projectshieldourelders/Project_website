"use client"

import DonationFormContext from "@/app/context/donationContext";
import { useContext } from "react";

const Volunteer = () => {
    const donationInfo = useContext(DonationFormContext);
    return (
        <section className="lg:py-28 py-16 bg-[url('/images/background/volunteer-bg.jpg')] bg-no-repeat bg-cover overflow-hidden">
            <div className="container mx-auto lg:max-w-(--breakpoint-xl) px-4">
                <div className="text-center">
                    <h2 className="text-3xl font-semibold text-white mb-6">
                        Bring Shield Our Elders to an anchor site
                    </h2>
                    <p className="text-base text-white lg:max-w-60% mx-auto mb-6">
                    Host a baseline check, full workshop, follow-up retention visit, and staff handoff for older adults in your community.
                    </p>
                    <div className="flex justify-center ">
                        <button onClick={() => donationInfo?.setIsDonationOpen(true)} className="text-white text-base bg-error px-7 py-4 border font-semibold border-error hover:border-error hover:bg-transparent hover:text-error rounded-md cursor-pointer">
                            Request visit
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Volunteer;
