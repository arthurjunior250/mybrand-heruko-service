db.collection("blogs")
    .orderBy("timestamp", "desc")
    .onSnapshot((blog) => {
        const data = blog.docs.map((doc) => ({ id: doc.id, data: doc.data() }))

        document.getElementById("blog__card").innerHTML = data

            .map(
                (blog) =>
                `
          <div class="blog-sect">
          <img src=${blog.data.ImageUrl} alt="blog">
          <a href="../blogs/blog.html" onclick="getBlogId('${blog.id}')">
          <h1>${blog.data.Title}</h1>
          </a>
          <p>${blog.data.Blog}</p>

          <div class="emoji1">
              <img src="../images/comment.png" alt="" srcset="">
              <img src="../images/like.png" alt="" srcset="">
          </div>
          </div>
`
            )
            .join("")
    })

function getBlogId(id) {
    console.log(id)
    localStorage.setItem("blogId", JSON.stringify({ id }))
}