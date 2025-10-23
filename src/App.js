import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './routes/Home/index';
import About from './routes/About/index';
import Contact from './routes/Contact/index';
import styles from './App.module.css';
function App() {
    return (_jsxs("div", { className: styles.app, children: [_jsx(Header, {}), _jsx("main", { className: styles.main, children: _jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsx(Home, {}) }), _jsx(Route, { path: "/about", element: _jsx(About, {}) }), _jsx(Route, { path: "/contact", element: _jsx(Contact, {}) })] }) }), _jsx(Footer, {})] }));
}
export default App;
