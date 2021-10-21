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

	const response = await fetch('https://fruise.herokuapp.com//declaration', {
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

// <div class="foo">
//         <div class="sender">
        	
//         	<h1>Sender Information</h1>
//         	<label for="fname">First Name:</label>
//   			<input id= "senderName" type="text" name="fname" required><br><br>
//   			<label for="lname">Last Name:</label>
//   			<input id= "senderLastName" type="text" name="lname"><br><br>
//   			<label for="phone">Main Phone:</label>
//   			<input id= "senderPhone" type="tel" name="phone"><br><br>
//   			<label for="email">Email:</label>
//   			<input id= "senderEmail" type="email" name="email"><br><br>
//   			<label for="address">Address:</label>
//   			<input id= "senderAddress" type="text" name="address"><br><br>
//   			<label for="city">City:</label>
//   			<input id= "senderCity" type="text" name="city"><br><br>
//   			<label for="postcode">Post Code:</label>
//   			<input id= "senderPostcode" type="text" name="postcode"><br><br>
  			
//         </div>

//         <div class="receiver">
        
//         	<h1>Receiver Information</h1>
//         	<label for="fname">First Name:</label>
//   			<input id= "receiverName" type="text" name="fname"><br><br>
//   			<label for="lname">Last Name:</label>
//   			<input id= "receiverLastName" type="text" name="lname"><br><br>
//   			<label for="passport">Passport Serial Number:</label>
//   			<input id= "receiverPassport" type="text" name="passport"><br><br>
//   			<label for="phone">Main Phone:</label>
//   			<input id= "receiverPhone" type="tel" name="phone"><br><br>
//   			<label for="address">Address:</label>
//   			<input id= "receiverAddress" type="text" name="address"><br><br>
//   			<label for="city">City:</label>
//   			<input id= "receiverCity" type="text" name="city"><br><br>
  			
//         </div>

//         <div class="clean">
        
//         </div>

//         <div class="Items">
//         <h1>List of items</h1>
//             <div class="here">
//             <input id= "itemName" type="text" placeholder="Item name"><br><br>
//             <input id= "itemQuantity" type="number" placeholder="Qty"><br><br>
//             </div>

//         </div>

//         <div id="container">
//             <button id="btnAdd" onclick="add()"><span class="button__textt">Add Item</span></button>
//         </div>

        



//         <div class="submit">
        	
//         	<h1>Submit</h1>

//         	<p>It is the senders responsibility to ensure that what you are sending and the prevailing customs regulations of the destination country will effect the categorisation of your shipment and consequently whether you will be liable to pay customs duties, taxes or local charges. Customs may also x-ray or open your parcel for inspection. TezParcel offer up to £50 (max) insurance for free as standard for lost and damage</p>
//         	<br><br>
//         	<p>IMPORTANT! - It is sender's responsibility to provide accurate information about the content of each parcel. You must list any electronic devices such as (used/new): PCs, Laptops, Mobile Phones, Tablets. If you fail to declare, could lead to confiscation by Customs officials and impose a fine.</p>
//         	<br>
//         	<label>Comments</label>
//         	<textarea id="comment" rows="8" cols="100"></textarea>
//         	<br><br>
//             <label>Total value of your items</label>
//             <input id="totalValue"type="numeric" placeholder="Total value of your items"><br><br>
//         	<label>Date</label>
//         	<br>
//         	<input id = "date" type="text" readonly="readonly"><br><br>
//         	<input type="checkbox" name="" id="isch">
//         	<label>I, the sender, hereby state that the above information on the waybill is full and exact and correct to the best of my knowledge and that my shipment does not contain any dangerous goods which are forbidden by post regulations. This parcel does not contain cash, jewellery or any religious things. I accept the conditions of the shipment.</label>
//         	<div class="forButton">
//         		<button onclick="location.href='index.html'" type="button" class="button2">
//                 <span class="button__text">CANCEL</span>
//                 <span class="button__icon">
//                 <ion-icon name="close-outline"></ion-icon>
//                 </span>
//             </button>
//             <button id="submitBtn" type="submit" class="button3">
//                 <span class="button__text">SUBMIT</span>
//                 <span class="button__icon">
//                 <ion-icon name="checkmark-outline"></ion-icon>
//                 </span>
//             </button>
//         	</div>
//         </div>