import {
  signInWithGoogle,
  createUser,
} from '../../firebase';

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGoogle();
    const userDocRef = await createUser(user);
    console.log(user)
  };

  return (
    <div>
      <h1>Sign In Page</h1>
      <button onClick={logGoogleUser}>Sign in with Google Popup</button>
    </div>
  );
};

export default SignIn;