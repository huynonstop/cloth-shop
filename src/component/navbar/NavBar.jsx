import { Link } from 'react-router-dom'
import './navBar.scss'

import Logo from '../../assets/crown.svg?component'
import { useContext } from 'react'
import { UserContext } from '../../context/user'
import { signOutGoogle } from '../../firebase'

const NavBar = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext);
  const signOutHandler = async () => {
    await signOutGoogle();
    setCurrentUser(null);
  };
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
      </div>
    </nav>
  )
}

export default NavBar