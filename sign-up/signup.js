
async function addUser() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("Pass").value;
    const username = document.getElementById("Uname").value;
    const role = "standard-user";

    try {
        const SignUp = await fetch("https://my-brand-endpoints.herokuapp.com/api/v1/authentication/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                userName: username,
                role: role,
                email: email,
                password: password,
            }),
        });
        response = await SignUp.json();
        if (SignUp.status == 201) {
            swal({
                title: "Good Job!",
                text: "User Created",
                icon: "success",
                button: "OK!",
              }).then(() => {
                window.location.href = "../sign-in/signin.html";
               });
      
        } else {
            swal("Error", response.message, "error");
                }
      
    } catch (error) {
        swal("Error", response.message, "error");
    }
}