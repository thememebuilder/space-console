import { useState } from 'react';
import styles from './Contact.module.css';

// Replace this with your real Formspree endpoint, e.g. https://formspree.io/f/xxxxxxxx
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xqayvrke';

function Contact() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('sending');

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        body: data,
        headers: {
          Accept: 'application/json',
        },
      });

      if (res.ok) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch (err) {
      setStatus('error');
    }
  }

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
          <form className={styles.form} onSubmit={handleSubmit}>
            <label className={styles.label}>
              Name
              <input name="name" type="text" required className={styles.input} />
            </label>

            <label className={styles.label}>
              Email
              <input name="email" type="email" required className={styles.input} />
            </label>

            <label className={styles.label}>
              Message
              <textarea name="message" rows={5} required className={styles.textarea} />
            </label>

            <button type="submit" className={`${styles.submit} glass-cta`} disabled={status === 'sending'}>
              {status === 'sending' ? 'Sending…' : 'Send message'}
            </button>

            {status === 'success' && <p className={styles.success}>Thanks — we'll be in touch soon.</p>}
            {status === 'error' && <p className={styles.error}>Sorry, something went wrong. Try again later.</p>}
          </form>
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
