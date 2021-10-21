statusBtn.onclick = async function () {

	const id = window.location.hash.substring(8)

	const response = await fetch('http://localhost:8050/cargo', {
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



	const response = await fetch('http://localhost:8050/cargo', {
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


// statusBtn.onclick = async function () {
// var myHeaders = new Headers();
// myHeaders.append("Content-Type", "application/json");
// var iddd = window.location.hash.substring(8)
// console.log(iddd)


// var raw = JSON.stringify({
//   "isdelivered": true,
//   "orderId": id1
// });

// var requestOptions = {
//   method: 'PATCH',
//   crossDomain: true,
//   headers: myHeaders,
//   body: raw,
//   redirect: 'follow',
//   // mode: 'no-cors'
// };

// fetch("http://localhost:8050/cargo", requestOptions)
//   .then(response => response.json())
//   .then(result => console.log(result))
//   .catch(error => console.log('error', error));
// } 