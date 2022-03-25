function checkAuthUser() {
	let user = localStorage.getItem("user");
	if (user) {
		user = JSON.parse(user);
		const role = user.data.role;
		const standardUser = "standard-user";
		if (role === standardUser) {
			console.log("User");
		} else if (role != standard-user) {
			window.location.href = "../index.html";
		} else {
			window.location.href = "../sign-in/signin.html";
		}
	} else {
		console.log("User");
	}
}
checkAuthUser();


function login(){
	swal({
        title: "Good job!",
        text: "You are successfully logged in!",
        icon: "success",
        button: "OK!",
      });
}