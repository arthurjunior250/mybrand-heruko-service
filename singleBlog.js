// @ts-nocheck
const id = JSON.parse(localStorage.getItem("blogId")).id

db.collection("blogs")
  .doc(id)
  .get()
  .then((doc) => {
    console.log(doc.data())

    const blog = {
      id: doc.id,
      data: doc.data(),
    }

    document.getElementById("blog__info").innerHTML = `   <div class="blog-pic">
        <img src=${blog.data.ImageUrl} alt="" srcset="" />
        <p>Author: ARTHUR JUNIOR</p>
        <p>Posted: ${moment(blog.data.CreatedAt).fromNow()}</p>
      </div>
      <div class="blog-info">
        <h1>BLOG NAME</h1>
        <p>
        ${blog.data.Blog}
        </p>
        <h1>DESCRIPTION</h1>
        <p>
            ${blog.data.Blog}
        </p>
        <br />
        
        <p>
           ${blog.data.Blog}
        </p>
        <hr />
        <h1>COMMENTS</h1>
        <div class="comments">
          <img src="../images/218005602.jpg" alt=" " srcset="" />
          <div class="comment1">
            <h1>ARTHUR JUNIOR,</h1>
            <p>09-FEB-2022</p>

            <p class="lorem">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor
              platea magna nunc pretium nulla condimentum. Habitasse sed nisl
              imperdiet semper libero, leo, sapien. In consectetur lacus
              sagittis aliquam. Aenean felis et cursus mi, neque pharetra.
            </p>
          </div>
        </div>
      </div>
      <hr />
      <h1 class="leave">LEAVE A COMMENT</h1>
      <div class="form">
        <form>
          <input
            type="text"
            placeholder="Enter Your name.."
            id="contact-name"
            required
            onkeyup="validateName()"
          />
          <span class="error-message" id="name-error"></span>
          <input
            type="text"
            placeholder="Enter Your Email.."
            id="contact-email"
            required
            onkeyup="validateEmail()"
          />
          <span class="error-message" id="email-error"></span>
          <textarea
            placeholder="Enter Your Comments.."
            style="height: 200px"
            id="contact-message"
            onkeyup="validateMessage()"
            required
          ></textarea>
          <span class="error-message" id="message-error"></span>
          <input type="submit" value="Submit" onclick="return validateForm()" />
          <span class="error-message" id="submit-error"></span>
        </form>`
  })
  .catch((error) => {
    console.log(error)
  })
