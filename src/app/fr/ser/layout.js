import { Inter } from "next/font/google";
import "./ser.css";

import Menu from "@/components/menu fr/Menu";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Mes Services - SAP JAMES",
  description: "Découvrez nos services de conception de branding et de product design. Collaborez avec SAP JAMES pour atteindre vos objectifs business.",
};

export default function ServicesLayout({ children }) {
  return (
    <div className={inter.className}>
      <Menu />
      {children}
    </div>
  );
}
