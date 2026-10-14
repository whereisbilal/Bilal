import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@/app/globals.css";
import Header from "./Components/Navbar/Header/header";
import Footer from "./Components/Footer/Footer2";

// import Particles from "./Components/Home/Particles";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("http://localhost:3000"),
  title: "Bilal",
  description: "Portfolio of Bilal",

  icons: {
    icon: "/logo3.png",
    apple: "/apple-touch-icon.png",
    other: [
      { rel: "icon", url: "/favicon-32x32.png", sizes: "32x32" },
      { rel: "icon", url: "/favicon-16x16.png", sizes: "16x16" },
    ],
  },

  openGraph: {
    title: "Muhammad Bilal - Frontend Developer",
    description: "Portfolio of Muhammad Bilal",
    url: "https://whereisbilal.vercel.app",
    siteName: "Muhammad Bilal Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Muhammad Bilal - Frontend Developer",
    description: "Portfolio of Muhammad Bilal - Full Stack Developer",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#FFFFEB] text-[#000000]`}
      >
        {/* Optional Background Effects */}
        {/* <Particles /> */}
        <div className="bg-white min-h-screen text-gray-700 antialiased font-mono">
          <div className="max-w-[55.5rem] px-6 mx-auto text-gray-500">
            <Header />
            {children}
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}