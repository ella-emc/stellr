import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyABBWgdGVuQmF_zV1UTLL2hdnJhAAtq9QQ",
  authDomain: "stellr-2a68e.firebaseapp.com",
  projectId: "stellr-2a68e",
  storageBucket: "stellr-2a68e.firebasestorage.app",
  messagingSenderId: "166436792868",
  appId: "1:166436792868:web:6af2c08790e6a76a4686b1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
