import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Menu from './components/Menu/Menu';
import Lead from './pages/Lead/Lead';

const App: React.FC = () => {
  return (
    <Router>
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/lead" element={<Lead />} />
      </Routes>
    </Router>
  );
};

export default App;
