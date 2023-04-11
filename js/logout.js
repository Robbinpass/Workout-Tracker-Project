const logout = async () => {
    //"logout" is a placeholder. Replace it if we go with something else
    const response = await fetch('/api/logout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
        document.location.replace('/');
    } else {
        console.log(response.statusText);
    }
};

//"logout" is technically a placeholder, but it's probably what we'll be going with. Still, double check.
document.querySelector('#logout').addEventListener('click', logout);