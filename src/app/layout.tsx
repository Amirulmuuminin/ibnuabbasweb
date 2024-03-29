import type { Metadata } from "next";
import { Montserrat, Bebas_Neue } from "next/font/google";
import "./globals.css";

const primary = Montserrat({ subsets: ["latin"], variable: "--font-primary" });
const secondary = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-secondary",
});

export const metadata: Metadata = {
  title: "IBNU ABBAS BSD",
  description: "Ingat Ibnu Abbas, Ingat Bahasa Arab, Al-Qur'an dan Sains",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={` ${primary.variable} ${secondary.variable} `}>
      <body className="font-primary">{children}</body>
    </html>
  );
}
