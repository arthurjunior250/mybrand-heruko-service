
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
alert("blog created")
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
});


function logout(){
	localStorage.clear();
	location.href="../sign-in/signin.html"
}