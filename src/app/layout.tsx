import type { Metadata } from "next";
import { Archivo, Archivo_Black } from "next/font/google";
import "./globals.css";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  display: "swap",
});

const archivoBlack = Archivo_Black({
  variable: "--font-archivo-black",
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://cobautista.github.io"),
  title: "Cob Bautista | n8n Automation Specialist",
  description:
    "Building production-grade workflow automation systems with n8n, AI APIs, and event-driven architecture.",
  authors: [{ name: "Cob Bautista" }],
  keywords: [
    "n8n",
    "workflow automation",
    "AI automation",
    "OpenAI",
    "Claude API",
    "API integration",
  ],
  openGraph: {
    title: "Cob Bautista | n8n Automation Specialist",
    description: "Building production-grade workflow automation systems",
    type: "website",
    url: "https://cobautista.github.io",
  },
  twitter: {
    card: "summary",
    title: "Cob Bautista | n8n Automation Specialist",
    description: "Building production-grade workflow automation systems",
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
      className={`${archivo.variable} ${archivoBlack.variable} antialiased`}
    >
      <body className="bg-paper text-ink">{children}</body>
    </html>
  );
}
