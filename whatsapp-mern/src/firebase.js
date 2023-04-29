// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC3hFIqvP4lBhY_CFaBni2hIuVZGq72K34",
  authDomain: "whatsapp-clone-4fed7.firebaseapp.com",
  projectId: "whatsapp-clone-4fed7",
  storageBucket: "whatsapp-clone-4fed7.appspot.com",
  messagingSenderId: "380642406898",
  appId: "1:380642406898:web:c19937423ed82ad3af7b6b",
  measurementId: "G-DKKXJSXFGE",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
