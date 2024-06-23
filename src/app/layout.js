import { Almarai } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import ScrollToTopButton from "@/components/shared/ScrollToTopButton";
import Footer from "@/components/shared/Footer";
import { Analytics } from "@vercel/analytics/react"

const almarai = Almarai({ subsets: ["arabic"], weight: "400" });

export const metadata = {
  title: "Pearl Hygiene | Largest Provider Of Cleaning Solutions",
  description: "Pearl Hygiene is adjudged as one of the largest provider of cleaning solutions in the Kingdom of Saudi Arabia by Industry standards and experts. ",
};

/* 

.........................Vercel Analytics added for demo purpose...................

*/

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={almarai.className}>
        <Navbar/>
        <div className="min-h-screen">
        {children}
        <Analytics/>
        <ScrollToTopButton/>
        </div>
        <Footer/>
        </body>
    </html>
  );
}
