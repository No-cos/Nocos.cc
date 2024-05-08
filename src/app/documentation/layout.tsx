import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DocHeader from "@/components/DocHeader";
import { Inter } from "next/font/google";



const inter = Inter({ subsets: ["latin"] });



export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <main>
        <DocHeader />
        {children}
        <Footer />
      </main>
    </>
  )
}
