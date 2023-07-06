import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBFQPVaFYgoqJUJWd44om6Usb4jRLjiWtw",
  authDomain: "fc-test1.firebaseapp.com",
  projectId: "fc-test1",
  storageBucket: "fc-test1.appspot.com",
  messagingSenderId: "662293010925",
  appId: "1:662293010925:web:ad3107010c7815a6f16fe4",
};

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);

export { db };
