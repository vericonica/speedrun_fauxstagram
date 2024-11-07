import styles from "./page.module.css";
import Feed from "./components/Feed";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
       <Feed />
      </main>
      
    </div>
  );
}
