// // @ts-nocheck
// db.collection("blogs")
//     .orderBy("timestamp", "desc")
//     .onSnapshot((blog) => {
//         const data = blog.docs.map((doc) => ({ id: doc.id, data: doc.data() }))

//         document.getElementById("blog__card").innerHTML = data
//             .slice(0, 3)
//             .map(
//                 (blog) =>
//                 `
//           <div class="blog-sect">
//           <img src=${blog.data.ImageUrl} alt="blog">
//           <a href="./blogs/blog.html" onclick="getBlogId('${blog.id}')">
//           <h1>${blog.data.Title}</h1>
//           </a>
//           <p>${blog.data.Blog.substr(0,280)}</p>

//           <div class="emoji1">
//               <img src="./images/comment.png" alt="" srcset="">
//               <img src="./images/like.png" alt="" srcset="">
//           </div>
//           </div>
// `
//             )
//             .join("")
//     })

// function getBlogId(id) {
//     console.log(id)
//     localStorage.setItem("blogId", JSON.stringify({ id }))
// }


const getBlogs = async() => {
    let result = [];
    fetch('https://my-brand-endpoints.herokuapp.com/api/v1/blog', {
            method: "GET",
            // headers: { "Content-type": "application/json;charset=UTF-8" }
        })
        .then(response => response.json())
        .then(json => {
            result = json.data
            console.log(json.data)

            result?.length ?
                document.querySelector("#blog__card").innerHTML = result.slice(0, 3).map((res) =>
                    `
      <div class="blog-sect">
               <img src=${res?.image} alt="blog">
        <a href="./blogs/blog.html" onclick="getBlogId('${res._id}')">
        <h1> ${res?.title}</h1>
        </a>
       <p> ${res?.description?.slice(1,200)}</p>

      <div class="emoji1">
           <img src="./images/comment.png" alt="" srcset="">
             <img src="./images/like.png" alt="" srcset="">
         </div>
          </div>
      `
                ).join("") :
                document.querySelector(".row").innerHTML = `<img style="width:150%;"src="https://c.tenor.com/tEBoZu1ISJ8AAAAC/spinning-loading.gif" alt="spinner">`
        })
        .catch(err => console.log(err));
}
getBlogs();
