import { Inter } from "next/font/google";
import "./contact.css";

import Menu from "@/components/menu en/Menu";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Contact-us - SAP JAMES",
  description: "Contact JAP JAMES. I am here to help you succeed online. Call me now to get started!",
};

export default function ContactLayout({ children }) {
  return (
    <div className={inter.className}>
      <Menu />
      {children}
    </div>
  );
}
