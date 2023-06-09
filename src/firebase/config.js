// Import the functions you need from the SDKs you need
import { initializeApp, getApps } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyC-tmgahGiOKGlkyTzBtMkcHIO_lFwcuBc',
  authDomain: 'banbanproject.firebaseapp.com',
  projectId: 'banbanproject',
  storageBucket: 'banbanproject.appspot.com',
  messagingSenderId: '105426186639',
  appId: '1:105426186639:web:a0d9dddb0e1f28ba261bfa',
  measurementId: 'G-8EPH3M5Q6E',
};

const firebase_app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
// const analytics = getAnalytics(firebase_app);

export default firebase_app;
