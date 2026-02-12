import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kayo Detox | Ayurvedic Detox Expert",
  description:
    "Kayo Detox, an Ayurvedic detox expert, delivers healthcare-focused cleansing solutions to restore balance, enhance vitality, and promote natural holistic wellness.",
  icons: {
    icon: "https://kayodetox.com/cdn/shop/files/WhatsApp_Image_2025-11-05_at_5.47.54_PM.jpg?height=60&v=1765022191",
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
        {children}
      </body>
    </html>
  );
}
