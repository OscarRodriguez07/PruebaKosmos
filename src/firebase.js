// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBfczYOKcY-HS7YbNhEg_WGPoSzJSyjtAU",
  authDomain: "examen-kosmos.firebaseapp.com",
  projectId: "examen-kosmos",
  storageBucket: "examen-kosmos.appspot.com",
  messagingSenderId: "733584112700",
  appId: "1:733584112700:web:4abb6d55ef8b993c0bd739",
  measurementId: "G-3QX502KY2Z",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
