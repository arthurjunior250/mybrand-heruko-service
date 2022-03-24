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
			document.getElementById("email").innerHTML =result.email;
            document.getElementById("role-info").innerHTML =result.role;
            document.getElementById("email-info").innerHTML =result.email;
		})
		.catch((err) => console.log(err));
};
info();


function logout(){
	localStorage.clear();
	location.href="../sign-in/signin.html"
}