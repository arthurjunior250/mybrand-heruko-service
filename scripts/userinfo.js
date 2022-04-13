window.addEventListener("load", function () {
	if (!localStorage.getItem("token")) {
		window.location.href = "../sign-in/signin.html";
	}
});
const token =localStorage.getItem('token');
const info = async () => {
	let result = [];
	fetch("https://my-brand-endpoints.herokuapp.com/api/v1/authentication/user-profile", {
		method: "GET",
        headers: {"Content-type": "application/json", 
        "authorization": 'bearer '+token
      }
	})
		.then((response) => response.json())
	
		.then((json) => {
			
			result = json.data;
			//header
			document.getElementById("email").innerHTML =result.email;
			document.getElementById("first_name").innerHTML =result.userName;
			//user-info
			document.getElementById("name-info").innerHTML =result.userName;
            document.getElementById("role-info").innerHTML =result.role;
            document.getElementById("email-info").innerHTML =result.email;
		})
		.catch((err) => console.log(err));
};
info();

// const info = async() => {
//     let result = [];
//     fetch('https://my-brand-endpoints.herokuapp.com/api/v1/authentication/user-profile', {
//             method: "GET",
// 			headers: {"Content-type": "application/json", 
// 			        "authorization": 'bearer '+token
// 		      }
//         })
//         .then(response => response.json())
//         .then(json => {
//             result = json.data
//             console.log(json.data)
// 			document.getElementById("email").innerHTML =result.email;
// 			document.getElementById("first_name").innerHTML =result.userName;
//             result?.length?
//                 document.getElementById("profile").innerHTML = result.map((res) =>
//                     `
// 					<p>names</p><h4 id="name-info">${res?.userName}</h4>
// 					<p>Role</p><h4 id="role-info">${res?.role}</h4>
// 					<p>Email</p> <h4 id="email-info">${res?.email}</h4>
// 					<a href="./blog.html?${res?._id}"> <button style="background-color: black; color: white; padding: 10px;">Edit</button></a> 
//       `
//                 ).join("") :
//                 document.getElementById("profile").innerHTML = `<img style="width:20%;"src="https://c.tenor.com/tEBoZu1ISJ8AAAAC/spinning-loading.gif" alt="spinner">`
//         })
//         .catch(err => console.log(err));
// }
// info();


// function logout(){
// 	localStorage.clear();
// 	location.href="../sign-in/signin.html"
// }
