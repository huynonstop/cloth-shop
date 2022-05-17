import { Link } from 'react-router-dom'
import './navBar.scss'

import Logo from '../../assets/crown.svg?component'
import { useContext, useState } from 'react'
import { UserContext } from '../../context/user'
import { signOutGoogle } from '../../firebase'
import CartIcon from '../cart/CartIcon'
import CartDropdown from '../cart/CartDropDown'

const NavBar = () => {
  const { currentUser } = useContext(UserContext);
  const signOutHandler = async () => {
    await signOutGoogle();
  };
  const [isToggle, setToggle] = useState(false)
  return (
    <nav className='main-nav'>
      <Link className='logo-link' to={'/'}>
        <Logo className='logo' />
      </Link>
      <div className='links'>
        <Link className='nav-link' to={'shop'}>Shop</Link>
        {currentUser ? (
          <span className='nav-link' onClick={signOutHandler}>
            Sign Out
          </span>
        ) : (
          <Link className='nav-link' to='/auth'>
            Sign In
          </Link>
        )}
        <CartIcon toggleCart={() => setToggle(pre => !pre)} />
      </div>
      {isToggle && <CartDropdown hideCart={() => setToggle(false)} />}
    </nav>
  )
}

export default NavBar