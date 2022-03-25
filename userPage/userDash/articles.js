const getBlogs = async() => {
    let result = [];
    fetch('https://my-brand-endpoints.herokuapp.com/api/v1/blog', {
            method: "GET",
        })
        .then(response => response.json())
        .then(json => {
            result = json.data
            console.log(json.data)

            result?.length?
                document.querySelector("#arts").innerHTML = result.map((res) =>
                    `
          <ul>
          <li><strong class='phone'>Time: </strong>${new Date(res.createdAt).toDateString()}</li>
          <li><strong class='phone'>Status: </strong>Published</li>
          <li id="Title"><strong class='phone'>Title: </strong>${res?.title}</li>
          <li id="Comment"><strong class='phone'>Comments: </strong>${res?.comments?.length}</li>
         
      </ul>
      <hr>
      `
                ).join("") :
                document.querySelector("#blog__card").innerHTML = `<img style="width:150%;"src="https://c.tenor.com/tEBoZu1ISJ8AAAAC/spinning-loading.gif" alt="spinner">`
        })
        .catch(err => console.log(err));
}
getBlogs();





