const form = document.getElementById('form');

form.addEventListener('submit', e => {
    e.preventDefault();
    const email = form['email'];
    const emailVal = email.value;
    const small = form.querySelector('small');
    //check valid email
    if (!emailVal) {
        email.classList.add('error');
        small.innerText = 'Email cannot be empty';
        small.style.display = 'inline-block';
    } else if (!validEmail(emailVal)) {
        email.classList.add('error');
        small.innerText = 'Email is not valid';
        small.style.display = 'inline-block';
    } else {
        email.classList.remove('error');
        small.style.display = 'none';
    }
});

function validEmail(emailVal) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(emailVal).toLowerCase());
}