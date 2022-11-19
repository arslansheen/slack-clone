// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCLSurUsnc9W8Oql6K2SXDFuGeLV8d6X0Q",
  authDomain: "slack-clone-862dd.firebaseapp.com",
  projectId: "slack-clone-862dd",
  storageBucket: "slack-clone-862dd.appspot.com",
  messagingSenderId: "439434203793",
  appId: "1:439434203793:web:9231b5202550f5e2bd2530",
  measurementId: "G-T4W19QCYGB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);