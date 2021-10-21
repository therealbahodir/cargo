statusBtn.onclick = async function () {

	const id = window.location.hash.substring(8)

	const response = await fetch('https://fruise.herokuapp.com/cargo', {
		method: 'POST',
		body: JSON.stringify({
    							"id" : id
}),
	})
 
	if (response.status === 202) {

		console.log('Created!', response)
	}

	
	window.location = '../data.html'
}

deleteBtn.onclick = async function () {

	const iddd = window.location.hash.substring(8)



	const response = await fetch('https://fruise.herokuapp.com/cargo', {
		method: 'DELETE',
		body: JSON.stringify({
    							"id" : iddd
}),
	})

	if (response.status === 202) {

		console.log('Deleted!', response)
	}

		window.location = '../data.html'


}	

