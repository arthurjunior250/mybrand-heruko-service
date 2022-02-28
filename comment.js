// @ts-nocheck

function renderquestion(doc) {
    let nam = document.getElementById("user-name")
    let emai = document.getElementById("user-email")
    let message = document.getElementById("user-message")
    nam.innerHTML = doc.data().Names
    emai.innerHTML = doc.data().Email
    message.innerHTML = doc.data().Message
}

// .........................get all data ................

function getalldataonce() {
    db.collection("formData")
        .get()
        .then((querySnapshot) => {
            var questions = []
            querySnapshot.forEach((doc) => {
                    questions.push(doc.data())
                    renderquestion(doc)
                })
                // console.log(querySnapshot);
                // console.log(questions);
                // console.log("hello");
                // document.getElementById('user-name').innerHTML = questions;
        })
        // window.onload = getalldataonce;
}


// function getalldataonce() {
//     db.collection("formData")
//         .orderBy("desc")
//         .onSnapshot((query) => {
//             const data = query.docs.map((doc) => ({ id: doc.id, data: doc.data() }))

//             document.getElementById("queries").innerHTML = data

//                 .map(
//                 (query) =>
//                 `
//             <ul>
//                 <li id="user-name">${query.data.Names}</li>
//                 <li id="user-email">${query.data.Email} </li>
//                 <li id="user-message">${query.data.Message} </li>
//             </ul>
//             <hr>
// `
//             )
//         })

//     getBlogId(id);
// }

// function getBlogId(id) {
//     console.log(id)
//     localStorage.setItem("blogId", JSON.stringify({ id }))
// }