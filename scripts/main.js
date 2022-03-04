let el_form = document.querySelector('form');
let el_line = document.querySelector('#email_line')
let el_email = document.querySelector('input[name=email]');
let el_btn = document.querySelector('#email_line .btn');
let el_errorIcon = document.querySelector('#email_line .error-icon');
let el_errorMsg = document.querySelector('#email_line .error-msg');

el_email.addEventListener('focusin', (event) => {
    el_line.classList.add('form-line--high');
    el_btn.classList.add('btn--high');
    el_errorMsg.classList.add('error-msg--high');
});

el_email.addEventListener('focusout', (event) => {
    if (el_email.value) {
        if (validationEmail(el_email.value)) {
            el_line.classList.remove('form-line--high');
            el_btn.classList.remove('btn--high');
            el_errorMsg.classList.remove('error-msg--high');
            
        }
    }else {
        el_line.classList.remove('form-line--high');
        el_btn.classList.remove('btn--high');
        el_errorMsg.classList.remove('error-msg--high');

    }
});

el_form.addEventListener('submit', (event) => {
    if (el_email.value) {
        if (validationEmail(el_email.value)) {
            hideError();
            el_email.value = "";
            console.log('Submit ! ');
        }else {
            // Stop submit form
            event.preventDefault();
            showError();
        }
    }
});

function validationEmail(email) {
    let regex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');
    
    return regex.test(email);
}

function showError() {
    el_errorIcon.style.display = 'block';
    el_errorMsg.style.display = 'block';
    el_line.classList.add('form-line--error');
    
}

function hideError() {
    el_errorIcon.style.display = 'none';
    el_errorMsg.style.display = 'none';
    el_line.classList.remove('form-line--error');

}