import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import styles from './Footer.module.css';
const year = new Date().getFullYear();
function Footer() {
    return (_jsxs("footer", { className: `${styles.footer} glass-panel`, children: [_jsxs("p", { children: ["\u00A9 ", year, " Space Console. All rights reserved."] }), _jsx("p", { className: styles.subtitle, children: "Building intelligent data pipelines for ambitious teams." })] }));
}
export default Footer;
