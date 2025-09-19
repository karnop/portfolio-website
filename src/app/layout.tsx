import type { Metadata } from "next";
import { Inter, Lora, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-ibm-plex-mono",
});

export const metadata: Metadata = {
  title: "Manav Sanger | AI Engineer & SaaS Founder",
  description:
    "The personal portfolio of Manav Sanger, showcasing projects in AI, machine learning, and full-stack web development.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${inter.variable} ${lora.variable} ${ibmPlexMono.variable} bg-cream font-sans text-charcoal antialiased`}
      >
        <Navigation />
        {children}
      </body>
    </html>
  );
}
