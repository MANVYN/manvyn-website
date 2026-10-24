import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://www.manvyn.com";

const defaultTitle =
  "MANVYN Blog | Web Development, Technology & Insights";

const defaultDescription =
  "Explore insights on web development, React, Next.js, e-commerce, software engineering, and digital experiences from MANVYN.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: defaultTitle,
    template: "%s | MANVYN Blog",
  },

  description: defaultDescription,

  applicationName: "MANVYN",

  alternates: {
    canonical: "/blog",
  },

  openGraph: {
    type: "website",
    url: "/blog",
    siteName: "MANVYN",
    title: defaultTitle,
    description: defaultDescription,
    images: [
      {
        url: "/images/manvyn-logo.png",
        alt: "MANVYN",
      },
    ],
  },

  twitter: {
    card: "summary",
    title: defaultTitle,
    description: defaultDescription,
    images: ["/images/manvyn-logo.png"],
  },

  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
} 