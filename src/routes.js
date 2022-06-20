import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Home from 'pages/Home';
import Products from 'pages/Products';
import Navigation from 'components/Navigation';

export default function AppRouter() {
  return (
    <main>
      <Router>
        <Navigation />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/products' element={<Products />} />
        </Routes>
      </Router>
    </main>
  );
}