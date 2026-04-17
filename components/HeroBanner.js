import Link from "next/link";
import styles from "./HeroBanner.module.css";

export default function HeroBanner({ title, description, ctaLabel, ctaLink }) {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.description}>{description}</p>
        {ctaLabel && ctaLink && (
          <Link href={ctaLink} className={styles.button}>
            {ctaLabel}
          </Link>
        )}
      </div>
    </section>
  );
}
