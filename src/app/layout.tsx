import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { companyPositioning } from "@/data/config";
import {
  HOME_TITLE,
  SITE_NAME,
  SITE_URL,
  SOCIAL_IMAGE,
  jsonLd,
  organizationNode,
  websiteNode,
} from "@/lib/seo";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "900"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

// No maximumScale / userScalable: visitors must be able to pinch-zoom (WCAG 1.4.4).
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#f8f8f5",
};

const companyDescription = companyPositioning.description;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: HOME_TITLE,
    template: `%s | ${SITE_NAME}`,
  },
  description: companyDescription,
  keywords: [
    "Apex Innovate FZE LLC",
    "Apex Innovate UAE",
    "Ajman NuVentures Centre Free Zone",
    "RoboMarket",
    "IdeaVent",
    "Visual Framework",
    "e-commerce",
    "artificial intelligence development",
    "software development",
    "social media marketing",
    "digital content",
    "AI research and innovation consultancy",
    "digital platforms",
    "business ventures",
    "robotics marketplace",
    "digital event ideation",
    "visual thinking",
  ],
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  publisher: "Apex Innovate FZE LLC",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
    apple: [{ url: "/apple-icon.svg" }],
  },
  openGraph: {
    title: HOME_TITLE,
    description: companyDescription,
    url: `${SITE_URL}/`,
    siteName: SITE_NAME,
    type: "website",
    images: [SOCIAL_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: HOME_TITLE,
    description: companyDescription,
    images: [{ url: SOCIAL_IMAGE.url, alt: SOCIAL_IMAGE.alt }],
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
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: jsonLd([organizationNode, websiteNode]) }}
        />
        {children}
      </body>
    </html>
  );
}
