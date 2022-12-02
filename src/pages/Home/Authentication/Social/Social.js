import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../../firebase.init';
import google from '../../../../image/google.png';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Social = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const navigate = useNavigate();

  // Handling RequireAuth redirection
  const location = useLocation();
  let from = location.state?.from?.pathname || '/';

  if (user) {
    navigate(from, { replace: true });
  }

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    toast.error(error?.code);
  }

  return (
    <div>
      <div className="flex items-center justify-evenly">
        <div className="bg-gray-700 h-1 w-1/3 rounded"></div>
        <p className="font-semibold">Or</p>
        <div className="bg-gray-700 h-1 w-1/3 rounded"></div>
      </div>
      <div className="mt-5">
        <button
          onClick={() => signInWithGoogle()}
          className="w-full bg-gray-500 py-2 px-8 focus:outline-none hover:bg-yellow-500 rounded text-lg">
          <img
            src={google}
            alt="Sign in with Google"
            className="w-10 mx-auto"
          />
        </button>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default Social;
