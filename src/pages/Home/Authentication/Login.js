import React, { useState } from 'react';
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
} from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import login from '../../../image/Login.gif';
import Social from './Social/Social';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  // reset password hook
  const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  // Handling RequireAuth redirection
  const location = useLocation();
  let from = location.state?.from?.pathname || '/';

  const userEmail = (event) => {
    setEmail(event.target.value);
    return email;
  };
  const userPassword = (event) => {
    setPassword(event.target.value);
    return password;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    await signInWithEmailAndPassword(email, password);
  };

  // Handling reset password
  const resetPassword = async () => {
    if (email) {
      await sendPasswordResetEmail(email);
      toast('email sent');
    } else {
      toast('Please enter your email address.');
    }
  };

  if (sending) {
    return (
      <p className="h-screen text-center my-auto font-bold text-3xl">
        Sending email...
      </p>
    );
  }

  if (user) {
    navigate(from, { replace: true });
  }

  if (loading) {
    return (
      <p className="h-screen text-center my-auto font-bold text-3xl">
        Loading...
      </p>
    );
  }

  if (error) {
    toast.error(error?.code);
  }

  return (
    <form onSubmit={handleSubmit} className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
        <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
          <img className="mx-auto w-72 lg:w-1/2" src={login} alt="" />
        </div>
        <div className="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
          <h2 className="text-gray-900 text-lg font-medium title-font mb-5">
            Login
          </h2>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-600">
              Email
            </label>
            <input
              onBlur={userEmail}
              type="email"
              id="email"
              name="email"
              className="w-full bg-white rounded border border-gray-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              required
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-600">
              password
            </label>
            <input
              onChange={userPassword}
              type="password"
              id="password"
              name="password"
              className="w-full bg-white rounded border border-gray-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              required
            />
          </div>
          <div className="relative mb-4">
            <p>
              <small>
                No registered account?
                <Link to="/register" className="underline text-blue-600 ml-1">
                  register here
                </Link>
              </small>
            </p>
          </div>
          <div className="relative mb-4">
            <p>
              <small>
                Forget Passord?
                <button
                  onClick={resetPassword}
                  className="underline text-blue-600 ml-1">
                  Reset
                </button>
              </small>
            </p>
          </div>
          <input
            type="submit"
            value="Login"
            className="text-white bg-gray-700 border-0 py-2 px-8 focus:outline-none hover:bg-yellow-500 rounded text-lg"
          />
          <p className="text-xs text-gray-500 mt-3">
            <small>We care about your privacy.</small>
          </p>
          <Social></Social>
          <ToastContainer />
        </div>
      </div>
    </form>
  );
};

export default Login;
