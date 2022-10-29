import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCRe3Q9q-Hl1WaLTwhA1_Hq2OW8ToaVay8",
  authDomain: "clone-yt-3f4fc.firebaseapp.com",
  projectId: "clone-yt-3f4fc",
  storageBucket: "clone-yt-3f4fc.appspot.com",
  messagingSenderId: "649679048128",
  appId: "1:649679048128:web:f1478f8ba4d98e1e9b8c25",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();
const provider = new GoogleAuthProvider();
export { db, provider, auth };
