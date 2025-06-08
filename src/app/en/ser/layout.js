import { Inter } from "next/font/google";
import "./ser.css";

import Menu from "@/components/menu en/Menu";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Mes Services - SAP JAMES",
  description: "Discover our branding and product design services. Collaborate with SAP JAMES to achieve your business goals.",
};

export default function ServicesLayout({ children }) {
  return (
    <div className={inter.className}>
      <Menu />
      {children}
    </div>
  );
}
