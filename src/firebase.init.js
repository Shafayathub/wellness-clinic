// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAisOfsaLDG6dFopyU3N6fO5jYrwAfNjMM',
  authDomain: 'wellness-clinic-a3745.firebaseapp.com',
  projectId: 'wellness-clinic-a3745',
  storageBucket: 'wellness-clinic-a3745.appspot.com',
  messagingSenderId: '305837196727',
  appId: '1:305837196727:web:6a5e2a3d61d97642741432',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
