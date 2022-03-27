const form = document.querySelector("form");
nField = form.querySelector(".names"),
nInput = nField.querySelector("input"),
eField = form.querySelector(".email"),
eInput = eField.querySelector("input"),
pField = form.querySelector(".password"),
pInput = pField.querySelector("input");

form.onsubmit = (e)=>{
  e.preventDefault(); //preventing from form submitting
  //if email and password is blank then add shake class in it else call specified function
  (eInput.value == "") ? eField.classList.add("shake", "error") : checkEmail();
  (pInput.value == "") ? pField.classList.add("shake", "error") : checkPass();
  (nInput.value == "") ? nField.classList.add("shake", "error") : checkName();

  setTimeout(()=>{ //remove shake class after 500ms
    eField.classList.remove("shake");
    pField.classList.remove("shake");
    nField.classList.remove("shake");
  }, 500);

  eInput.onkeyup = ()=>{checkEmail();} //calling checkEmail function on email input keyup
  pInput.onkeyup = ()=>{checkPass();} //calling checkPassword function on pass input keyup
  nInput.onkeyup = ()=>{checkName();}

  
  //if eField and pField doesn't contains error class that mean user filled details properly
  if(!eField.classList.contains("error") && !pField.classList.contains("error")  && !nField.classList.contains("error")){
    window.location.href = form.getAttribute("action"); //redirecting user to the specified url which is inside action attribute of form tag
  }
}
