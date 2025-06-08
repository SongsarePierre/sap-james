import { Inter } from "next/font/google";
import "./cont-rs.css";

import Menu from "@/components/menu fr/Menu";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Service 3 - SAP JAMES",
  description: "Concevoir du contenu visuel attractif et engageant qui fait rayonner votre marque sur les réseaux sociaux et qui fidélise votre communauté.",
};

export default function ConstLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Menu />
        {children}
      </body>
    </html>
  );
}
