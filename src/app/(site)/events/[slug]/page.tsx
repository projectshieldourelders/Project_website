import EventDetail from "@/components/Events/EventDetail/EventDetail";
import { Eventdata } from "@/app/api/data";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Workshop Detail",
};

export function generateStaticParams() {
    return Eventdata.map((item) => ({ slug: item.slug }));
}

const Page = () => {
    return (
        <>
            <EventDetail/>
        </>
    )
}

export default Page;
