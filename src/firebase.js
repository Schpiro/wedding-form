import { initializeApp } from "firebase/app";
import { getFirestore, addDoc, collection } from "firebase/firestore";

// Your Firebase config (from Firebase Console)
const firebaseConfig = {
    apiKey: "AIzaSyCs6twqhkJu7my6zMG67uT88nctsbaRy4A",
    authDomain: "wedding-form-ba88e.firebaseapp.com",
    projectId: "wedding-form-ba88e",
    storageBucket: "wedding-form-ba88e.firebasestorage.app",
    messagingSenderId: "353674976835",
    appId: "1:353674976835:web:d3932368a874ff10557ef6"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export const saveFormData = async (data) => {
    try {
        await addDoc(collection(db, "formResponses"), data);
        console.log("Data saved");
    } catch (e) {
        console.error("Error saving data:", e);
    }
};