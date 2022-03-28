
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

  function checkName(){ 
    let pattern = /^[A-Za-z]*\s{1}[A-Za-z]*$/; 
    if(!nInput.value.match(pattern)){ //if pattern not matched then add error and remove valid class
      nField.classList.add("error");
      nField.classList.remove("valid");
      let errorTxt = nField.querySelector(".error-txt");
      //if email value is not empty then show please enter valid email else show Email can't be blank
      (nInput.value != "") ? errorTxt.innerText = "Enter first-name and Last-name!" : errorTxt.innerText = "Username can't be blank";
    }else{ //if pattern matched then remove error and add valid class
      nField.classList.remove("error");
      nField.classList.add("valid");
    }
  }

  // function decodeToken() {
  //   let token = localStorage.getItem("token");
  //   var base64Url = token.split(".")[1];
  //   var base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
  //   var jsonPayload = decodeURIComponent(
  //     atob(base64)
  //       .split("")
  //       .map(function (c) {
  //         return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
  //       })
  //       .join("")
  //   );
  
  //   return JSON.parse(jsonPayload);
  // }