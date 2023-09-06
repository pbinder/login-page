import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Frontpage from './components/Frontpage';
import Blankpage from './components/Blankpage';

function App() {
  return (
   <Router>
      <Routes>
        <Route path="/" element={<Frontpage />} />
        <Route path="/blank-page" element={<Blankpage />} />
      </Routes>
    </Router>
  );
}

export default App;
