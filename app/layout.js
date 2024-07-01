import { Inter } from "next/font/google";
import "./globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css"
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false
import Header from "../components/header.js";
import Footer from "../components/footer.js";
import Contact from "@/components/contact";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Seve Events",
  description: "Full Stack App for Booking Event",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" >
      <body className='h-screen bg-gray-100' >
        <Header />
        {children}
        <Contact />
        <Footer />
        </body>
    </html>
  );
}
