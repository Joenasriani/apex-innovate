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

const companyDescription =
  "A UAE-based creative-technology company focused on interactive digital experiences, XR, AI-assisted creative workflows, rapid prototyping, media production and professional training.";

export const metadata: Metadata = {
  metadataBase: new URL("https://apexinnovate.ae"),
  title: {
    default: "Apex Innovate FZE LLC | Creative Technology & XR",
    template: "%s | Apex Innovate",
  },
  description: companyDescription,
  keywords: [
    "Apex Innovate FZE LLC",
    "Apex Innovate UAE",
    "creative technology UAE",
    "interactive prototyping UAE",
    "XR UAE",
    "VR AR UAE",
    "AI-assisted creative workflows",
    "interactive digital experiences",
    "media production UAE",
    "creative technology training",
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
    title: "Apex Innovate FZE LLC | Creative Technology & XR",
    description: companyDescription,
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
      name: "Apex Innovate",
      legalName: "Apex Innovate FZE LLC",
      alternateName: "Apex Innovate FZE LLC",
      url: "https://apexinnovate.ae/",
      description: companyDescription,
      areaServed: [
        { "@type": "Country", name: "United Arab Emirates" },
        { "@type": "Place", name: "Gulf Cooperation Council" },
      ],
      knowsAbout: [
        "Creative technology",
        "Interactive prototyping",
        "XR",
        "VR",
        "AR",
        "AI-assisted creative workflows",
        "Interactive digital experiences",
        "Media production",
        "Professional training",
      ],
      founder: {
        "@id": "https://joe-nasr-signals.vercel.app/#joe-nasr",
      },
    },
    {
      "@type": "Person",
      "@id": "https://joe-nasr-signals.vercel.app/#joe-nasr",
      name: "Joe Nasr",
      alternateName: ["Joe Ribal Nasr", "Joseph Ribal Nasr"],
      url: "https://joe-nasr-signals.vercel.app/",
      jobTitle: "Creative Director",
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
