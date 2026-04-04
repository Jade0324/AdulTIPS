import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Layout from '@/components/Layout';
import Home from '@/pages/Home';
import Module1 from '@/pages/Module1';
import Module2 from '@/pages/Module2';
import Module3 from '@/pages/Module3';
import Module4 from '@/pages/Module4';
import Module5 from '@/pages/Module5';
import Resources from '@/pages/Resources';

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/module-1" element={<Module1 />} />
          <Route path="/module-2" element={<Module2 />} />
          <Route path="/module-3" element={<Module3 />} />
          <Route path="/module-4" element={<Module4 />} />
          <Route path="/module-5" element={<Module5 />} />
          <Route path="/resources" element={<Resources />} />
        </Routes>
      </Layout>
    </Router>
  );
}
