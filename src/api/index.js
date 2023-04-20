import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
import {  collection, getDocs,  where, query  } from "firebase/firestore/lite";


const firebaseConfig = {
    apiKey: process.env.REACT_APP_PROD_API_KEY,
    authDomain: "yoga-mangala.firebaseapp.com",
    projectId: "yoga-mangala",
    storageBucket: "yoga-mangala.appspot.com",
    messagingSenderId: "137752975736",
    appId: "1:137752975736:web:dd24beb084f90b5abdd08d",
    measurementId: "G-9E7ZLQW45W"
};


const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);


export const plansCol = "plans"
export const calendarCol = "calendar"
export const businessCol = "business"
export const teachersCol = "teachers"

export const findAllItems = async (itemCol) => {
    const col = collection(database, itemCol);
    const snap = await getDocs(col);
    const result = snap.docs.map(doc => {return {...doc.data(), id: doc.id}});
    return result;
};


export const findClasses = async () => {
    const col = collection (database, calendarCol);
    const q = query(col, where("date", "in", getDatesOfWeek()));
    const snap = await getDocs(q);
    const result = snap.docs.map(doc => {return {...doc.data(), id: doc.id}} )
    return result;
};


const getDatesOfWeek = () => {
    const currentDate = new Date();
    const dayOfWeek = currentDate.getDay();
    const sunday = new Date(currentDate.getTime() - dayOfWeek * 24 * 3600 * 1000);
    const dates = [];
    for (let i = 0; i < 7; i++) {
        const date = new Date(sunday.getTime() + i * 24 * 3600 * 1000);
        const day = date.getDate();
        const month = date.getMonth() + 1;
        const year = date.getFullYear();
        const fullDate = `${day < 10 ? "0" : ""}${day}/${month < 10 ? "0" : ""}${month}/${year}`;
        dates.push(fullDate);
    }
    return dates;
}
