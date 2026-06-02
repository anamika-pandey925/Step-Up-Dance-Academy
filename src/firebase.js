import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBBAqqlZfJavErxPGc2hJHwQl67LJUNEUI",
  authDomain: "human-ai-36295.firebaseapp.com",
  projectId: "human-ai-36295",
  storageBucket: "human-ai-36295.firebasestorage.app",
  messagingSenderId: "823470658641",
  appId: "1:823470658641:web:e3f8a19d547a75c0c15470"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);

export default app;