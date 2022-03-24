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

		})
		.catch((err) => console.log(err));
};
get();