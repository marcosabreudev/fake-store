import { Link } from 'react-router-dom';

export default function Menu() {
  return (
    <nav className='navbar fixed-top nav justify-content-center bg-light'>
      <Link to='/' className='nav-item nav-link'>Fake Store</Link>
      <Link to='search' className='nav-item nav-link active'>Search</Link>
      <Link to='about' className='nav-item nav-link'>About</Link>
    </nav>
  )
}
