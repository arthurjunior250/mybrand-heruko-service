window.addEventListener("load", function () {
	if (!localStorage.getItem("token")) {
		window.location.href = "../sign-in/signin.html";
	}
});

const get = async () => {
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
			document.getElementById("email").innerHTML =result.email;
			document.getElementById("first_name").innerHTML =result.userName;

		})
		.catch((err) => console.log(err));
};
get();