import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { NavLink } from 'react-router-dom';
import Logo from '../Logo/Logo';
import styles from './Header.module.css';
const links = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/contact', label: 'Contact' },
];
function Header() {
    return (_jsxs("header", { className: `${styles.header} glass-panel`, children: [_jsx(Logo, {}), _jsx("nav", { className: styles.nav, children: links.map((link) => (_jsx(NavLink, { to: link.to, className: ({ isActive }) => (isActive ? styles.active : styles.link), children: link.label }, link.to))) })] }));
}
export default Header;
