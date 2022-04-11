window.addEventListener("load", function () {
	if (!localStorage.getItem("token")) {
		window.location.href = "../sign-in/signin.html";
	}
});
const blogs = async () => {
	let result = [];
	fetch("https://my-brand-endpoints.herokuapp.com/api/v1/blog", {
		method: "GET",
	})
		.then((response) => response.json())
		.then((json) => {
			result = json.data;
			document.getElementById("art").innerHTML =result.length;

		})
		.catch((err) => console.log(err));
};
blogs();

const token =localStorage.getItem('token');
const users = async () => {
	let result = [];
	fetch("https://my-brand-endpoints.herokuapp.com/api/v1/authentication", {
		method: "GET",
        headers: {"Content-type": "application/json", 
        "authorization": 'bearer '+token
      }
	})
		.then((response) => response.json())
		.then((json) => {
			result = json.data;
			document.getElementById("users").innerHTML =result.length;

		})
		.catch((err) => console.log(err));
};
users();

const comment = async () => {
	let result = [];
	fetch("https://my-brand-endpoints.herokuapp.com/api/v1/inquiry", {
		method: "GET",
		headers: {"Content-type": "application/json", 
        "authorization": 'bearer '+token
      }
	})
		.then((response) => response.json())
		.then((json) => {
			result = json.data;
			document.getElementById("com").innerHTML =result.length;

		})
		.catch((err) => console.log(err));
};
comment();
const sub = async () => {
	let result = [];
	fetch("https://my-brand-endpoints.herokuapp.com/api/v1/newsletter", {
		method: "GET",
        headers: {"Content-type": "application/json", 
        "authorization": 'bearer '+token
      }
	})
		.then((response) => response.json())
		.then((json) => {
			result = json.data;
			document.getElementById("newsletter").innerHTML =result.length;

		})
		.catch((err) => console.log(err));
};
sub();




function logout(){
	localStorage.clear();
	location.href="../sign-in/signin.html"
}


