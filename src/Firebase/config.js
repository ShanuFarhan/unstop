// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {GoogleAuthProvider,getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyC8YlcV2tmqmadxEJ_dtOetkkbeeFhxgoc",
  authDomain: "unstop-2c28e.firebaseapp.com",
  projectId: "unstop-2c28e",
  storageBucket: "unstop-2c28e.appspot.com",
  messagingSenderId: "541841146345",
  appId: "1:541841146345:web:1ea04ded6009c4f797cb78",
  measurementId: "G-7367ZWJH6G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth=getAuth(app)
const provider=new GoogleAuthProvider()
export {auth,provider};