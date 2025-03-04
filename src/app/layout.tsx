import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import { siteConfig } from "@/config/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: siteConfig.name,
  description: "Relate your emotions to the Quran and Hadith.",
  keywords:
    "emotions, quran, hadith, islam, muslim, mental health, therapy, guidance, self-care, self-help, self-improvement, self-awareness, self-compassion, self-acceptance, self-love, self-worth, self-control",
  openGraph: {
    title: "Sakina",
    description: "Relate your emotions to the Quran and Hadith.",
    type: "website",
    siteName: "Sakina",
    url: "https://Sakinaapp.com",

    // images: [
    //   {
    //     url: "https://Sakinaapp.com/img5.jpg",
    //     width: 500,
    //     height: 500,
    //     alt: "Sakina",
    //   },
    // ],
  },
  authors: [
    {
      name: "Sakina App",
      url: "https://Sakinaapp.com",
    },
  ],
  creator: "Sakina App",
  publisher: "Sakina App",
  formatDetection: {
    email: true,
    telephone: true,
    address: true,
  },
  twitter: {
    card: "summary_large_image",
    title: "Sakina App",
    description: "Relate your emotions to the Quran and Hadith.",
    images: [`/opengraph-image.svg`],
    creator: "@Sakinaapp",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: `/site.webmanifest`,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
