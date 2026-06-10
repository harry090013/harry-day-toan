import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import AppShell from "@/components/layout/AppShell";

const inter = Inter({
  subsets: ["latin", "vietnamese"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Toán Hình Web — Luyện Toán THCS KNTT",
  description: "Học tập và sinh bài tập trắc nghiệm Toán THCS Kết nối tri thức",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className="h-full scroll-smooth">
      <body className={`${inter.variable} font-sans h-full antialiased`}>
        <AppShell>
          {children}
        </AppShell>
      </body>
    </html>
  );
}
