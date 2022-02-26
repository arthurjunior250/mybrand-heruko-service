// @ts-nocheck
//Get Submit Form
let submitButton = document.getElementById("submit")

//Create Event Listener To Allow Form Submission
submitButton.addEventListener("click", (e) => {
  //Prevent Default Form Submission Behavior
  e.preventDefault()

  //Get Form Values
  let names = document.getElementById("contact-name").value
  let email = document.getElementById("contact-email").value
  let message = document.getElementById("contact-message").value

  //Save Form Data To Firebase
  db.doc()
    .set({
      Names: names,
      Email: email,
      Message: message,
    })
    .then(() => {
      console.log("Data saved")
    })
    .catch((error) => {
      console.log(error)
    })

  //alert
  alert("Your Form Has Been Submitted Successfully")
})
