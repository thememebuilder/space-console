import styles from './Contact.module.css';

function Contact() {
  return (
    <section className={`${styles.container} glass-panel`}>
      <header className={styles.header}>
        <h1>Partner with Space Console</h1>
        <p>
          Ready to launch your next data initiative? Tell us about the challenges you&apos;re
          facing and we&apos;ll map a path to automation.
        </p>
      </header>

      <div className={styles.content}>
        <div className={`${styles.panel} glass-panel`}>
          <h2>Contact</h2>
          <p>hello@space-console.com</p>
        </div>
        <div className={`${styles.panel} glass-panel`}>
          <h2>What to include</h2>
          <ul>
            <li>Current stack and bottlenecks</li>
            <li>Timeline for first deployment</li>
            <li>Constraints we should respect</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Contact;
