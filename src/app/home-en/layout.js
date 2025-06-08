import { Inter } from "next/font/google";
import "./home-en.css";

import Menu from "@/components/menu en/Menu";
import Langen from "@/components/lang en/lang-en";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "SAP JAMES",
  description: "SAP JAMES offers branding and product design services to help your business thrive. Contact us today to boost your business.",
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
