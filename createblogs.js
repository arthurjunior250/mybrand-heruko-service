// @ts-nocheck
const CreateBlog = (event) => {
  event.preventDefault()

  const blog__imgurl = document.getElementById("imaging").files[0]
  const imageName = blog__imgurl.name
  const blogRef = firebase.storage().ref(`Images/${imageName}`)

  const uploadTask = blogRef.put(blog__imgurl)

  var title = document.getElementById("title-name").value
  var message = document.getElementById("body-message").value

  uploadTask.on(
    "state_changed",
    (snapshot) => {
      let progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
      console.log("Upload is " + progress + "% done")

      switch (snapshot.state) {
        case firebase.storage.TaskState.paused:
          console.log("uplaoding paused")
          break
        case firebase.storage.TaskState.running:
          console.log("uplaod is running")
      }
    },
    (error) => {
      console.log(error)
    },
    () => {
      uploadTask.snapshot.ref.getDownloadURL().then((downloadedImage) => {
        db.collection("blogs")
          .add({
            Title: title,
            ImageUrl: downloadedImage,
            Blog: message,
            CreatedAt: Date.now(),
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
          })
          .then((blogs) => {
            console.log(blogs)
          })
          .catch((error) => {
            console.log(error)
          })
      })
    }
  )
}

document.getElementById("create").addEventListener("click", CreateBlog)
