import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link } from 'react-router-dom';
import styles from './Logo.module.css';
function Logo() {
    return (_jsx(Link, { to: "/", "aria-label": "Home", className: styles.link, children: _jsxs("span", { className: styles.logo, children: ["space", _jsx("span", { className: styles.accent, children: "console" })] }) }));
}
export default Logo;
