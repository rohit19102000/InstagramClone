
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore} from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
// import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
  apiKey: "AIzaSyD7ZENipmUKpuSWUM1QDe6D2qWklV_A_-g",
  authDomain: "instagram-clone-c0f72.firebaseapp.com",
  projectId: "instagram-clone-c0f72",
  storageBucket: "instagram-clone-c0f72.appspot.com",
  messagingSenderId: "593098224828",
  appId: "1:593098224828:web:6f90e0b3956bf62d250cb9",
  measurementId: "G-0ECJMFZ45D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = getAuth(app);
const firestore = getFirestore(app);
const Storage = getStorage(app);

export { app ,auth, firestore,Storage}
