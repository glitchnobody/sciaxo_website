'use client';
import styles from './Homepage.module.scss';

export default function Home() {
  return (
    <main>
      <div className={styles.tagline_Container}>
        <p className={styles.tagline1}>
          <span>Exploring</span> Coding as Art.
        </p>
        <p className={styles.tagline2}>
          Exploring <span>Coding</span> as Art.
        </p>
        <p className={styles.tagline3}>
          Exploring Coding <span>as</span> Art.
        </p>
        <p className={styles.tagline4}>
          Exploring Coding as <span>Art.</span>
        </p>
      </div>
    </main>
  );
}
