import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore"
import { getAuth, GoogleAuthProvider, GithubAuthProvider } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB2LoCVSC1x-njNZJTtTpws85E_BafIv3w",
  authDomain: "todo-piwo-4dbb8.firebaseapp.com",
  projectId: "todo-piwo-4dbb8", 
  storageBucket: "todo-piwo-4dbb8.appspot.com",
  messagingSenderId: "488035256439",
  appId: "1:488035256439:web:05e9fa560907da2176de72",
  measurementId: "G-891ZC863PM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const firestore = getFirestore(app);
const googleProvider = new GoogleAuthProvider();
const gitProvider = new GithubAuthProvider();
export { auth, googleProvider, gitProvider,  firestore};