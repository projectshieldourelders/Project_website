import { Atkinson_Hyperlegible, Source_Serif_4 } from "next/font/google";
import "./globals.css";
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import PageMotion from "@/components/Common/PageMotion";
import { assetPath } from "@/utils/assets";

const bodyFont = Atkinson_Hyperlegible({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const displayFont = Source_Serif_4({
  weight: ["500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ??
      "https://shield-our-elders.peithiv.chatgpt.site",
  ),
  title: {
    default: "Shield Our Elders",
    template: "%s | Shield Our Elders",
  },
  description:
    "Student-led scam-defense workshops and practical tools for adults 60+ in Brevard County, Florida.",
  openGraph: {
    title: "Shield Our Elders",
    description: "Pause. Verify. Protect. Practical scam defense for older adults and their communities.",
    images: [{ url: "/og.png", width: 1733, height: 908 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shield Our Elders",
    description: "Pause. Verify. Protect. Practical scam defense for older adults and their communities.",
    images: ["/og.png"],
  },
  icons: {
    icon: assetPath("/images/app-icon.png"),
    apple: assetPath("/images/app-icon.png"),
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${bodyFont.variable} ${displayFont.variable}`}>
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <Header />
        <PageMotion />
        <div id="main-content">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
