import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.scss";
import { Header } from "@/components/header/header";
import { DefaultProviders } from "@/components/default-providers";
import { Footer } from "@/components/footer/footer";

const poppins = Poppins({ weight: ['300', '400', '500', '600', '700', '900'], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Vtex",
  description: "A sua loja para encontrar o aparelho perfeito pra você.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt">
      <body className={poppins.className}>
        <DefaultProviders>
          <Header/>
          {children}
          <Footer/>
        </DefaultProviders>
      </body>
    </html>
  );
}
