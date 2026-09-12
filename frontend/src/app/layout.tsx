import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Sidebar from "@/components/layout/Sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "LANDSLIDEGUARD AI | Disaster Intelligence",
  description: "AI-powered disaster intelligence platform combining environmental data, 3D geospatial intelligence, explainable risk prediction and real-time alerts.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} h-screen flex flex-col overflow-hidden bg-background text-foreground`}>
        <Header />
        <div className="flex flex-1 overflow-hidden">
          <Sidebar />
          <main className="flex-1 overflow-y-auto relative bg-gray-50/50">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
