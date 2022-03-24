function logout(){
	localStorage.clear();
	location.href="../sign-in/signin.html"
}


const DataId = location.search.substring(1);

const getArticle = async () => {
	let result = [];
	fetch("https://my-brand-endpoints.herokuapp.com/api/v1/blog/"+DataId, {
		method: "GET",
	})
		.then((response) => response.json())
		.then((json) => {
			result = json.data;
            document.getElementById("DataID").value = result._id;
			document.getElementById("imaging").src = result.image;
			document.getElementById("title-name").value = result.title;
			document.getElementById("body-message").value = result.description;
		})
		.catch((err) => console.log(err));
};
getArticle();

const token =localStorage.getItem('token');
// Update Article
async function updateArticle() {
    const docId = document.getElementById("DataID").value;
	const image = document.getElementById("imaging").file[0];
	const title = document.getElementById("title-name").value;
	const description = document.getElementById("body-message").value;
	if (title == "") {
		alert("Please fill in the title");
	
	} else if (image == "") {
		alert("Please fill in the image");
	} else if (description == "") {
		alert("Please fill in the description");
	} else {
		try {
			const updateArticleD = await fetch("https://my-brand-endpoints.herokuapp.com/api/v1/blog/"+ docId, {
				method: "PUT",
                headers: {"Content-type": "application/json", 
                "authorization": 'bearer '+token
              },
				body: JSON.stringify({
					image: image,
					title: title,
					description: description,
				}),
			});
			response = await updateArticleD.json();
			console.log(docId);
			if (response.success && response.message) {
				alert("Article Updated")
                .then(() => {
					window.location.href = "../SidebarMenu/articles.html";
				});
			} else {
				alert("Not Updated");
			}
		} catch (error) {
			alert("Error");
		}
	}
}