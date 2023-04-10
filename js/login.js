const loginFormHandler = async (event) => {
    event.preventDefault();

    //Make sure to add in the relevent IDs or logins will not work!!
    const email = document.querySelector('').value.trim();
    const password = document.querySelector('').value.trim();

    if (email && password) {
        //"login" is a placeholder. Change it if we go with something else
        const response = await fetch('/login', {
            method: 'POST',
            body: JSON.stringify({ email, password }),
            headers: { 'Content-type': 'application/json' },
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

    //Once again, add the IDs once we know what they are or this will not work!!
    const name = document.querySelector('').value.trim();
    const email = document.querySelector('').value.trim();
    const password = document.querySelector('').value.trim();

    if (name && email && password) {
        //signup is a placeholder. Change it if we go with something else.
        const response = await fetch('/signup', {
            method: 'POST',
            body: JSON.stringify({ name, email, password }),
            headers: { 'content type': 'application/json' },
        });

        if (response.ok) {
            //pretty sure this is the route we'll be using, but double check
            document.location.replace('/profile');
        } else {
            console.log(response.statusText);
        }
    }
};

//Add in relevent IDs/classes once we know what they are
document
    .querySelector('#login')
    .addEventListener('submit', loginFormHandler);

document
    .querySelector('#signup')
    .addEventListener('submit', signupFormHandler);