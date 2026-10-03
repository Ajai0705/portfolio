import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "S.JEEVASHREE | AI & Software Developer",
  description: "Portfolio of B. Ajai Hariharan, a Computer Science and Engineering student focused on AI, machine learning and software development.",
  openGraph: {
    title: "B. Ajai Hariharan | AI & Software Developer",
    description: "Portfolio of B. Ajai Hariharan, a Computer Science and Engineering student focused on AI, machine learning and software development.",
    url: "https://ajaihariharan.vercel.app", // Placeholder
    siteName: "Ajai Hariharan Portfolio",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-background text-foreground antialiased`}>
        {/* Fine grid pattern overlay */}
        <div className="fixed inset-0 z-[-1] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        
        {children}
      </body>
    </html>
  );
}
