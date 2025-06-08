import { Inter } from "next/font/google";
import "./cont-rs.css";

import Menu from "@/components/menu en/Menu";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Service 3 - SAP JAMES",
  description: "Crafting visually compelling and on-brand content that captivates, engages, and grows your audience across all social media platforms. From eye-catching graphics to memorable visuals, it&apos;s about making every post unforgettable.",
};

export default function ConstLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Menu />
        {children}
      </body>
    </html>
  );
}
