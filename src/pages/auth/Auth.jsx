import SignUpForm from './auth-form/SignUpForm';
import SignInForm from './auth-form/SignInForm';

import './auth.scss'

function Auth() {
  return (
    <div className='authentication-container'>
      <SignInForm />
      <SignUpForm />
    </div>
  );
}

export default Auth;
