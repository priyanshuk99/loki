import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCrAVe7fmYd6HSRfIahdKZ-ZYkiY-Odkac",
  authDomain: "loki-9c245.firebaseapp.com",
  databaseURL: "https://loki-9c245.firebaseio.com",
  projectId: "loki-9c245",
  storageBucket: "loki-9c245.appspot.com",
  messagingSenderId: "415094901110",
  appId: "1:415094901110:web:d65bab48a8c02ff2fcd257",
  measurementId: "G-Y943XX8MEC",
};
const fire = firebase.initializeApp(firebaseConfig);

export default fire;
