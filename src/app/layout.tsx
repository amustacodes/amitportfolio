import type { Metadata } from "next";
import { Orbitron, Space_Grotesk } from "next/font/google";
import "./globals.css";

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Amit Neupane | Premium Data Scientist Portfolio",
  description:
    "Explore the personal portfolio of Amit Neupane, a seasoned Data Scientist and mentor with 5+ years of teaching experience. Showcasing expertise in machine learning, analytics, and turning complex data into impactful insights.",
  keywords: [
    "Amit Neupane",
    "Data Scientist",
    "Machine Learning Portfolio",
    "Python",
    "SQL",
    "Data Scientist Teacher",
    "Mentoring",
    "Data Science Research",
  ],
  authors: [{ name: "Amit Neupane" }],
  openGraph: {
    title: "Amit Neupane | Premium Data Scientist Portfolio",
    description:
      "Explore the personal portfolio of Amit Neupane, a seasoned Data Scientist and mentor with 5+ years of teaching experience. Showcasing expertise in machine learning, analytics, and turning complex data into impactful insights.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${orbitron.variable} ${spaceGrotesk.variable} scroll-smooth`}
    >
      <body className="bg-dark-bg text-slate-100 antialiased selection:bg-neon-purple/40 selection:text-white font-sans">
        {children}
      </body>
    </html>
  );
}
