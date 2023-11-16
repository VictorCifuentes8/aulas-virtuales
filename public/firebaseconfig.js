const { getFirestore } = require("firebase/firestore");
const { initializeApp } = require("firebase/app");
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDzueXvky2hjuaB8jWK_FfXVH8d4ZZzjQE",
  authDomain: "uniquindiodb.firebaseapp.com",
  projectId: "uniquindiodb",
  storageBucket: "uniquindiodb.appspot.com",
  messagingSenderId: "885316349020",
  appId: "1:885316349020:web:d8eee2984dffa984fbca99"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);


module.exports = { db };


