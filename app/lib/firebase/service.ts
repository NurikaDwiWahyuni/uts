import { getFirestore, collection, doc, getDoc, getDocs } from "firebase/firestore";
import { app } from "./init"; // Pastikan init.ts memiliki export untuk app

const firestoreInstance = getFirestore(app); // Ganti nama variabel firestore menjadi firestoreInstance

export async function retrieveData(collectionName:string) {
    const snapshot = await getDocs(collection(firestoreInstance, collectionName));
    const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
    }));
    return data;
}

export async function retrieveDataByI(collectionName:string, id:string) {
    const snapshot = await getDoc(doc(firestoreInstance, collectionName, id));
    const data = snapshot.data();
    return data;
}
