import { Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './routes/Home/index';
import About from './routes/About/index';
import Contact from './routes/Contact/index';
import styles from './App.module.css';

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <main className={styles.main}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
