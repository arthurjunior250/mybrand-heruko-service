
const image = document.getElementById("imaging");
const title = document.getElementById("title-name");
const description = document.getElementById("body-message");
const btnContact= document.getElementById("create");

btnContact.addEventListener("click", (e) => {
  e.preventDefault();
const token =localStorage.getItem('token');
  fetch(
    "https://my-brand-endpoints.herokuapp.com/api/v1/blog",
    {
      method: "POST",
      body: JSON.stringify({
        image: image.value,
        title: title.value,
        description:description.value,
      }),
      headers: {
        "Content-Type": "application/json",
        "authorization": 'bearer '+token
      },
    }
  )
    .then((response) => {
      console.log(response.statusText)
      if (response.status==201) {
      swal({
        title: "Good Job!",
        text: "Article Created",
        icon: "success",
        button: "OK!",
      }).then(() => {
        location.reload();
       });
    
    }  else{
      swal({
        title: "Oops!",
        text:response.statusText,
        icon: "error",
        button: "OK!",
      })
    }}
  )
    .catch((error) => {
      swal("Error", response.statusText, "error");
    });
});
function logout(){
	localStorage.clear();
	location.href="../sign-in/signin.html"
}

window.addEventListener("load", function () {
	if (!localStorage.getItem("token")) {
		window.location.href = "../sign-in/signin.html";
	}
});