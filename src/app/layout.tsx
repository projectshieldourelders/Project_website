import "./globals.css";
import NextTopLoader from "nextjs-toploader";
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import { assetPath } from "@/utils/assets";

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
      <body>
        <a href="#main-content" className="skip-link">Skip to main content</a>
        <NextTopLoader
          color="#176d5b"
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
        <div id="main-content">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
