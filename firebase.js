import { initializeApp } from "firebase/app";
import { getFirestore, doc, setDoc } from "firebase/firestore";

const firebaseConfig = {
    apiKey: 'AIzaSyARyXonoH-SGkDWyuQPpaNqwFq3pb_m9fw',
    authDomain: "venicefreestylelab-4289d.firebaseapp.com",
    projectId: "venicefreestylelab-4289d",
    storageBucket: "venicefreestylelab-4289d.appspot.com",
    messagingSenderId: "1054088830254",
    appId: "1:1054088830254:web:9674e433585066aea46ebf",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

console.log(db);

/* items
    .map((item) => {
        item.tags = item.content
            .split(" ")
            .map((word) => {
                if (word.startsWith("#")) {
                    return word.replace("#", "").toLowerCase();
                }
            })
            .filter((tag) => tag != undefined);
        item.content = item.content.split(" ").filter(word => !word.startsWith("#")).join(" ").replace("Tag:", "").trim();
        return item;
    })
    .forEach(async (item, index) => {
        await setDoc(doc(db, "projects", index.toString()), item);
    }); */

export { db };
