import type { Metadata, Viewport } from "next";
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
      <body className="bg-background text-text font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
