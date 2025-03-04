import React from 'react'
import type { Metadata } from 'next/types'
import Privacy from '@/components/privacy/Privacy'
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Privacy Policy | Sakina App",
  description:
    "Read the Privacy Policy for Sakina App. Learn how we handle your data securely while providing a peaceful Islamic experience with Quran and Dhikr.",
  keywords: [
    "privacy policy",
    "data security",
    "Islamic app privacy",
    "Muslim app data protection",
    "Quran app privacy",
    "Sakina App privacy",
  ],
  authors: [{ name: siteConfig.author, url: siteConfig.url }],
  creator: siteConfig.author,
  publisher: siteConfig.author,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(siteConfig.url),
  alternates: {
    canonical: `${siteConfig.url}/privacy`,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: `${siteConfig.url}/privacy`,
    title: "Privacy Policy | Sakina App",
    description:
      "Read the Privacy Policy for Sakina App. Learn how we handle your data securely while providing a peaceful Islamic experience with Quran and Dhikr.",
    siteName: siteConfig.name,
    images: [
      {
        url: `${siteConfig.url}/opengraph-image.svg`,
        width: 1200,
        height: 630,
        alt: "Sakina App Privacy Policy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy | Sakina App",
    description:
      "Read the Privacy Policy for Sakina App. Learn how we handle your data securely while providing a peaceful Islamic experience with Quran and Dhikr.",
    creator: "@najibabdi7",
    images: [`${siteConfig.url}/opengraph-image.svg`],
  },
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

const page = () => {
  return (
    <Privacy />
  )
}

export default page