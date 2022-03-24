
const getBlogs = async() => {
    let result = [];
    fetch('https://my-brand-endpoints.herokuapp.com/api/v1/blog', {
            method: "GET",
        })
        .then(response => response.json())
        .then(json => {
            result = json.data
            console.log(json.data)

            result?.length ?
                document.querySelector("#blog__card").innerHTML = result.map((res) =>
                    `
      <div class="blog-sect">
               <img src=${res?.image} alt="blog">
            <a href="./blog.html?${res._id}" class="readMore">
        <h1> ${res?.title}</h1>
        </a>
       <p> ${res?.description?.slice(1,200)}</p>

      <div class="emoji1">
           <img src="../images/comment.png" alt="" srcset="">
             <img src="../images/like.png" alt="" srcset="">
         </div>
          </div>
      `
                ).join("") :
                document.querySelector("#blog__card").innerHTML = `<img style="width:150%;"src="https://c.tenor.com/tEBoZu1ISJ8AAAAC/spinning-loading.gif" alt="spinner">`
        })
        .catch(err => console.log(err));
}
getBlogs();



const getBlogIdi = (key) => {
    location.href = `../blogs/blog.html?id=${key}`;
}

function logout(){
	localStorage.clear();
	location.href="../../sign-in/signin.html"
}

