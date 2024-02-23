import { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../utils/firebase';
import SignInComponent from '../components/SignInComponent';
import ProfileComponent from '../components/ProfileComponent';
import useCurrentUserData from '../utils/useCurrentUserData';

const Login = () => {
  const { userData, setUserData } = useCurrentUserData();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserData({ username: user.displayName, email: user.email, userid: user.uid });
      } else {
        setUserData(undefined);
      }
    });
    return () => unsubscribe();
  }, []);

  return (
    <div className="Login">
      {userData ? <ProfileComponent></ProfileComponent> : <SignInComponent></SignInComponent>}
    </div>
  );
};

export default Login;
