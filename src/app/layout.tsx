import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { NoiseOverlay } from "@/components/noise-overlay";
import { BootScreen } from "@/components/boot-screen";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
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
  themeColor: "#080808",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://apexinnovate.ae"),
  title: {
    default: "Apex Innovate | Creative Technology, XR & AI-Assisted Workflows",
    template: "%s | Apex Innovate",
  },
  description:
    "A UAE-based creative-technology company working across AI-assisted marketing operations, immersive XR experiences, interactive digital products, ecommerce interfaces, media production and technical education.",
  keywords: [
    "creative technology UAE",
    "XR Dubai",
    "spatial computing",
    "interactive digital products",
    "AI-assisted creative workflows",
    "ecommerce interfaces",
    "technical workshops",
    "Joe Nasr",
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
    title: "Apex Innovate | Creative Technology, XR & AI-Assisted Workflows",
    description:
      "Creative technology, immersive XR, interactive products, ecommerce interfaces, media production and technical education in the UAE.",
    url: "https://apexinnovate.ae/",
    siteName: "Apex Innovate",
    type: "website",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://apexinnovate.ae/#organization",
      name: "Apex Innovate FZE LLC",
      alternateName: "Apex Innovate",
      url: "https://apexinnovate.ae/",
      description:
        "UAE-based creative-technology company working across AI-assisted marketing operations, XR, interactive digital products, ecommerce interfaces, media production and technical education.",
      founder: {
        "@id": "https://joe-nasr-signals.vercel.app/v2/#joe-nasr",
      },
    },
    {
      "@type": "Person",
      "@id": "https://joe-nasr-signals.vercel.app/v2/#joe-nasr",
      name: "Joe Nasr",
      alternateName: ["Joe Ribal Nasr", "Joseph Ribal Nasr"],
      url: "https://joe-nasr-signals.vercel.app/v2/",
      jobTitle: "Creative Technologist",
      affiliation: {
        "@id": "https://apexinnovate.ae/#organization",
      },
      sameAs: [
        "https://github.com/Joenasriani",
        "https://www.linkedin.com/in/joenasrprofile",
      ],
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
        <BootScreen />
        {children}
        <NoiseOverlay />
      </body>
    </html>
  );
}
