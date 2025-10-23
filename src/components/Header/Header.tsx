import { NavLink } from 'react-router-dom';
import Logo from '../Logo/Logo.tsx';
import styles from './Header.module.css';

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
];

function Header() {
  return (
    <header className={styles.header}>
      <Logo />
      <nav className={styles.nav}>
        {links.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            className={({ isActive }) => (isActive ? styles.active : styles.link)}
          >
            {link.label}
          </NavLink>
        ))}
      </nav>
    </header>
  );
}

export default Header;
