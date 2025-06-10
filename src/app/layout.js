import { Inter } from "next/font/google";
import "./globals.css";

import Menu from "@/components/menu fr/Menu";
import Lang from "@/components/lang fr/lang-fr";
import Head from "next/head";
import { imageConfigDefault } from "next/dist/shared/lib/image-config";
// import Head from 'next/head';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "SAP JAMES",
  description: "Graphic designer",
  icons: {
    icon: '/favicon.svg',
  },
  // openGraph: {
  //   title: 'SAP JAMES',
  //   description: 'Graphic designer',
  //   siteName: 'Your Website Name',
  //   images: [
  //     {
  //       url: '/view.webp',
  //       width: 1200,
  //       height: 630,
  //     },
  //   ],
  //   type: 'website',
  // },
  // twitter: {
  //   title: 'SAP JAMES',
  //   description: 'Graphic designer',
  //   images: ['/view.webp'],
  // },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta property="og:image" content="/view.webp" />
        <meta name="twitter:image" content="/view.webp" />
        {/* <meta property="og:image" content="/view.webp" />
        <meta name="twitter:image" content="/view.webp" /> */}
      </head>
      <body className={inter.className}>
        <Menu />
        <Lang />
        {children}
      </body>
    </html>
  );
}
