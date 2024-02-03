import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.scss";
import { Header } from "@/components/header/header";

const poppins = Poppins({ weight: ['400', '500', '600'], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Header/>
        {children}
      </body>
    </html>
  );
}
