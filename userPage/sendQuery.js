
const names = document.getElementById("contact-name");
const email = document.getElementById("contact-email");
const message = document.getElementById("contact-message");
const btnContact= document.getElementById("submit");

btnContact.addEventListener("click", (e) => {
  e.preventDefault();

  fetch(
    "https://my-brand-endpoints.herokuapp.com/api/v1/inquiry",
    {
      method: "POST",
      body: JSON.stringify({
        names: names.value,
        email: email.value,
        message:message.value,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    }
  )
    .then((response) => {
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


