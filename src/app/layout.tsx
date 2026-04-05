import type { Metadata } from "next";
import { Outfit, Playfair_Display } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Resto Padang Pro | Cita Rasa Minang Autentik",
  description: "Pesan menu Padang favorit Anda secara online. Rendang, Ayam Pop, Dendeng, dan banyak lagi. Pengiriman cepat, rasa autentik.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${outfit.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-paper text-accent">
        {children}
      </body>
    </html>
  );
}
