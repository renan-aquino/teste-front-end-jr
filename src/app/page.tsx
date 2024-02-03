import { Hero } from "@/components/hero/hero";
import styles from "./page.module.css";
import { Departments } from "@/components/departments/departments";

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero/>
      <Departments/>
    </main>
  );
}
