
const names = document.getElementById("contact-name").value;
const email = document.getElementById("contact-email").value;
const message = document.getElementById("contact-message").value;
const btnContact= document.getElementById("submit");
if (names == "") {
  swal("Error", "Please fill in the name", "error");
} else if (email == "") {
  swal("Error", "Please fill in the email", "error");
} else if (message == "") {
  swal("Error", "Please fill in the message", "error");
} else {
btnContact.addEventListener("click", (e) => {
  e.preventDefault();

  fetch(
    "https://my-brand-endpoints.herokuapp.com/api/v1/inquiry",
    {
      method: "POST",
      body: JSON.stringify({
        names: names,
        email: email,
        message:message,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    }
  )
    .then((response) => {
      console.log(response);
      swal({
        title: "Good job!",
        text: "Message Sent!",
        icon: "success",
        button: "Ok!",
      }).then(() => {
        location.reload();
       });
    })
    .catch((error) => {
      swal("Error", response.message, "error");
    });
});
}