// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCkM67CyE5yMmV4tymGamm4hc4siOiHndw",
  authDomain: "daily-chefs-client.firebaseapp.com",
  projectId: "daily-chefs-client",
  storageBucket: "daily-chefs-client.appspot.com",
  messagingSenderId: "708206725221",
  appId: "1:708206725221:web:512ebc329bb43f837d1e8c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
