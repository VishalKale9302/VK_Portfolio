import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { ThemeProvider } from './context/ThemeContext';
import { useLenis } from './hooks/useScroll';
import Loader from './components/Loader';
import Cursor from './components/Cursor';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

function App() {
  const [loading, setLoading] = useState(true);
  const { lenis, progress } = useLenis();

  return (
    <ThemeProvider>
      <BrowserRouter>
        {loading && <Loader onFinish={() => setLoading(false)} />}
        <Cursor />
        <Toaster
          position="top-right"
          toastOptions={{
            style: {
              background: 'rgb(var(--surface))',
              color: 'rgb(var(--text))',
              border: '1px solid rgb(var(--border) / 0.1)',
              fontFamily: 'JetBrains Mono, monospace',
              fontSize: '13px',
            },
          }}
        />
        <Navbar scrollProgress={progress} />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer lenis={lenis} />
        <ScrollToTop lenis={lenis} />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
