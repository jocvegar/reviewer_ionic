import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const config = require("../firebaseConfig.js");

const firebaseConfig = {
  apiKey: config.firebase.apiKey,
  authDomain: config.firebase.authDomain,
  projectId: config.firebase.projectId,
  storageBucket: config.firebase.storageBucket,
  messagingSenderId: config.firebase.messagingSenderId,
  appId: config.firebase.appId,
  measurementId: config.firebase.measurementId,
};

// init firebase
initializeApp(firebaseConfig);

// init firestore service
const db = getFirestore();
export default db;
