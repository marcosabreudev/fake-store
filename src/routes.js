import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Home from 'pages/Home';
import Search from 'pages/Search';
import Product from 'pages/Product';
import Menu from 'blocks/Menu';
import NotFound from 'blocks/NotFound';

export default function AppRouter() {
  return (
    <main>
      <Router>
        <Menu />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/search' element={<Search />} />
          <Route path='*' element={<NotFound />} />
          <Route path='product/:id' element={<Product />} />
        </Routes>
      </Router>
    </main>
  );
}