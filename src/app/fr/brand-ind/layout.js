import { Inter } from "next/font/google";
import "./brand-ind.css";

import Menu from "@/components/menu fr/Menu";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Service 2 - SAP JAMES",
  description: "Créer une identité visuelle forte et mémorable qui exprime la personnalité unique de votre marque à travers des couleurs, des formes, des typographies et des symboles.",
};

export default function BrandinLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Menu />
        {children}
      </body>
    </html>
  );
}
