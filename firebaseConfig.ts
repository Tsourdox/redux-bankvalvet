// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC2sW_tvbrMvlTXdoQNt107EAeR3DTtjro",
  authDomain: "banken-9e4a1.firebaseapp.com",
  projectId: "banken-9e4a1",
  storageBucket: "banken-9e4a1.appspot.com",
  messagingSenderId: "578102859299",
  appId: "1:578102859299:web:c57d531befa04ca4470396",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize all the services you want to use
export const db = getFirestore(app);
// export const auth = getAuth(app);
// ...
