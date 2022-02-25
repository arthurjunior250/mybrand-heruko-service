const firebaseConfig = {
    apiKey: "AIzaSyDrqhnegwvfdL3t2rsDdm0q8I4LQ7vkcuY",
    authDomain: "form-7b345.firebaseapp.com",
    projectId: "form-7b345",
    storageBucket: "form-7b345.appspot.com",
    messagingSenderId: "918366526643",
    appId: "1:918366526643:web:f1c530485a12662fc624c6"
};
firebase.initializeApp(firebaseConfig);
let db = firebase.firestore();

function renderquestion(doc) {
    let nam = document.getElementById('user-name');
    let emai = document.getElementById('user-email');
    let message = document.getElementById('user-message')
    nam.innerHTML = doc.data().Names;
    emai.innerHTML = doc.data().Email;
    message.innerHTML = doc.data().Message;
}

// .........................get all data ................

function getalldataonce() {
    db.collection("formData").get().then((querySnapshot) => {
        var questions = [];
        querySnapshot.forEach(doc => {
            questions.push(doc.data());
            renderquestion(doc);

        });
        // console.log(querySnapshot);
        // console.log(questions);
        // console.log("hello")
        // document.getElementById('user-name').innerHTML = questions;
    });
    // window.onload = getalldataonce;
}