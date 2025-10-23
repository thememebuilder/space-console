import styles from './About.module.css';

function About() {
  return (
    <section className={styles.container}>
      <header className={styles.header}>
        <h1>About Space Console</h1>
        <p>
          We build intelligent automation for data teams operating in high-stakes environments.
          Our tooling compresses operational toil, safeguards compliance, and gives your analysts
          room to explore.
        </p>
      </header>

      <div className={styles.columns}>
        <article>
          <h2>Mission</h2>
          <p>
            Make data infrastructure autonomous, observable, and resilient so teams can iterate at
            orbital speed without sacrificing trust.
          </p>
        </article>
        <article>
          <h2>Principles</h2>
          <ul>
            <li>Automate the mundane so humans focus on strategy.</li>
            <li>Design for clarity—every action should have context.</li>
            <li>Ship in increments, measure relentlessly, iterate.</li>
          </ul>
        </article>
        <article>
          <h2>What&apos;s next</h2>
          <p>
            A progressive roadmap that starts with a reliable first release and moves toward an
            adaptive control center for your entire data universe.
          </p>
        </article>
      </div>
    </section>
  );
}

export default About;
