import { Inter } from "next/font/google";
import "./brand-ind.css";

import Menu from "@/components/menu en/Menu";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Service 2 - SAP JAMES",
  description: "The unique visual and creative system that shapes how your audience perceives and remembers your brand, from the first glance to every interaction. It&apos;s the bridge that connects your strategy to your audience&apos;s emotions.",
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
