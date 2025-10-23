import styles from './Logo.module.css';

function Logo() {
  return (
    <span className={styles.logo}>
      space<span className={styles.accent}>console</span>
    </span>
  );
}

export default Logo;
