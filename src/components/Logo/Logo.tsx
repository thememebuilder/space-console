import { Link } from 'react-router-dom';
import styles from './Logo.module.css';

function Logo() {
  return (
    <Link to="/" aria-label="Home" className={styles.link}>
      <span className={styles.logo}>
        space<span className={styles.accent}>console</span>
      </span>
    </Link>
  );
}

export default Logo;
