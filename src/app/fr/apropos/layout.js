import { Inter } from "next/font/google";
import "./apro.css";

import Menu from "@/components/menu fr/Menu";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "À propos - SAP JAMES",
  description: "Découvrez SAP JAMES, ma mission est la réussite de votre entreprise grâce à des solutions numériques sur mesure.",
};

export default function AproLayout({ children }) {
  return (
    <div className={inter.className}>
      <Menu />
      {children}
    </div>
  );
}
