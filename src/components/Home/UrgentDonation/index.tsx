"use client"

import DonationFormContext from "@/app/context/donationContext";
import { assetPath } from "@/utils/assets";
import Link from "next/link"
import { useContext } from "react";

const UrgentDonation = () => {
    const donationInfo = useContext(DonationFormContext);
    return (
        <section
            className="bg-cover bg-center sm:py-52 lg:py-20 py-16 bg-no-repeat"
            style={{ backgroundImage: `url(${assetPath("/images/background/donate-banner.jpg")})` }}
        >
            <div className="container mx-auto lg:max-w-(--breakpoint-xl) px-4">
                <div className="bg-white dark:bg-dark max-w-xl w-full px-10 py-14 rounded-lg text-center mx-auto" data-aos="fade-right">
                    <h3 className="sm:text-3xl text-lg font-medium mb-5">
                        Scam pressure happening right now?
                    </h3>
                    <p className="text-dustGray dark:text-white/85 sm:text-base text-sm mb-7">
                    Stop the conversation, avoid links, do not send money, and verify with a trusted contact or official number.
                    </p>
                    <button onClick={() => donationInfo?.setIsDonationOpen(true)} className="text-white text-base bg-primary px-7 py-4 border font-semibold border-primary hover:border-primary hover:bg-transparent hover:text-primary rounded-md cursor-pointer">
                        Get help planning
                    </button>
                </div>
            </div>
        </section>
    )
}

export default UrgentDonation;
