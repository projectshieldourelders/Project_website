import CauseDetail from "@/components/Home/Causes/CauseDetail";
import { CauseData } from "@/app/api/data";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "System Detail",
};

export function generateStaticParams() {
    return CauseData.map((item) => ({ slug: item.slug }));
}

const Page = () => {
    return (
        <>
            <CauseDetail/>
        </>
    )
}

export default Page;
