import { collection, addDoc } from "firebase/firestore";
import {db} from "@/src/firebase/config";


export async function createMembroTest() {

    try{
        const docRef = await addDoc(collection(db, "membros"),{
            name: "José Silva",
            email: "jose.facanha@caseej.com",
            EJ: "CASE EJ"
        });
        console.log("Document written with ID: ", docRef.id);

        return docRef.id;
    }catch(e){
        console.log("Error", e.message);

    }
}