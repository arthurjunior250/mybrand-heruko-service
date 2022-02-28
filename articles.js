db.collection("blogs")
    .orderBy("timestamp", "desc")
    .onSnapshot((blog) => {
        const data = blog.docs.map((doc) => ({ id: doc.id, data: doc.data() }))

        document.getElementById("arts").innerHTML = data

            .map(
                (blog) =>
                `
        
          <ul>
          <li>${moment(blog.data.CreatedAt).fromNow()}</li>
          <li>Published</li>
          <li>${blog.data.Title}</li>
          <li><button style="background-color: black;">Delete</button><button style="background-color:black;" class="edit">Edit</button></li>
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