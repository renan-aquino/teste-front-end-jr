import { Hero } from "@/components/hero/hero";
import styles from "./page.module.css";
import { Departments } from "@/components/departments/departments";
import { ProductDisplay } from "@/components/product-display/product-display";
import { Partners } from "@/components/partners/partners";
import { RelatedProducts } from "@/components/related-products/related-products";
import { Brands } from "@/components/brands/brands";
import { Product } from "@/types/product";

export default async function Home() {

  async function getData() {
    try {
      const res = await fetch(`https://app.econverse.com.br/teste-front-end/junior/tecnologia/lista-produtos/produtos.json`);
  
      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }

      return res.json();

    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  const data = await getData()
  const products : Product[] = data?.products

  return (
    <main className={styles.main}>
      <Hero/>
      <Departments/>
      <ProductDisplay products={products}/>
      <Partners/>
      <RelatedProducts/>
      <Brands/>
    </main>
  );
}
