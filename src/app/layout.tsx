import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/Components/Section/Header/Header";
import Footer from "@/Components/Section/Footer/Footer";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const clashdisplay = localFont({
  src: [
    {
      path: "../assets/fonts/ClashDisplay-Light.ttf",
      weight: "300",
    },
    {
      path: "../assets/fonts/ClashDisplay-Regular.ttf",
      weight: "400",
    },
    {
      path: "../assets/fonts/ClashDisplay-Medium.ttf",
      weight: "500",
    },
    {
      path: "../assets/fonts/ClashDisplay-Semibold.ttf",
      weight: "600",
    },
    {
      path: "../assets/fonts/ClashDisplay-Bold.ttf",
      weight: "700",
    },
  ],
  variable: "--font-clashdisplay",
});

export const metadata: Metadata = {
  title: "Monks Wizard",
  description: "Digital Agency",
};

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
      <body
        className={`${outfit.variable} ${clashdisplay.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
