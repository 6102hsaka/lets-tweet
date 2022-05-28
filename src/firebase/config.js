import { initializeApp } from "firebase/app";


const firebaseConfig = {
    apiKey: "AIzaSyAogyHLDyWoAqUc9U60cyxrEeshRIS4m6g",
    authDomain: "lets-tweet-15c62.firebaseapp.com",
    projectId: "lets-tweet-15c62",
    storageBucket: "lets-tweet-15c62.appspot.com",
    messagingSenderId: "631485934974",
    appId: "1:631485934974:web:0cc883a9603489ab74d72f",
    measurementId: "G-P9H9XX3HG6"
  };

const app = initializeApp(firebaseConfig);

export default app;