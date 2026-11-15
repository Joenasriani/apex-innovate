import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { companyPositioning } from "@/data/config";

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

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  viewportFit: "cover",
  themeColor: "#f8f8f5",
};

const companyDescription = companyPositioning.description;

export const metadata: Metadata = {
  metadataBase: new URL("https://apexinnovate.ae"),
  title: {
    default: "Apex Innovate FZE LLC | Projects & Digital Ventures",
    template: "%s | Apex Innovate",
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
    "marketing management",
    "digital platforms",
    "business ventures",
    "robotics marketplace",
    "digital event ideation",
    "visual thinking",
  ],
  authors: [{ name: "Apex Innovate" }],
  creator: "Apex Innovate",
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
    title: "Apex Innovate FZE LLC | Projects & Digital Ventures",
    description: companyDescription,
    url: "https://apexinnovate.ae/",
    siteName: "Apex Innovate",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Apex Innovate FZE LLC | Projects & Digital Ventures",
    description: companyDescription,
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://apexinnovate.ae/#organization",
      name: "Apex Innovate",
      legalName: "Apex Innovate FZE LLC",
      alternateName: "Apex Innovate FZE LLC",
      url: "https://apexinnovate.ae/",
      description: companyDescription,
      address: { "@type": "PostalAddress", addressLocality: "Ajman", addressCountry: "AE" },
      areaServed: [
        { "@type": "Country", name: "United Arab Emirates" },
        { "@type": "Place", name: "Gulf Cooperation Council" },
      ],
      knowsAbout: ["E-commerce", "Marketing management", "Digital platforms", "Business development", "Digital ventures", "Robotics marketplaces", "Event ideation", "Visual thinking"],
    },

  ],
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        {children}
      </body>
    </html>
  );
}
