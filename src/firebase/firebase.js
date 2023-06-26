
import firebase from "firebase/compat/app";

import 'firebase/compat/firestore';
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCgw6fBxnLMvDaBthrM6p5REloib-Livaw",
  authDomain: "proyecto-4-cda7d.firebaseapp.com",
  projectId: "proyecto-4-cda7d",
  storageBucket: "proyecto-4-cda7d.appspot.com",
  messagingSenderId: "916240536819",
  appId: "1:916240536819:web:d871d80da14c0780cf1386"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const db = app.firestore();
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();