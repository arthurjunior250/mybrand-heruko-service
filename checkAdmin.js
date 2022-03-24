function checkAdmin() {
    let user = localStorage.getItem("user");
    if (user) {
        user = JSON.parse(user);
        const role = user.data.role;
        const admin = "admin";
        if (role === admin) {
          console.log("admin")
        } 
        else if (role != admin) {
            window.location.href = "../index.html";
        }else{
            window.location.href = "../sign-in/signin.html";
        }
    }else {
		console.log("Admin");
	}

}
checkAdmin();