import { getRedirectResult } from 'firebase/auth';
import { useEffect } from 'react';
import {
  auth,
  signInWithGoogleRedirect,
  signInWithGoogle,
  createUser,
} from '../../firebase';

function SignIn() {
  const signInPopup = async () => {
    const { user } = await signInWithGoogle();
    const userDocRef = await createUser(user);
    console.log(user);
  };

  useEffect(() => {
    const getRedirectRes = async () => {
      const res = await getRedirectResult(auth);
      if (res) {
        const userDocRef = await createUser(res.user);
      }
    };
    getRedirectRes();
  }, []);

  return (
    <div>
      <h1>Sign In Page</h1>
      <button onClick={signInPopup}>Sign in with Google Popup</button>
      <button onClick={signInWithGoogleRedirect}>Sign in with Google Redirect</button>
    </div>
  );
}

export default SignIn;
