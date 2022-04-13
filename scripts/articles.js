const getBlogs = async() => {
    let result = [];
    fetch('https://my-brand-endpoints.herokuapp.com/api/v1/blog', {
            method: "GET",
        })
        .then(response => response.json())
        .then(json => {
            result = json.data
            console.log(json.data)

            result?.length?
                document.querySelector("#arts").innerHTML = result.map((res) =>
                    `
          <ul>
          <li><strong class='phone'>Time: </strong>${new Date(res.createdAt).toDateString()}</li>
          <li><strong class='phone'>Status: </strong>Published</li>
          <li id="Title"><strong class='phone'>Title: </strong>${res?.title}</li>
          <li><button style="background-color: black;" id="delete__btn" onclick="deleteBlog('${res._id}')">Delete  <a href="./updatearticle.html?${res._id}"></button><button style="background-color:black;" class="edit">Edit</button></a></li>
      </ul>
      <hr>
      `
                ).join("") :
                document.querySelector("#blog__card").innerHTML = `<img style="width:150%;"src="https://c.tenor.com/tEBoZu1ISJ8AAAAC/spinning-loading.gif" alt="spinner">`
        })
        .catch(err => console.log(err));
}
getBlogs();



const token =localStorage.getItem('token');
function deleteBlog (blog) {
      const id =blog;
fetch(`https://my-brand-endpoints.herokuapp.com/api/v1/blog/${id}`, {
    method: 'DELETE',
    headers: {"Content-type": "application/json", 
    "authorization": 'bearer '+token
     }
})
.then(function (response) {
    swal({
        title: "Good Job!",
        text: "Article Deleted",
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


window.addEventListener("load", function () {
	if (!localStorage.getItem("token")) {
		window.location.href = "../sign-in/signin.html";
	}
});