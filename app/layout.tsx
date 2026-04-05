import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const felixTitling = localFont({
  src: "./fonts/FelixTitling.ttf",
  variable: "--font-serif",
  display: "swap",
});

const garyDownley = localFont({
  src: "./fonts/GaryDownleyScript.otf",
  variable: "--font-script",
  display: "swap",
});

const helveticaLight = localFont({
  src: "./fonts/HelveticaNeueLTPro-LtEx.otf",
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Daniela & Nelson — ¡Nos casamos!",
  description: "Únete a nuestra celebración el 9 de octubre de 2026",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="es"
      className={`${felixTitling.variable} ${garyDownley.variable} ${helveticaLight.variable} h-full`}
    >
      <body className="min-h-full flex flex-col bg-[#E8E3DD] text-[#2C2420] antialiased">
        {children}
      </body>
    </html>
  );
}
