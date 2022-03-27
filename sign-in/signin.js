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
                swal({
                    title: "Good Job!",
                    text: "You are successfully logged in",
                    icon: "success",
                    button: "OK!",
                  }).then(() => {
                    location.href = "../SidebarMenu/dashboard.html";
                   });
              

            } 
            else if (response?.status === "success" && response?.data?.role==="standard-user") {
                localStorage.setItem("token", response?.token);
                localStorage.setItem("user", JSON.stringify(response));
                console.log(response?.token)
                swal({
                    title: "Good Job!",
                    text: "You are successfully logged in",
                    icon: "success",
                    button: "OK!",
                  }).then(() => {
                    location.href = "../userPage/index.html";
                   });
              

            }else {
                swal("Error", response.message, "error");
            }
        })
        .catch((error) => {
            swal("Error", response.message, "error");
        });
});

function checkEmail(){ //checkEmail function
    let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/; //pattern for validate email
    if(!eInput.value.match(pattern)){ //if pattern not matched then add error and remove valid class
      eField.classList.add("error");
      eField.classList.remove("valid");
      let errorTxt = eField.querySelector(".error-txt");
      //if email value is not empty then show please enter valid email else show Email can't be blank
      (eInput.value != "") ? errorTxt.innerText = "Enter a valid email address" : errorTxt.innerText = "Email can't be blank";
    }else{ //if pattern matched then remove error and add valid class
      eField.classList.remove("error");
      eField.classList.add("valid");
    }
  }

  function checkPass(){ //checkPass function
    if(pInput.value == ""){ //if pass is empty then add error and remove valid class
      pField.classList.add("error");
      pField.classList.remove("valid");
    }else{ //if pass is empty then remove error and add valid class
      pField.classList.remove("error");
      pField.classList.add("valid");
    }
  }