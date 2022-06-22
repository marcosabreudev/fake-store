import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Home from 'pages/Home';
import Products from 'pages/Products';
import Navigation from 'components/Navigation';
import NotFound from 'components/NotFound';

export default function AppRouter() {
  return (
    <main>
      <Router>
        <Navigation />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/products' element={<Products />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Router>
    </main>
  );
}