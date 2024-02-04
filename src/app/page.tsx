import { Hero } from "@/components/hero/hero";
import styles from "./page.module.css";
import { Departments } from "@/components/departments/departments";
import { ProductDisplay } from "@/components/product-display/product-display";

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero/>
      <Departments/>
      <ProductDisplay/>
    </main>
  );
}
