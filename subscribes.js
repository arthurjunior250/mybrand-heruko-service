async function subNewsletter() {
    const email = document.getElementById("body-email").value;
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
                    email: email,
                }),
            });
            response = await subscribeToNewsletter.json();
            if (subscribeToNewsletter.status == 201 && response.data) {
                alert("successful subscribed")
            } else {
                alert("Email Exists");
                email.value = "";
            }
        } catch (error) {
            alert("error");
        }
    }
}