import { Metadata } from "next";
import MinimalHome from "@/components/Home/MinimalHome";

export const metadata: Metadata = {
  title: "Shield Our Elders",
  description:
    "Partner with Shield Our Elders to bring practical, repeated scam-prevention workshops and tools to older adults in Brevard County.",
};

export default function Home() {
  return <MinimalHome />;
}
