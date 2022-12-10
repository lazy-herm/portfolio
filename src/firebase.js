// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB5kAt0gVHLWut7ATzAsRIshrGn-Mc0y3o",
  authDomain: "portfolio-80620.firebaseapp.com",
  databaseURL: "https://portfolio-80620-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "portfolio-80620",
  storageBucket: "portfolio-80620.appspot.com",
  messagingSenderId: "739344778797",
  appId: "1:739344778797:web:4e3c6d66a4ec1bab2d5aa4",
  measurementId: "G-863YNXJYVB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);