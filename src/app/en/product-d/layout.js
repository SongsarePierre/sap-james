import { Inter } from "next/font/google";
import "./product-d.css";

import Menu from "@/components/menu en/Menu";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Service 4 - SAP JAMES",
  description: "Designing intuitive, beautiful, and functional products that solve real user problems and strengthen your brand&apos;s value. It&apos;s about transforming ideas into experiences that users love.",
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
