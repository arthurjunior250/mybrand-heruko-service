const email = document.getElementById("email");
const password = document.getElementById("Pass");
const logginBtn = document.getElementById("log");
let arthurEmail = "arthurjunior@gmail.com";

logginBtn.addEventListener("click", async(e) => {
    e.preventDefault();

    await fetch(
            "https://my-brand-endpoints.herokuapp.com/api/v1/authentication/login", {
                crossDomain: true,
                method: "POST",
                body: JSON.stringify({
                    email: email.value,
                    password: password.value,
                }),
                headers: {
                    "Content-Type": "application/json",
                },
            }
        )
        .then((res) => res.json())
        .then((response) => {
            console.log(response?.status);
            console.log(response?.data?.role);
            if (response?.status === "success" && email.value === arthurEmail && response?.data?.role==="admin") {
                localStorage.setItem("token", response?.token);
                localStorage.setItem("user", JSON.stringify(response));
                console.log(response?.token)
                location.href = "../SidebarMenu/dashboard.html";

            } 
            else if (response?.status === "success" && response?.data?.role==="standard-user") {
                localStorage.setItem("token", response?.token);
                localStorage.setItem("user", JSON.stringify(response));
                console.log(response?.token)
                location.href = "../userPage/index.html";

            }else {
                alert("Unauthorised user")
                location.href = "./signin.html";
            }
        })
        .catch((error) => {
            console.log(error);
        });
});
