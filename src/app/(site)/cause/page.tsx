import HeroSub from "@/components/SharedComponent/HeroSub";
import CauseList from "@/components/Cause/CauseList";
import Volunteer from "@/components/SharedComponent/Volunteer";
import { Metadata } from "next";
export const metadata: Metadata = {
    title: "App Features",
};

const Page = () => {
    return (
        <>
            <HeroSub
                title="App Features"
            />
            <CauseList />
            <Volunteer />
        </>
    )
}

export default Page;
