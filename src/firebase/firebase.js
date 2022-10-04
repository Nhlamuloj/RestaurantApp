// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import{getAuth} from "firebase/auth"
import{getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAm84Ity4lDOMwa4WuEj_eHi07WPHW-QCo",
  authDomain: "restaurant-5c454.firebaseapp.com",
  projectId: "restaurant-5c454",
  storageBucket: "restaurant-5c454.appspot.com",
  messagingSenderId: "1087291929503",
  appId: "1:1087291929503:web:13901eb3ddebf1387b83aa",
  measurementId: "G-QLRBKYKB0H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth =getAuth(app)
const db =getFirestore(app)
const analytics = getAnalytics(app);

export {auth,db};