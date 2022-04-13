function validateE() {

    var emaili = document.getElementById('body-email').value;

    if (email.length == 0) {

        return false;

    }

    if (!emaili.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {

        return false;

    }

    return true;

}

function validatesub() {
    if (!validateE()) {
        jsShow('submit-error');
        producePrompt('Please fix errors to submit.', 'submit-error', 'red');
        setTimeout(function() {
            jsHide('submit-error');
        }, 2000);
        return false;
    } else {

    }
}