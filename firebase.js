import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyBXtYZzowPrdmzBNrBMfuIkklIgh620kWU",
  authDomain: "tiktok---jornada-38309.firebaseapp.com",
  projectId: "tiktok---jornada-38309",
  storageBucket: "tiktok---jornada-38309.appspot.com",
  messagingSenderId: "939444429421",
  appId: "1:939444429421:web:c6512f4a9c860a61ced564",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
