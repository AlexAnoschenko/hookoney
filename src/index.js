import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCuerGBewQkdfa3k_3uLI3ope4RaT_sizI",
  authDomain: "hookoney-c50a4.firebaseapp.com",
  databaseURL:
    "https://hookoney-c50a4-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "hookoney-c50a4",
  storageBucket: "hookoney-c50a4.appspot.com",
  messagingSenderId: "142885839129",
  appId: "1:142885839129:web:a4100b51132c461bc66588",
  measurementId: "G-X5JRQNLG1S",
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
