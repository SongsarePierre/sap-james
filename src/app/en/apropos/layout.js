import { Inter } from "next/font/google";
import "./apro.css";

import Menu from "@/components/menu en/Menu";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "About - SAP JAMES",
  description: "Discover SAP JAMES. My mission is to ensure your business's success through tailor-made digital solutions.",
};

export default function AproLayout({ children }) {
  return (
    <div className={inter.className}>
      <Menu />
      {children}
    </div>
  );
}
