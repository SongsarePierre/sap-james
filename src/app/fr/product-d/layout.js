import { Inter } from "next/font/google";
import "./product-d.css";

import Menu from "@/components/menu fr/Menu";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Service 4 - SAP JAMES",
  description: "Concevoir des produits digitaux intuitifs et attractifs qui offrent une expérience utilisateur exceptionnelle et valorisent votre marque.",
};

export default function ProductLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Menu />
        {children}
      </body>
    </html>
  );
}
