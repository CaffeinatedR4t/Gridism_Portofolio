import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

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
        className={`${inter.className} bg-black text-white`}
        suppressHydrationWarning
      >
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}