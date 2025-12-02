import { Raleway } from "next/font/google";
import "../app/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700", "900"],
});

export const metadata = {
  title: "Abdur Rahman Mamun | Portfolio",
  description: "Full-Stack Developer Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${raleway.className} antialiased bg-black`}>
        <Navbar />
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}
