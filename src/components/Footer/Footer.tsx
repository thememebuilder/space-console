import styles from './Footer.module.css';

const year = new Date().getFullYear();

function Footer() {
  return (
    <footer className={styles.footer}>
      <p>© {year} Space Console. All rights reserved.</p>
      <p className={styles.subtitle}>Building intelligent data pipelines for ambitious teams.</p>
    </footer>
  );
}

export default Footer;
