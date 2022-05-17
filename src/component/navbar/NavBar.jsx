import { Link } from 'react-router-dom'
import './navBar.scss'

import Logo from '../../assets/crown.svg?component'

const NavBar = () => {
  return (
    <nav className='main-nav'>
      <Link className='logo-link' to={'/'}>
        <Logo className='logo' />
      </Link>
      <div className='links'>
        <Link className='nav-link' to={'shop'}>Shop</Link>
        <Link className='nav-link' to={'sign-in'}>SignIn</Link>
      </div>
    </nav>
  )
}

export default NavBar