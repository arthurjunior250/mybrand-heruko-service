
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
      // console.log("Success")
      console.log(response);
     alert('message sent')
    })
    .catch((error) => {
      console.log(error);
    });
});
