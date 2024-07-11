import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "EuropaShop",
  description: "This is E-commerce Next App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col">
          <Header />
          {children}
          <footer className="footer footer-center p-4 bg-base-300 text-base-content">
            <p>Copyright c 2023 - All right reserved by Europa Shop</p>
          </footer>
        </div>
        
      </body>
    </html>
  );
}
