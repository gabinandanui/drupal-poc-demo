import styles from "./TwoColumn.module.css";

export default function TwoColumn({ left, right }) {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.column}>{left}</div>
        <div className={styles.column}>{right}</div>
      </div>
    </section>
  );
}
