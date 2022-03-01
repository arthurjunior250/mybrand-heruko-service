// @ts-nocheck
const CreateBlog = (event) => {
    event.preventDefault()

    // const blog__imgurl = document.getElementById("imaging").files[0]
    // const imageName = blog__imgurl.name
    // const blogRef = firebase.storage().ref(`Images/${imageName}`)

    // const uploadTask = blogRef.put(blog__imgurl)

    // var title = document.getElementById("title-name").value
    var email = document.getElementById("body-email").value

    db.collection("subscriber")
        .add({
            Email: email,
            CreatedAt: Date.now(),
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        })
        .then((subscriber) => {
            console.log(subscriber)
        })
        .catch((error) => {
            console.log(error)
        })

    email.value = "";
    alert(" Subscribed Successfully");

}

document.getElementById("sub").addEventListener("click", CreateBlog)