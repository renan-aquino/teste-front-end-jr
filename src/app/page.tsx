import { Hero } from "@/components/hero/hero";
import styles from "./page.module.css";
import { Departments } from "@/components/departments/departments";
import { ProductDisplay } from "@/components/product-display/product-display";
import { Partners } from "@/components/partners/partners";
import { RelatedProducts } from "@/components/related-products/related-products";

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero/>
      <Departments/>
      <ProductDisplay/>
      <Partners/>
      <RelatedProducts/>
    </main>
  );
}
