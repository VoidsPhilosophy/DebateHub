import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "DebateHub // Nexus of Chaos & Intellect",
  description: "A premium, high-performance platform for elite structured argumentation.",
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth selection:bg-rose-600/40 selection:text-white">
      <head>
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      </head>
      <body className={`${inter.variable} font-sans bg-[#050204] text-slate-100 antialiased min-h-screen overflow-x-hidden relative`}>
        {/* Ambient Dark Chaos Magic Background Energy */}
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
          <div className="absolute top-[-25%] left-[-10%] w-[60vw] h-[60vw] rounded-full bg-gradient-to-br from-crimson-900/15 to-purple-950/20 blur-[140px] animate-pulse duration-[8000ms]" />
          <div className="absolute bottom-[-15%] right-[-5%] w-[50vw] h-[50vw] rounded-full bg-gradient-to-tr from-rose-950/20 to-violet-900/10 blur-[160px] animate-pulse duration-[12000ms]" />
          <div className="absolute top-[40%] left-[35%] w-[30vw] h-[30vw] rounded-full bg-[#ec1d24]/5 blur-[120px] mix-blend-screen" />
        </div>
        
        {/* Core Content Shell */}
        <div className="relative z-10 min-h-screen flex flex-col">
          {children}
        </div>
      </body>
    </html>
  );
}
