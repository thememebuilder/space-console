import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import styles from './Contact.module.css';

const FORMSPREE_ENDPOINT = 'REPLACE_WITH_FORMSPREE_ENDPOINT';

function Contact() {
    const [status, setStatus] = useState('idle');

    async function handleSubmit(e) {
        e.preventDefault();
        setStatus('sending');
        const form = e.currentTarget;
        const data = new FormData(form);

        try {
            const res = await fetch(FORMSPREE_ENDPOINT, {
                method: 'POST',
                body: data,
                headers: { Accept: 'application/json' }
            });

            if (res.ok) {
                setStatus('success');
                form.reset();
            }
            else {
                setStatus('error');
            }
        }
        catch (err) {
            setStatus('error');
        }
    }

    return (_jsxs("section", { className: `${styles.container} glass-panel`, children: [_jsxs("header", { className: styles.header, children: [_jsx("h1", { children: "Partner with Space Console" }), _jsx("p", { children: "Ready to launch your next data initiative? Tell us about the challenges you're facing and we'll map a path to automation." })] }), _jsxs("div", { className: styles.content, children: [_jsxs("div", { className: `${styles.panel} glass-panel`, children: [_jsx("h2", { children: "Contact" }), _jsxs("form", { className: styles.form, onSubmit: handleSubmit, children: [_jsxs("label", { className: styles.label, children: ["Name", _jsx("input", { name: "name", type: "text", required: true, className: styles.input })] }), _jsxs("label", { className: styles.label, children: ["Email", _jsx("input", { name: "email", type: "email", required: true, className: styles.input })] }), _jsxs("label", { className: styles.label, children: ["Message", _jsx("textarea", { name: "message", rows: 5, required: true, className: styles.textarea })] }), _jsx("button", { type: "submit", className: `${styles.submit} glass-cta`, disabled: status === 'sending', children: status === 'sending' ? 'Sending…' : 'Send message' }), status === 'success' && _jsx("p", { className: styles.success, children: "Thanks — we'll be in touch soon." }), status === 'error' && _jsx("p", { className: styles.error, children: "Sorry, something went wrong. Try again later." })] })] }), _jsxs("div", { className: `${styles.panel} glass-panel`, children: [_jsx("h2", { children: "What to include" }), _jsxs("ul", { children: [_jsx("li", { children: "Current stack and bottlenecks" }), _jsx("li", { children: "Timeline for first deployment" }), _jsx("li", { children: "Constraints we should respect" })] })] })] })] }));
}

export default Contact;
