import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./Components/App";
import * as firebase from "firebase";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAT8gVCYiuNWhYfsiZWaIPlcoFzU7ur_6A",
  authDomain: "shopping-site-2f091.firebaseapp.com",
  databaseURL: "https://shopping-site-2f091.firebaseio.com",
  projectId: "shopping-site-2f091",
  storageBucket: "shopping-site-2f091.appspot.com",
  messagingSenderId: "316192273235",
  appId: "1:316192273235:web:f812d48803b13029b4e7a6",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
