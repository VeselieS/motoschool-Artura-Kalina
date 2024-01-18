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


firebase.initializeApp(firebaseConfig);

var query = firebase.database().ref('contactformmessages');

$('#text_phone').submit(function(e) {
    e.preventDefault();

    var newMessageRef = query.push();
    newMessageRef.set({
        name: document.getElementById('full_name').value.trim(),
        phone: document.getElementById('phone').value.trim(),
        date: document.getElementById('datetime-local').value.trim()
    });
});
