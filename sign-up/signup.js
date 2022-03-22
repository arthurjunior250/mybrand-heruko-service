// document.getElementById("log").addEventListener("click", (event) => {
//     event.preventDefault();

//     const username = document.getElementById('Uname');
//     const email = document.getElementById('email');
//     const password = document.getElementById('Pass');

//     let data = {
//         userName: "arthur junior",
//         email: "hello123@gmail",
//         password: 1234567
//     }
//     console.log(data)
//     signupFunction(data)
// })

// const signupFunction = (data) => {
//     fetch("https://my-brand-endpoints.herokuapp.com/api/v1/authentication/signup", {
//             method: 'POST',
//             body: JSON.stringify(data),
//         }).then(response => response.json())
//         .then(json => console.log(json))
//         .catch(err => console.log(err))
//     alert("not registered");

// };

async function addUser() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("Pass").value;
    const username = document.getElementById("Uname").value;
    const role = "admin";

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
        if (SignUp.status == 201 && response.data) {
            alert("success").then(() => {
                localStorage.setItem("token", "Bearer " + response.token);
                localStorage.setItem("user", JSON.stringify(response.data));
                if (response.data.role == "admin") {
                    window.location.href = "../sign-in/signin.html";
                } else {
                    window.location.href = "../index.html";
                }
            });
        } else {
            alert("User Created");
            window.location.href = "../sign-in/signin.html";
        }
    } catch (error) {
        alert("not registered");
    }
}