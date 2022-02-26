// @ts-nocheck
/*
 @role register user
*/
function addUser() {
  const email = document.getElementById("email").value
  const password = document.getElementById("Pass").value
  const first_name = document.getElementById("Uname").value
  // const last_name = document.getElementById('last_name').value;
  auth
    .createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      const user = userCredential.user
      // alert("User created successfully")
      saveUserProfile({ first_name, email })
      // window.location.href = "./index.html";
    })
    .catch((error) => {
      const errorCode = error.code
      const errorMessage = error.message
      alert("Error: " + errorMessage)
    })
}
/*
 @role register user
*/
function loginUser() {
  const email = document.getElementById("email").value
  const password = document.getElementById("Pass").value
  auth
    .signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      const user = userCredential.user
      localStorage.setItem("user", JSON.stringify(user))
      window.location.href = "../dasboard/dashboard.html"
    })
    .catch((error) => {
      const errorCode = error.code
      const errorMessage = error.message
      alert(errorMessage || "An error occurred")
    })
}

/*
 @role save user profile
*/
function saveUserProfile({ first_name, last_name, email }) {
  db.collection("users")
    .doc()
    .set({
      first_name,
      email,
      created_at: new Date(),
    })
    .then(() => {
      alert("You successfully created account")
      window.location.href = "../sign-in/signin.html"
    })
    .catch((error) => {
      alert(error?.message || "An error occurred")
    })
}

/*
 @role get profile
*/

// db.collection('blogs').orderBy("timestamp", "desc").onSnapshot((blog) => {
//     const data = blog.docs.map((doc) => ({ id: doc.id, data: doc.data() }))
//     console.log(data);
// })
