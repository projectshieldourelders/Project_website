import { Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import ScrollToTop from '@/components/ScrollToTop';
import Aoscompo from "@/utils/aos";
import { DonationProvider } from "./context/donationContext";
import { ThemeProvider } from "./context/themeContext";
const bricolage = Bricolage_Grotesque({ subsets: ["latin"] });
import NextTopLoader from 'nextjs-toploader';

export const metadata = {
  title: {
    default: "Shield Our Elders",
    template: "%s | Shield Our Elders",
  },
  description: "A scam-safety app and community program for older adults, families, caregivers, libraries, and senior centers.",
  icons: {
    icon: "/images/app-icon.png",
    apple: "/images/app-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={bricolage.className}>
      <NextTopLoader color="#FF4D7E" />
      <DonationProvider>
        <ThemeProvider>
          <Aoscompo>
            <Header />
            
            {children}
            
            <Footer />
          </Aoscompo>
          <ScrollToTop />
        </ThemeProvider>
        </DonationProvider>
      </body>
    </html>
  );
}
