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
  title: "Certificate IV in Youth Work - Patricia Wambui Kasivu",
  description: "This is the official certificate and Record of Results document for Patricia Wambui Kasivu, who has successfully completed the Certificate IV in Youth Work (CHC40421) with Luvium Pty Ltd. The certificate was issued on the 1st of March 2024, and the certificate number is Q 7747/595. You can view the official certificate PDF document by clicking the link provided.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
