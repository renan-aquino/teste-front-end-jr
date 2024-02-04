import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.scss";
import { Header } from "@/components/header/header";
import { DefaultProviders } from "@/components/default-providers";

const poppins = Poppins({ weight: ['300', '400', '500', '600', '700'], subsets: ["latin"] });

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
        <DefaultProviders>
          <Header/>
          {children}
        </DefaultProviders>
      </body>
    </html>
  );
}
