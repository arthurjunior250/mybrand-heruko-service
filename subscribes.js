async function subNewsletter() {
    const email = document.getElementById("body-email");
    if (email == "") {
        alert("Please fill in the email");
    } else {
        try {
            const subscribeToNewsletter = await fetch("https://my-brand-endpoints.herokuapp.com/api/v1/newsletter", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email: email.value,
                }),
            });
            response = await subscribeToNewsletter.json();
            if (subscribeToNewsletter.status == 201 && response.data) {
                swal({
                    title: "Good job!",
                    text: "Subscribed Successfully",
                    icon: "success",
                    button: "OK",
                  }).then(() => {
                    location.reload();
                   });
            
            } else {
                swal({
                    title: "Oops!",
                    text: "Email Exists",
                    icon: "error",
                    button: "OK!",
                  }).then(() => {
                    location.reload();
                   });
            }
        } catch (error) {
            swal("Error", response.message, "error");
        }
    }
}