import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "../components/Sidebar";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Netflix Clone - Last Work",
  description: "Pixel-perfect visual clone (mock data)",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full">
        <Sidebar />
        <div style={{ marginLeft: 64 }} className="min-h-screen">
          {children}
        </div>
      </body>
    </html>
  );
}
