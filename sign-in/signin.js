// document.getElementById("log").addEventListener("click", (event) => {
//         event.preventDefault()
//         let email = document.getElementById("email").value;
//         let password = document.getElementById("Pass").value;

//         axios.post("https://my-brand-endpoints.herokuapp.com/api/v1/authentication/login", { email: email, password: password }).then((user) => {
//             // console.log(user ? .data ? .token)
//             localStorage.setItem("token", `Bearer ${user?.data?.token}`);
//             if (response.data.role == "admin") {
//                 location.href = '../SidebarMenu/dashboard.html';
//             } else {
//                 alert("invalid email and password");
//             }
//         }).catch((error) => {
//             console.log(error)
//         })
//     })
// async function loginUser() {
//     const email = document.getElementById("email").value;
//     const password = document.getElementById("Pass").value;
//     try {
//         const SignIn = await fetch("https://my-brand-endpoints.herokuapp.com/api/v1/authentication/login", {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json",
//             },
//             body: JSON.stringify({
//                 email: email,
//                 password: password,
//             }),

//         });
//         response = await SignIn.json();
//         if (SignIn.status == 200 && response.data) {

//             alert("successful logged in").then(() => {
//                 localStorage.setItem("token", "Bearer " + response.token);
//                 localStorage.setItem("User", JSON.stringify(response.data));
//                 console.log(response.data.role)
//                 if (response.data.role == "admin") {
//                     window.location.href = "../SidebarMenu/dashboard.html";
//                 }
//             });
//         } else {
//             window.location.href = "../SidebarMenu/dashboard.html";
//         }
//     } catch (error) {
//         alert("failed to login");
//     }
// }

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
            if (response?.status === "success" && email.value === arthurEmail) {
                alert("success")
                localStorage.setItem("token", response?.token);
                localStorage.setItem("user", JSON.stringify(response));
                console.log(response?.token)
                location.href = "../SidebarMenu/dashboard.html";

            } else {
                alert("Unauthorised user")
                location.href = "./signin.html";
            }
        })
        .catch((error) => {
            console.log(error);
        });
});
