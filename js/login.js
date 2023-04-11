const loginFormHandler = async (event) => {
    event.preventDefault();

    const email = document.querySelector('#email').value.trim();
    const password = document.querySelector('#password').value.trim();

    if (email && password) {
        const response = await fetch('/api/login', {
            method: 'POST',
            body: JSON.stringify({ email, password }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            //pretty sure this is the route we'll be using, but double check
            document.location.replace('/profile');
        } else {
            console.log(response.statusText);
        }
    }
};

const signupFormHandler = async (event) => {
    event.preventDefault();

    const firstName = document.querySelector('#firstName').value.trim();
    const lastName = document.querySelector('#lastName').value.trim();
    const email = document.querySelector('#email').value.trim();
    const password = document.querySelector('#password').value.trim();

    if (firstName && lastName && email && password) {
        const response = await fetch('/api/signup', {
            method: 'POST',
            body: JSON.stringify({ firstName, lastName, email, password }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            //pretty sure this is the route we'll be using, but double check
            document.location.replace('/profile');
        } else {
            console.log(response.statusText);
        }
    }
};

document
    .querySelector('#login')
    .addEventListener('submit', loginFormHandler);

document
    .querySelector('#signup')
    .addEventListener('submit', signupFormHandler);