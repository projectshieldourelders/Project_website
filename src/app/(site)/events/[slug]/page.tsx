import EventDetail from "@/components/Events/EventDetail/EventDetail";
import { Metadata } from "next";
export const metadata: Metadata = {
    title: "Workshop Detail",
};

const Page = () => {
    return (
        <>
            <EventDetail/>
        </>
    )
}

export default Page;
