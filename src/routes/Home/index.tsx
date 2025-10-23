import styles from './Home.module.css';

function Home() {
  return (
    <section className={`${styles.container} glass-panel`}>
      <header className={styles.hero}>
        <p className={styles.eyebrow}>AI-first data automation</p>
        <h1>
          Space Console engineers reliable data pipelines so your team can focus on bold moves.
        </h1>
        <p className={styles.summary}>
          We orchestrate ingestion, transformation, and delivery with guardrails that scale. No
          noise—just signal.
        </p>
      </header>

      <div className={styles.sections}>
        <article className={`${styles.card} glass-panel`}>
          <h2>Operational clarity</h2>
          <p>
            Monitor every job in real time and surface only what matters. Forecast issues before
            they land in your inbox.
          </p>
        </article>
        <article className={`${styles.card} glass-panel`}>
          <h2>Launch faster</h2>
          <p>
            Press go on new pipelines with reusable components and guardrails that learn from your
            environment.
          </p>
        </article>
        <article className={`${styles.card} glass-panel`}>
          <h2>Scale with trust</h2>
          <p>
            Governance, logging, and compliance built-in. Audit trails, versioning, and recovery
            by default.
          </p>
        </article>
      </div>
    </section>
  );
}

export default Home;
