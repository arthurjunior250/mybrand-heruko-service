const token =localStorage.getItem('token');
const getUsers = async() => {
    let result = [];
    fetch('https://my-brand-endpoints.herokuapp.com/api/v1/authentication', {
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
          <li><strong class='phone'>Role: </strong>${res?.role}</li>
          <li><strong class='phone'>Names: </strong>${res?.userName}</li>
          <li id="Title"><strong class='phone'>Email: </strong>${res?.email}</li>
          <li><button style="background-color: black;" id="delete__btn" onclick="deleteUser('${res._id}')">Delete</button></li>
      </ul>
      <hr>
      `
                ).join("") :
                document.querySelector("#blog__card").innerHTML = `<img style="width:150%;"src="https://c.tenor.com/tEBoZu1ISJ8AAAAC/spinning-loading.gif" alt="spinner">`
        })
        .catch(err => console.log(err));
}
getUsers();


function deleteUser (sub) {
    const id =sub;
fetch(`https://my-brand-endpoints.herokuapp.com/api/v1/authentication/${id}`, {
  method: 'DELETE',
  headers: {"Content-type": "application/json", 
  "authorization": 'bearer '+token
   }
})
.then(function (response) {
  swal({
    title: "Good Job!",
    text: "User Deleted",
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