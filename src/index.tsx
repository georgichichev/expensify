import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { firebaseConfig } from "./config/firebase";
import { getFirestore } from "firebase/firestore/lite";
import { initializeApp } from "firebase/app";

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);
root.render(<App />);
