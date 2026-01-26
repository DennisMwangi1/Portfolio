import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import Home from '@/pages/Home';
import About from '@/pages/About';
import Portfolio from '@/pages/Portfolio';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home onEnterApp={() => { }} />} />
        <Route element={<Layout />}>
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/about" element={<About />} />
        </Route>
        {/* Redirect unknown routes to home */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
};

export default App;