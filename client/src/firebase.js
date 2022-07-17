import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.Firebase_key,
  authDomain: "video-app-c4bc3.firebaseapp.com",
  projectId: "video-app-c4bc3",
  storageBucket: "video-app-c4bc3.appspot.com",
  messagingSenderId: "442715296746",
  appId: "1:442715296746:web:13522e0da562dddbf2d893"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();

export default app;