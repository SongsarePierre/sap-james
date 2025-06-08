import { Inter } from "next/font/google";
import "./contact.css";

import Menu from "@/components/menu fr/Menu";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Contactez-nous - SAP JAMES",
  description: "Contactez JAP JAMES. Je suis là pour vous aider à réussir en ligne. Appelez-moi dès maintenant pour démarrer!",
};

export default function ContactLayout({ children }) {
  return (
    <div className={inter.className}>
      <Menu />
      {children}
    </div>
  );
}
