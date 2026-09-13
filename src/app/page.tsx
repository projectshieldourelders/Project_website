import { Metadata } from "next";
import MinimalHome from '@/components/Home/MinimalHome';

export const metadata: Metadata = {
  title: "Shield Our Elders",
  description: "Brevard County scam-prevention workshops and practical resources for older adults, families, and community organizations.",
};

export default function Home() {
  return <MinimalHome />;
}
