// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDkx9dPiUmtsuwbLW9tW17sBdm4yNWxQOM",
  authDomain: "mini-hackathon-62488.firebaseapp.com",
  projectId: "mini-hackathon-62488",
  storageBucket: "mini-hackathon-62488.appspot.com",
  messagingSenderId: "636306545498",
  appId: "1:636306545498:web:35986150f6ee96435db163"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

// Initialize Cloud Firestore and get a reference to the service
const database = getFirestore(app);

export { auth, database  };
   