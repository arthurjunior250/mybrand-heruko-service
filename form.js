// //Initialize Firebase 
// firebase.initializeApp(firebaseConfig);
// var firestore = firebase.firestore()

// //Variable to access database collection
// const db = firestore.collection("store")

// //Get Submit Form
// let submitButton = document.getElementById('submit')

// //Create Event Listener To Allow Form Submission
// submitButton.addEventListener("click", (e) => {
//     //Prevent Default Form Submission Behavior
//     e.preventDefault()

//     //Get Form Values
//     let names = document.getElementById('contact-name').value
//     let email = document.getElementById('contact-email').value
//     let message = document.getElementById('contact-message').value

//     //Save Form Data To Firebase
//     db.doc().set({
//         Names: names,
//         Email: email,
//         Message: message
//     }).then(() => {
//         console.log("Data saved")
//     }).catch((error) => {
//         console.log(error)
//     })

//     //alert
//    
// })


// CREATE CONTACT INFO

const createContact = (event) => {
    event.preventDefault()

    const fullname = document.getElementById("contact-name")
    const email = document.getElementById("contact-email")
        // const subject = document.getElementById("subject")
    const message = document.getElementById("contact-message")

    db.collection("formData")
        .add({
            Name: fullname.value,
            Email: email.value,
            Message: message.value,
        })
        .then((message) => {
            console.log(message)
        })
        .catch((error) => {
            console.log(error)
        })
    fullname.value = ""
    email.value = ""
    message.value = ""
    alert("Your Form Has Been Submitted Successfully");
}
document.getElementById("submit").addEventListener("click", createContact)