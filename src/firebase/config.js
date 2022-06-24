import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCR3PB5-sSwfPW7CXtIgEUzqC03M4GlLPo",
  authDomain: "pawse-catcafe.firebaseapp.com",
  projectId: "pawse-catcafe",
  storageBucket: "pawse-catcafe.appspot.com",
  messagingSenderId: "507983220450",
  appId: "1:507983220450:web:358a6eac91931e7e1e98bb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const getFirestoreApp = () => {
    return app;
}

