import { db } from "../firebase_app";
import {collection, addDoc,serverTimestamp} from 'firebase/firestore';


export default class MailService {
    // * Send Mail
    static async sendMail(email: string, subject: string, message: string, senderID: string, sender: string, reciever: string){
     try {
        const collctionRef = collection(db, "Mails");
        const p=   await  addDoc(collctionRef, {
                to: email, 
                subject,
                message,
                timestamp:  serverTimestamp(),
                senderID,
                sender,
                reciever
            });
            console.log(`Sent Mail Response ::::: ${p.id}`);
     } catch (error) {
        console.log(`Error Sending Mail:::: ${error}`)
     }
        
    }
}