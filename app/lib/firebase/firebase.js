//skopiować zawartość z firebase
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDCNVazlvstWszOhHl3FTg-aLhoWj0zalQ",
  authDomain: "frameworki-laby-studia.firebaseapp.com",
  projectId: "frameworki-laby-studia",
  storageBucket: "frameworki-laby-studia.firebasestorage.app",
  messagingSenderId: "206577410212",
  appId: "1:206577410212:web:d4b9343bbfb9d92aa4c631"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app); // Eksportowanie usługi Auth

export default app;