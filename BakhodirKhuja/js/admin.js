const username = document.getElementById('username');
const password = document.getElementById('password');

submit.onclick = async function () {

	const response = await fetch('https://fruise.herokuapp.com/admin', {
		method: 'POST',
		body: JSON.stringify(
			{
    			Name : user.value,
    			Password : password.value
	}
			),
	})

	if (response.status === 201) {
		window.location = '../data.html'
		console.log('Logged in!', response)
	} else {
		console.log('Could not Log in!', response)
		
	}

	user.value = null
	password.value = null
}