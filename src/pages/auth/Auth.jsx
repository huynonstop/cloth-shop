import SignUpForm from './auth-form/SignUpForm';
import SignInForm from './auth-form/SignInForm';

import './auth.scss'
import { useContext } from 'react';
import { UserContext } from '../../context/user';
import { Navigate } from 'react-router-dom';

function Auth() {
  const { currentUser } = useContext(UserContext);
  if (currentUser) {
    return <Navigate to='/'></Navigate>
  }
  return (
    <div className='authentication-container'>
      <SignInForm />
      <SignUpForm />
    </div>
  );
}

export default Auth;
