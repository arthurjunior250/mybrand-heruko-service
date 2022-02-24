//Unique Firebase Object
var firebaseConfig = {
    apiKey: "AIzaSyDrqhnegwvfdL3t2rsDdm0q8I4LQ7vkcuY",
    authDomain: "form-7b345.firebaseapp.com",
    projectId: "form-7b345",
    storageBucket: "form-7b345.appspot.com",
    messagingSenderId: "918366526643",
    appId: "1:918366526643:web:f1c530485a12662fc624c6"
};

//Initialize Firebase 
firebase.initializeApp(firebaseConfig);
var firestore = firebase.firestore()

//Variable to access database collection
const db = firestore.collection("formData")

//Get Submit Form
let submitButton = document.getElementById('submit')

//Create Event Listener To Allow Form Submission
submitButton.addEventListener("click", (e) => {
    //Prevent Default Form Submission Behavior
    e.preventDefault()

    //Get Form Values
    let names = document.getElementById('contact-name').value
    let email = document.getElementById('contact-email').value
    let message = document.getElementById('contact-message').value

    //Save Form Data To Firebase
    db.doc().set({
        Names: names,
        Email: email,
        Message: message
    }).then(() => {
        console.log("Data saved")
    }).catch((error) => {
        console.log(error)
    })

    //alert
    alert("Your Form Has Been Submitted Successfully")
})