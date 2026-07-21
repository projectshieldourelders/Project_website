import CauseDetail from "@/components/Home/Causes/CauseDetail";
import { Metadata } from "next";
export const metadata: Metadata = {
    title: "Feature Detail",
};

const Page = () => {
    return (
        <>
            <CauseDetail/>
        </>
    )
}

export default Page;
