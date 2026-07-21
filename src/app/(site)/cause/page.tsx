import HeroSub from "@/components/SharedComponent/HeroSub";
import CauseList from "@/components/Cause/CauseList";
import Volunteer from "@/components/SharedComponent/Volunteer";
import { Metadata } from "next";
export const metadata: Metadata = {
    title: "The System",
};

const Page = () => {
    return (
        <>
            <HeroSub
                title="The System"
            />
            <CauseList />
            <Volunteer />
        </>
    )
}

export default Page;
