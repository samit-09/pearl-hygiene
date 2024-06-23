import { initializeApp } from "firebase/app";
import {getDatabase} from "firebase/database"

const firebaseConfig = {
  apiKey: "AIzaSyAPqD3yYJULbNUjoIK2IBdU1iLr0WNH_j4",
  authDomain: "pearl-hygiene.firebaseapp.com",
  databaseURL: "https://pearl-hygiene-default-rtdb.firebaseio.com",
  projectId: "pearl-hygiene",
  storageBucket: "pearl-hygiene.appspot.com",
  messagingSenderId: "512859027466",
  appId: "1:512859027466:web:4b57e628e5742297da47f3",
  measurementId: "G-3YD021K8D0"
};


const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
export {database};