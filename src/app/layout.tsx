import { Archivo, Atkinson_Hyperlegible } from "next/font/google";
import "./globals.css";
import NextTopLoader from "nextjs-toploader";
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

const displayFont = Archivo({
  weight: ["600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const metadata = {
  title: {
    default: "Shield Our Elders",
    template: "%s | Shield Our Elders",
  },
  description: "In-person scam-safety workshops for older adults and families in Brevard County, Florida.",
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
        <a href="#main-content" className="skip-link">Skip to main content</a>
        <NextTopLoader
          color="#2f756b"
          initialPosition={0.12}
          crawlSpeed={260}
          height={4}
          showSpinner={false}
          easing="ease"
          speed={220}
          shadow={false}
          zIndex={1600}
          showForHashAnchor={false}
        />
        <Header />
        <PageMotion />
        <div id="main-content">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
