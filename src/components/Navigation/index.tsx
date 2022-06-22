import { Link } from 'react-router-dom';

export default function Navigation() {
  return (
    <nav className='navbar fixed-top nav justify-content-center bg-light'>
      <Link to='/' className='nav-item nav-link'>Fake Store</Link>
      <Link to='products' className='nav-item nav-link active'>Produtos</Link>
      <Link to='about' className='nav-item nav-link'>Sobre</Link>
    </nav>
  )
}
