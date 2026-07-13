import type { Metadata, Viewport } from "next";
import { CustomCursor } from "@/components/custom-cursor";
import "./globals.css";

export const metadata: Metadata = {
  title: "Titan Fitness Club | Luxury Performance Coaching",
  description:
    "Transform your body and mind with world-class luxury fitness coaching. Elite personal training, nutrition guidance, and performance optimization.",
  keywords:
    "fitness coaching, luxury gym, personal trainer, performance coaching, transformation",
  openGraph: {
    title: "Titan Fitness Club",
    description: "World-Class Luxury Fitness Coaching",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: "#050505",
  colorScheme: "dark",
  userScalable: false,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body className="bg-background text-text font-sans antialiased cursor-none">
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
