import styles from "./page.module.css";
import PostsList from "@/features/posts/PostsList";

export default function Home() {
  return (
    <main className={styles.main}>
      <PostsList className={styles.post} />
    </main>
  );
}
