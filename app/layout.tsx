import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";

const montserrat = Montserrat({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | ShortDrama",
    default: "ShortDrama",
  },
  description: "Love the drama? You need The ShortDrama app!",
  icons: {
    icon: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} antialiased`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
