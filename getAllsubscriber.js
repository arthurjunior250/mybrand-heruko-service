window.addEventListener("load", function () {
	if (!localStorage.getItem("token")) {
		window.location.href = "../sign-in/signin.html";
	}
});
const token =localStorage.getItem('token');
console.log(token)
const getSubscribers = async() => {
    let result = [];
    fetch('https://my-brand-endpoints.herokuapp.com/api/v1/newsletter', {
            method: "GET",
            headers: {"Content-type": "application/json", 
            "authorization": 'bearer '+token
          }
         
        })
        .then(response => response.json())
        .then(json => {
            result = json.data
            console.log(json.data)
            result?.length?
                document.querySelector("#arts").innerHTML = result.map((res) =>
                    `
          <ul>
          <li id="Title"><strong class='phone'>Email: </strong>${res?.email}</li>
          <li><button style="background-color: black;" id="delete__btn" onclick="deleteSubscriber('${res._id}')">Delete</button></li>
      </ul>
      <hr>
      `
                ).join("") :
                document.querySelector("#blog__card").innerHTML = `<img style="width:150%;"src="https://c.tenor.com/tEBoZu1ISJ8AAAAC/spinning-loading.gif" alt="spinner">`
        })
        .catch(err => console.log(err));
}
getSubscribers();

function deleteSubscriber (sub) {
      const id =sub;
fetch(`https://my-brand-endpoints.herokuapp.com/api/v1/newsletter/${id}`, {
    method: 'DELETE',
    headers: {"Content-type": "application/json", 
    "authorization": 'bearer '+token
     }
})
.then(function (response) {
    swal({
        title: "Good Job!",
        text: "Email Deleted",
        icon: "success",
        button: "OK!",
      }).then(() => {
        location.reload();
       });
        console.log(response);
     })
}


function logout(){
	localStorage.clear();
	location.href="../sign-in/signin.html"
}


