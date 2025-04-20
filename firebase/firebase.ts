import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCAloANbiH1lai_fIFJRoXJ88ozKiq_Z4A",
    authDomain: "designea-71fce.firebaseapp.com",
    projectId: "designea-71fce",
    storageBucket: "designea-71fce.firebasestorage.app",
    messagingSenderId: "181741453779",
    appId: "1:181741453779:web:287f158d00f89823cbaf26"
  };

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
