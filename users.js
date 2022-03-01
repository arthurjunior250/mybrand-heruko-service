db.collection("subscriber")
    .orderBy("timestamp", "desc")
    .onSnapshot((blog) => {
        const data = blog.docs.map((doc) => ({ id: doc.id, data: doc.data() }))

        document.getElementById("arts").innerHTML = data

            .map(
                (blog) =>
                `
        
          <ul>
          <li>subscriber info</li>
          <li>${blog.data.Email}</li>
          <li>${moment(blog.data.CreatedAt).fromNow()}</li>
          <li><button style="background-color: black;" id="delete__btn" onclick="deleteBlog('${
            blog.id
          }')">Unsubscribe</button></li>
      </ul>
      <hr>
`
            )
            .join("")
    })

function getBlogId(id) {
    console.log(id)
    localStorage.setItem("blogId", JSON.stringify({ id }))

}

/// GET ID OF THE BLOG TO BE UPDATED

function getBlogToUpdate(id) {
    localStorage.setItem("blogToUpdate", JSON.stringify({ id }))
    db.collection("subscriber")
        .doc(id)
        .get()
        .then((doc) => {
            document.getElementById("Title").value = doc.data().Title
            tinymce.activeEditor.setContent(doc.data().Blog)
            document.getElementById("update__blog_btn").style.display = "inline-block"
        })
        .catch((error) => {
            console.log(error)
        })
}

// UPDATE BLOG

// document
//     .getElementById("update__blog_btn")
//     .addEventListener("click", updateBlog)

// UPDATE BLOG FUNCTION

// function updateBlog(event) {
//     event.preventDefault()
//     const id = JSON.parse(localStorage.getItem("blogToUpdate")).id

//     const blog__imgurl = document.getElementById("blog__imgurl").files[0]
//     const imageName = blog__imgurl.name
//     const blogRef = firebase.storage().ref(`Images/${imageName}`)

//     const uploadTask = blogRef.put(blog__imgurl)
//     const Title = document.getElementById("Title").value
//     const BlogText = tinymce.activeEditor.getContent()

//     uploadTask.on(
//         "state_changed",
//         (snapshot) => {
//             let progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100

//             document.getElementById("uploading__blog__process").innerHTML =
//                 "Upload is " + progress + "% done"

//             switch (snapshot.state) {
//                 case firebase.storage.TaskState.paused:
//                     console.log("uplaoding paused")
//                     break
//                 case firebase.storage.TaskState.running:
//                     console.log("uplaod is running")
//             }
//         },
//         (error) => {
//             console.log(error)
//         },
//         () => {
//             uploadTask.snapshot.ref.getDownloadURL().then((downloadedImage) => {
//                 db.collection("blogs")
//                     .doc(id)
//                     .set({
//                         Title: Title,
//                         ImageUrl: downloadedImage,
//                         Blog: BlogText,
//                         CreatedAt: Date.now(),
//                         timestamp: firebase.firestore.FieldValue.serverTimestamp(),
//                     }, {
//                         merge: true,
//                     })
//                     .then((blogs) => {
//                         console.log(blogs)
//                     })
//                     .catch((error) => {
//                         console.log(error)
//                     })
//             })
//         }
//     )
// }

// DELETING A BLOG

function deleteBlog(id) {
    db.collection("subscriber")
        .doc(id)
        .delete()
        .then(() => {
            console.log("Document successfully deleted!")
        })
        .catch((error) => {
            console.error("Error removing document: ", error)
        })
}