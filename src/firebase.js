// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBBAqqlZfJavErxPGc2hJHwQl67LJUNEUI",
  authDomain: "human-ai-36295.firebaseapp.com",
  projectId: "human-ai-36295",
  storageBucket: "human-ai-36295.firebasestorage.app",
  messagingSenderId: "823470658641",
  appId: "1:823470658641:web:e3f8a19d547a75c0c15470",
  measurementId: "G-9GBZZ30PP6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app;