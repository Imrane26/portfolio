import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://imrane-mouzaria.vercel.app"),
  title: "Imrane Mouzaria | Computer Engineering Student & Software Developer",
  description:
    "Portfolio of Imrane Mouzaria, a Computer Engineering student at EMSI Marrakech focused on software development, web technologies, and information systems.",
  authors: [{ name: "Imrane Mouzaria" }],
  creator: "Imrane Mouzaria",
  openGraph: {
    title: "Imrane Mouzaria | Computer Engineering Student & Software Developer",
    description:
      "Computer Engineering student focused on software development, web technologies, and information systems.",
    url: "https://imrane-mouzaria.vercel.app",
    siteName: "Imrane Mouzaria Portfolio",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Imrane Mouzaria portfolio preview"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Imrane Mouzaria | Computer Engineering Student & Software Developer",
    description:
      "Computer Engineering student focused on software development, web technologies, and information systems.",
    images: ["/og-image.svg"]
  },
  icons: {
    icon: "/favicon.svg"
  },
  robots: {
    index: true,
    follow: true
  },
  verification: {
    google: "7s4j1gxcKwiwk9hBUN26GUJfgJICcAHV0ZoUEsI5CK8"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
