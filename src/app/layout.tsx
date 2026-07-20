import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://projectshieldourelders.org"),
  title: "Shield Our Elders | Scam safety for older adults",
  description:
    "A simple app that helps older adults slow down, check suspicious calls and messages, and ask someone trusted before money leaves their hands.",
  icons: {
    icon: "/images/app/icon.png",
    apple: "/images/app/icon.png",
  },
  openGraph: {
    title: "Shield Our Elders",
    description:
      "Scam safety for older adults, families, caregivers, libraries, and senior centers.",
    type: "website",
    images: ["/images/app/app-home.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={bricolage.className}>{children}</body>
    </html>
  );
}
