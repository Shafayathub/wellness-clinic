import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import register from '../../../image/Queue.gif';
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import Social from './Social/Social';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

  const [updateProfile, updating, DPerror] = useUpdateProfile(auth);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [displayName, setDisplayName] = useState('');
  const [photoURL, setPhotoURL] = useState(
    'https://www.maxpixel.net/static/photo/1x/Avatar-Blank-Profile-Picture-Display-Pic-Mystery-Man-973460.png'
  );

  const navigate = useNavigate();

  const userName = (event) => {
    setDisplayName(event.target.value);
    return displayName;
  };
  const userImg = (event) => {
    setPhotoURL(event.target.value);
    return photoURL;
  };

  const userEmail = (event) => {
    setEmail(event.target.value);
    return email;
  };
  const userPassword = (event) => {
    setPassword(event.target.value);
    return password;
  };
  const userConfirmPassword = (event) => {
    setConfirmPassword(event.target.value);
    console.log(confirmPassword);
  };

  if (user) {
    navigate('/');
    window.location.reload();
  }

  if (loading || updating) {
    return (
      <p className="h-screen text-center my-auto font-bold text-3xl">
        Loading...
      </p>
    );
  }

  if (error || DPerror) {
    toast(error?.code);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password === confirmPassword) {
      await createUserWithEmailAndPassword(email, password);
      await updateProfile({ displayName, photoURL });
    }
  };
  return (
    <form onSubmit={handleSubmit} className="text-gray-600 body-font">
      <div className="container px-5 py-2 mx-auto flex flex-wrap items-center">
        <img className="mx-auto w-72 lg:w-1/3" src={register} alt="" />

        <div className="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-7 md:mt-0">
          <h2 className="text-gray-900 text-lg font-medium title-font mb-3">
            Register
          </h2>
          <div className="relative mb-4">
            <label
              htmlFor="full-name"
              className="leading-7 text-sm text-gray-600">
              Full Name
            </label>
            <input
              onChange={userName}
              type="full-name"
              id="full-name"
              name="full-name"
              className="w-full bg-white rounded border border-gray-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              required
            />
          </div>
          <div className="relative mb-4">
            <label
              htmlFor="full-name"
              className="leading-7 text-sm text-gray-600">
              Image
            </label>
            <input
              onChange={userImg}
              type="photoURL"
              id="photoURL"
              name="photoURL"
              placeholder="paste img address (Optional)"
              className="w-full bg-white rounded border border-gray-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
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
              name="password"
              className="w-full bg-white rounded border border-gray-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              required
            />
            <label htmlFor="email" className="leading-7 text-sm text-gray-600">
              Confirm password
            </label>
            <input
              onChange={userConfirmPassword}
              type="password"
              name="password"
              className="w-full bg-white rounded border border-gray-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              required
            />
          </div>
          <div className="relative mb-4">
            <p>
              <small>
                Already have an account?
                <Link to="/login" className="underline text-blue-600 ml-1">
                  Login
                </Link>
              </small>
            </p>
          </div>

          <input
            type="submit"
            value="Register"
            className="text-white bg-gray-700 border-0 py-2 px-8 focus:outline-none hover:bg-yellow-500 rounded text-lg"
          />

          <Social></Social>
          <p className="text-xs text-gray-500 mt-2">
            <small>We care about your privacy.</small>
          </p>
          <ToastContainer></ToastContainer>
        </div>
      </div>
    </form>
  );
};

export default Register;
