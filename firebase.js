import { initializeApp } from "firebase/app";
import { getFirestore, doc, setDoc } from "firebase/firestore";

const firebaseConfig = {
    apiKey: process.env.FIREBASE_KEY,
    authDomain: "venicefreestylelab-4289d.firebaseapp.com",
    projectId: "venicefreestylelab-4289d",
    storageBucket: "venicefreestylelab-4289d.appspot.com",
    messagingSenderId: "1054088830254",
    appId: "1:1054088830254:web:9674e433585066aea46ebf",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

/* import items from "./items";

items.forEach(async (item, index) => {
    await setDoc(doc(db, "projects", index.toString()), {...item, id: index});
}); */

export { db };
