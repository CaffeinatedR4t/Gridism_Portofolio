import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import FloatingLogo from "@/components/FloatingLogo";
import SmoothScroll from "@/components/SmoothScroll";
import FooterSection from "@/components/sections/FooterSection"; 

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gridism | Digital Creative Agency",
  description: "Human Centric Approach. Structure with Purpose. Commitment to Crafting.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className} min-h-screen w-full`}
        suppressHydrationWarning
      >
        <SmoothScroll>
          <Navbar />
          <FloatingLogo />
          <main className="w-full">{children}</main>
        </SmoothScroll>
      </body>
    </html>
  );
}