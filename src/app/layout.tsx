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
  title: {
    default: "APEX INNOVATE LLC | AI ACADEMY & STUDIO",
    template: "%s | APEX INNOVATE LLC",
  },
  description:
    "UAE-Based AI Systems for Enterprise Transformation, Creative Operations, and Immersive Experiences.",
  keywords: [
    "AI",
    "Dubai",
    "UAE",
    "AI Academy",
    "AI Studio",
    "VR",
    "AR",
    "Robotics",
    "Machine Learning",
  ],
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: [
      { url: "/apple-icon.svg", type: "image/svg+xml" },
    ],
  },
  openGraph: {
    title: "APEX INNOVATE LLC | AI ACADEMY & STUDIO",
    description:
      "UAE-Based AI Systems for Enterprise Transformation, Creative Operations, and Immersive Experiences.",
    type: "website",
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
        <BootScreen />
        {children}
        <NoiseOverlay />
      </body>
    </html>
  );
}
