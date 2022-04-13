
const DataId = location.search.substring(1);
const readMore = async () => {
	let result = [];
	fetch("https://my-brand-endpoints.herokuapp.com/api/v1/blog/"+DataId, {
		method: "GET",
	})
		.then((response) => response.json())
		.then((json) => {
			result = json.data;
			document.getElementById("img").src = result.image;
			document.getElementById("blogtitle").innerHTML = result.title;
			document.getElementById("blogdescription").innerHTML = result.description;
			document.getElementById("time").innerHTML =new Date(result.createdAt).toDateString();
            document.getElementById("author").innerHTML = "Author:Arthur Junior";
			document.getElementById("nofc").innerHTML = result.comments.length;
		
		})
		.catch((err) => console.log(err));
};
readMore();

//get all comments
const getComments = async () => {
	let result = [];
	fetch("https://my-brand-endpoints.herokuapp.com/api/v1/blog/" + DataId + "/comment", {
		method: "GET",
	})
		.then((response) => response.json())
		.then((json) => {
			result = json.data;
			result?.length
				? (document.querySelector(".comments").innerHTML = result
						.map(
							(res) => `
							
								<img src="../images/standard.png" alt=" " srcset="" />
								<div class="comment1">
  								<h1 id="cname">${
									res?.owner?.userName
								}</h1>
  								<p>${new Date(res.createdAt).toDateString()}</p>
								  <p class="lorem">${res?.comment}</p>
								</div>
							
								<hr>
								
							`
						)
						.join(""))
				: (document.querySelector(
						".comments"
				  ).innerHTML = `<h1>Not comment yet published</h1>`);
		})
		.catch((err) => console.log(err));
};
getComments();


//comment on blog
const token =localStorage.getItem('token');
const message = document.getElementById("contact-message").value;
const btnContact= document.getElementById("send");
btnContact.addEventListener("click", (e) => {
  e.preventDefault();
  fetch(
    "https://my-brand-endpoints.herokuapp.com/api/v1/blog/"+DataId+"/comment",
    {
      method: "POST",
      body: JSON.stringify({
        comment: message,
      }),
	  headers: {
        "Content-Type": "application/json",
        "authorization": 'bearer '+token
      },
    }

  )
    .then((response) => {
	if(response?.status===401){
		swal({
			title: "Oops!",
			text: "You are unauthorized user,Please login",
			icon: "error",
			button: "OK!",
		  }).then(() => {
			location.reload();
		   });
	}
	else if(response?.status===400){
		swal({
			title: "Oops!",
			text: "Bad Request",
			icon: "error",
			button: "OK!",
		  }).then(() => {
			location.reload();
		   });
	}else{
		swal({
			title: "woow!",
			text: "Comment Sent",
			icon: "success",
			button: "OK!",
		  }).then(() => {
			location.reload();
		   });
	}
      console.log(response);
    })

    .catch((error) => {
		swal("Error", response.message, "error");
    });
});
//	<button id="deletecomment" onclick="deleteCom(${res?._id})">Delete</button>
function deleteCom(comment){
	const id =comment;
	fetch(`https://my-brand-endpoints.herokuapp.com/api/v1/blog/comment${id}`, {
		method: 'DELETE',
		headers: {"Content-type": "application/json", 
		"authorization": 'bearer '+token
		 }
	})
	.then(function (response) {
		alert("Comment Deleted")
		location.reload();
			console.log(response);
})
}














