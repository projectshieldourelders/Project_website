import HeroSub from "@/components/SharedComponent/HeroSub";
import EventList from "@/components/Events/EventList";
import Volunteer from "@/components/SharedComponent/Volunteer";
import { Metadata } from "next";
export const metadata: Metadata = {
    title: "Workshops",
};

const Page = () => {
    return (
        <>
            <HeroSub
                title="Workshops"
            />
            <EventList />
            <Volunteer />
        </>
    )
}

export default Page;
