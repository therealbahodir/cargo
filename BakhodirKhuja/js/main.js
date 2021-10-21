itemName.value = null
itemQuantity.value = null
totalValue.value = null
receiverName.value = null
receiverLastName.value = null
receiverPassport.value = null
receiverPhone.value = null
receiverAddress.value = null
receiverCity.value = null
comment.value = null
senderName.value = null
senderLastName.value = null
senderPhone.value = null
senderEmail.value = null
senderAddress.value = null
senderCity.value = null
senderPostcode.value = null


	
var today = new Date();

var twoDigitMonth=((today.getMonth()+1)>=10)? (today.getMonth()+1) : '0' + (today.getMonth()+1);  

var date =today.getDate() +'-'+ twoDigitMonth +'-'+today.getFullYear();

document.getElementById("date").value = date


submitBtn.onclick =  async function (){
	const cb = document.getElementById("isch");
	if (itemName.value != '' && itemQuantity.value != '' && totalValue.value != '' && receiverName.value != '' &&
		receiverLastName.value != '' && receiverPassport.value != '' && receiverPhone.value != '' && receiverAddress.value != '' &&
		receiverCity.value != '' && senderName.value != '' && senderLastName.value != '' && senderPhone.value != '' && senderEmail.value != '' &&
		senderAddress.value != '' && senderCity.value != '' && senderPostcode.value != ''  && cb.checked != false) {

	const xlar = []

	const x = document.querySelectorAll('#itemName')
	const z = document.querySelectorAll('#itemQuantity')

	var len = x.length
	var y = 0

	console.log(totalValue.value)
		console.log(senderLastName.value)


	while (y < len ) {

        xlar.push({name : x[y].value,quantity: z[y].value})
        y++;
	}

	console.log(senderLastName.value)

	const response = await fetch('https://fruise.herokuapp.com/declaration', {
		method: 'POST',
		body: JSON.stringify({
    receiverFirstName : receiverName.value,
    receiverLastName : receiverLastName.value,
    receiverPassport : receiverPassport.value,
    receiverPhone : receiverPhone.value,
    receiverAddress : receiverAddress.value,
    receiverCity : receiverCity.value,
    senderFirstName : senderName.value,
    senderLastName : senderLastName.value,
    senderPhone : senderPhone.value,
    senderEmail : senderEmail.value,
    senderAddress : senderAddress.value,
    senderCity : senderCity.value,
    senderPostcode : senderPostcode.value,
    value : parseFloat(totalValue.value),
    comment : comment.value,
    items : xlar
}),
	})
	

	itemName.value = null
	itemQuantity.value = null
	totalValue.value = null
	receiverName.value = null
	receiverLastName.value = null
	receiverPassport.value = null
	receiverPhone.value = null
	receiverAddress.value = null
	receiverCity.value = null
	comment.value = null
	senderName.value = null
	senderLastName.value = null
	senderPhone.value = null
	senderEmail.value = null
	senderAddress.value = null
	senderCity.value = null
	senderPostcode.value = null
			window.location = '../index.html'

	
}
}

