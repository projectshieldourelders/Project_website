import DonationFormContext from "@/app/context/donationContext";
import { useContext } from "react";

const FormPart = () => {
    const donationInfo  = useContext(DonationFormContext);
    return (
        <>
            <div className="bg-grey dark:bg-darkmode py-5 px-8 rounded-sm border border-border dark:border-dark_border mb-8 ">
                <p className="mb-0 text-base text-muted dark:text-white/60">
                    <span className="text-midnight_text dark:text-white">Note:</span> This program is for education and safety planning. It is not legal, financial, banking, or emergency advice.
                </p>
            </div>
            <div className="bg-grey dark:bg-darkmode px-8 py-14 rounded-sm border border-border dark:border-dark_border mb-8 ">
                <div className="border border-border dark:border-dark_border py-5 px-10 rounded-md mb-11">
                    <p className="text-sm text-muted dark:text-white/60">
                        Want to bring this program to a workshop site? Send a request and we will follow up.
                    </p>
                </div>
                <form className="">
                    <div className="grid md:grid-cols-2 grid-cols-1 gap-7 mb-7">
                        <div className="flex flex-col">
                            <label htmlFor="Fname" className="text-base text-muted dark:text-white/60 mb-4">First name *</label>
                            <input type="text" id="Fname" placeholder="First name" className="py-5 px-4 border rounded-md border-border dark:focus:border-primary dark:bg-darkmode focus:border-primary focus-visible:outline-hidden dark:border-dark_border text-base" />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="Lname" className="text-base text-muted dark:text-white/60 mb-4">Last name</label>
                            <input type="text" id="Lname" placeholder="Last name" className="py-5 px-4 border rounded-md border-border dark:focus:border-primary dark:bg-darkmode focus:border-primary focus-visible:outline-hidden dark:border-dark_border text-base" />
                        </div>
                    </div>
                    <div className="flex flex-col mb-7">
                        <label htmlFor="Email" className="text-base text-muted dark:text-white/60 mb-4">Email address *</label>
                        <input type="text" id="Email" placeholder="Email address" className="py-5 px-4 border rounded-md border-border dark:focus:border-primary dark:bg-darkmode focus:border-primary focus-visible:outline-hidden dark:border-dark_border text-base" />
                    </div>
                    <div className="flex flex-col mb-7">
                        <label htmlFor="Site" className="text-base text-muted dark:text-white/60 mb-4">Organization or family group</label>
                        <input type="text" id="Site" placeholder="Senior center, library, school, family, caregiver group" className="py-5 px-4 border rounded-md border-border dark:focus:border-primary dark:bg-darkmode focus:border-primary focus-visible:outline-hidden dark:border-dark_border text-base" />
                    </div>
                    <button onClick={(e) => {
                        e.preventDefault();
                        donationInfo?.setIsDonationOpen(true)
                    } } className="text-white text-sm bg-linear-to-r from-primary to-secondary font-semibold border border-transparent py-4 px-7 rounded-md hover:text-primary hover:border-primary hover:from-transparent hover:to-transparent cursor-pointer">Request visit</button>
                </form>
            </div>
        </>
    )
}
export default FormPart;
