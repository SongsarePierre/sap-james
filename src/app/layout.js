import { Inter } from "next/font/google";
import "./globals.css";

import Menu from "@/components/menu fr/Menu";
import Lang from "@/components/lang fr/lang-fr";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "SAP JAMES",
  description: "SAP JAMES propose des services de branding et de product design pour aider votre entreprise à prospérer. Contactez-nous dès aujourd’hui pour booster votre business.",
  icons: {
    icon: '/favicon.svg',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Menu />
        <Lang />
        {children}
      </body>
    </html>
  );
}
