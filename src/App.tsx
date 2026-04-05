import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Layout from '@/components/Layout';
import Home from '@/pages/Home';
import Foundation from '@/pages/Foundation';
import Finance from '@/pages/Finance';
import Property from '@/pages/Property';
import Health from '@/pages/Health';
import Living from '@/pages/Living';
import Growth from '@/pages/Growth';
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
          <Route path="/foundation" element={<Foundation />} />
          <Route path="/finance" element={<Finance />} />
          <Route path="/property" element={<Property />} />
          <Route path="/health" element={<Health />} />
          <Route path="/living" element={<Living />} />
          <Route path="/growth" element={<Growth />} />
          <Route path="/resources" element={<Resources />} />
        </Routes>
      </Layout>
    </Router>
  );
}
