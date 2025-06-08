import { Inter } from "next/font/google";
import "./brand.css";

import Menu from "@/components/menu fr/Menu";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Service 1 - SAP JAMES",
  description: "Établir les bases solides de votre marque en définissant sa mission, sa vision et ses valeurs. Je vous aide à clarifier ce que vous représentez, à qui vous vous adressez et comment vous vous démarquez.",
};

export default function BrandLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Menu />
        {children}
      </body>
    </html>
  );
}
