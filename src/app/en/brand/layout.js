import { Inter } from "next/font/google";
import "./brand.css";

import Menu from "@/components/menu en/Menu";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Service 1 - SAP JAMES",
  description: "Laying the strategic groundwork that defines who your brand is and what it stands for, guiding every design and communication decision. It&apos;s the compass that ensures your brand is aligned with your audience and goals.",
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
