function validateName() {

    var name = document.getElementById('contact-name').value;

    if (name.length == 0) {

        producePrompt('Name is required', 'name-error', 'red')
        return false;

    }

    if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {

        producePrompt('First and last name, please.', 'name-error', 'red');
        return false;

    }

    producePrompt('Valid', 'name-error', 'green');
    return true;

}

function validateEmail() {

    var email = document.getElementById('contact-email').value;

    if (email.length == 0) {

        producePrompt('Email Invalid', 'email-error', 'red');
        return false;

    }

    if (!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {

        producePrompt('Email Invalid', 'email-error', 'red');
        return false;

    }

    producePrompt('Valid', 'email-error', 'green');
    return true;

}

function validateForm() {
    if (!validateName() || !validatePhone() || !validateEmail() || !validateMessage()) {
        jsShow('submit-error');
        producePrompt('Please fix errors to submit.', 'submit-error', 'red');
        setTimeout(function() {
            jsHide('submit-error');
        }, 2000);
        return false;
    } else {

    }
}


function validateMessage() {
    var message = document.getElementById('contact-message').value;
    var required = 30;
    var left = required - message.length;

    if (left > 0) {
        producePrompt(left + ' more characters required', 'message-error', 'red');
        return false;
    }

    producePrompt('Valid', 'message-error', 'green');
    return true;

}

function validateForm() {
    if (!validateName() || !validatePhone() || !validateEmail() || !validateMessage()) {
        jsShow('submit-error');
        producePrompt('Please fix errors to submit.', 'submit-error', 'red');
        setTimeout(function() {
            jsHide('submit-error');
        }, 2000);
        return false;
    } else {

    }
}

function jsShow(id) {
    document.getElementById(id).style.display = 'block';
}

function jsHide(id) {
    document.getElementById(id).style.display = 'none';
}


function producePrompt(message, promptLocation, color) {

    document.getElementById(promptLocation).innerHTML = message;
    document.getElementById(promptLocation).style.color = color;

}