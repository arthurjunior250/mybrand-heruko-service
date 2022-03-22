// async function sendQuery() {
//     const names = document.getElementById("contact-name").value;
//     const email = document.getElementById("contact-email").value;
//     const message = document.getElementById("contact-message").value;
//     if (names == "") {
//         alert("Please fill in the name");
//     } else if (email == "") {
//         alert("Please fill in the email");
//     } else if (message == "") {
//         alert("Error", "Please fill in the subject");
//     } else {
//         try {
//             const sendQ = await fetch("https://my-brand-endpoints.herokuapp.com/api/v1/newsletter", {
//                 method: "POST",
//                 headers: {
//                     "Content-Type": "application/json",
//                 },
//                 body: JSON.stringify({
//                     names: names,
//                     email: email,
//                     message: message,
//                 }),
//             });
//             response = await sendQ.json();
//             if (sendQ.status == 201 && response.data) {
//                 alert("Query sent successfully")
//             } else {
//                 alert("Query not sent");
//                 email.value = "";
//             }
//         } catch (error) {
//             alert("error");
//         }
//     }
// }

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
