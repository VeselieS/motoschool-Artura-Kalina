// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAeP0WSBLFGa46yZv1w0u1TrISGWo9sGzs",
    authDomain: "motoschool-a8563.firebaseapp.com",
    databaseURL: "https://motoschool-a8563-default-rtdb.firebaseio.com",
    projectId: "motoschool-a8563",
    storageBucket: "motoschool-a8563.appspot.com",
    messagingSenderId: "102142234608",
    appId: "1:102142234608:web:431ae9b22f780399a0d735",
    measurementId: "G-896KGKBDMY"
    };



const app = initializeApp(firebaseConfig);
// Uncaught ReferenceError: firebase is not defined
// firebase.initializeApp(firebaseConfig);

// const app = initializeApp(firebaseConfig);

// var database = firebase.database();

function saveToFirebase(event) {
    var contactName = document.getElementById('full_name').value.trim();
    var contactPhone = document.getElementById('phone').value.trim();
    var contactDateTime = document.getElementById('datetime-local').value.trim();
    var msgId =  Math.floor(Math.random() * (999999 - 100000 + 1)) + 100000;

    writeMessageData(msgId, contactName, contactPhone, contactDateTime);

    // if (contactName.length > 0) {
    //     writeMessageData(msgId, contactName, contactPhone, contactDateTime);
    // }

    console.log('msgId: ' + msgId);
    return false;
};

function writeMessageData(msgId, name, phone, date) {
    firebase.database().ref('messages/' + msgId).set({
        username: name,
        phone: phone,
        date: date
    });
};