import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCmZcuIfOy9Zs1DDa2T6DhIFMFamw7_oQY",
  authDomain: "notion-21370.firebaseapp.com",
  projectId: "notion-21370",
  storageBucket: "notion-21370.firebasestorage.app",
  messagingSenderId: "124879608462",
  appId: "1:124879608462:web:94574bd68624d86f6b47df",
  measurementId: "G-ZYGTBY3SVF",
  databaseURL: "https://notion-21370-default-rtdb.firebaseio.com/"
};

export const app = initializeApp(firebaseConfig);
