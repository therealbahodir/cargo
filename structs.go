package main 

type Admin struct {
	Name, Password string
}

type GetSender struct {
	FullName, Phone, Email, Address, City, Postcode string
}


type GetReceiver struct {
	FullName, Passport, Phone, Address, City string
}

type GetOrder struct {
	Value uint
	Time, Comment string
	Sender GetSender
	Receiver GetReceiver
	Items []GetItem
}


type GetItem struct {
	Name string
	Quantity string
	OrderId uint
	IsDelivered bool
}

type GetOrderByPage struct {
	ByOrder uint
	OrderId uint
	IsDelivered bool
}

type PatchCompleted struct {
	IsDelivered bool
	OrderId string
}

type GetByItem struct {
	Name, ReceiverFullName, ReceiverPasspost, ReceiverPhone, ReceiverAddress, ReceiverCity,
	SenderFullName, SenderPhone, SenderEmail, SenderAddress, SenderCity, SenderPostcode,
	Comment,Quantity string
	Value, OrderId uint 
	IsDelivered bool
}

type Item struct {
	Name string
	Quantity string
}

type PostOrder struct {
	ReceiverFirstName, ReceiverLastName, ReceiverPassport, ReceiverPhone, ReceiverAddress, ReceiverCity,
	SenderFirstName, SenderLastName, SenderPhone, SenderEmail, SenderAddress, SenderCity, SenderPostcode,
	Comment string
	Value uint
	Items []Item
}

type ForDelete struct {
	Id string
}