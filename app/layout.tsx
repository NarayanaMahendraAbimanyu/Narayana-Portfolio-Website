import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { EB_Garamond } from "next/font/google";
import "./globals.css";
import SmoothScroll from "./components/SmoothScrolling";
import ScrollRuler from "./components/ScrollRuler";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Narayana Mahendra Abimanyu Portfolio",
  description: "Front End Developer & Web Designer Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${poppins.variable}`}>
      <head>
        <link href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css" rel="stylesheet" />
      </head>
      <body className={`${poppins.className} antialiased`}>
        <ScrollRuler />
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}