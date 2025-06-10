import { Inter } from "next/font/google";
import "./home-en.css";

import Menu from "@/components/menu en/Menu";
import Langen from "@/components/lang en/lang-en";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "SAP JAMES",
  description: "Graphic designer",
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
    <div className={inter.className}>
      <Menu />
      <Langen />
      {children}
    </div>
  );
}
