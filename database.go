package main 

import (
	"fmt"
	"database/sql"
	_"github.com/lib/pq"
	"log"
)

var (
	Host = "john.db.elephantsql.com"
	Username = "vncooinw"
	Password = "gwq9q2BmsyksJsjaWVoEcomkAE9LPI6h"
	Database = "vncooinw"
	Port = 5432
)

func GetOrders() (output []GetOrderByPage) {

	connection := fmt.Sprintf(
		"host=%s user=%s password=%s dbname=%s port=%d",
		Host, Username, Password, Database, Port,
	)
	db, err := sql.Open("postgres", connection)

	defer db.Close()

	if err != nil {panic(err)}

	rows, _ := db.Query(QUERY_GET)

	for rows.Next() {

		var outputItem GetOrderByPage

		rows.Scan(
				  &outputItem.ByOrder,
				  &outputItem.OrderId,
				  &outputItem.IsDelivered,
				  )

		output = append(output, outputItem)
		
	}
	return
}


func PatchItem(completed PatchCompleted) () {

	connection := fmt.Sprintf(
		"host=%s user=%s password=%s dbname=%s port=%d",
		Host, Username, Password, Database, Port,
	)
	db, err := sql.Open("postgres", connection)

	defer db.Close()

	if err != nil {panic(err)}

	db.QueryRow(QUERY_UPDATE_COMPLETED, completed.IsDelivered, completed.OrderId)

}



func GetByItemId(id string) (output []GetByItem) {

	connection := fmt.Sprintf(
		"host=%s user=%s password=%s dbname=%s port=%d",
		Host, Username, Password, Database, Port,
	)
	db, err := sql.Open("postgres", connection)

	defer db.Close()

	if err != nil {panic(err)}

	rows, _ := db.Query(QUERY_GET_BY_ID, id)

	var outputItem GetByItem

	for rows.Next() {

		rows.Scan(&outputItem.Name,
				  &outputItem.Quantity,
				  &outputItem.ReceiverFullName,
				  &outputItem.ReceiverPasspost,
				  &outputItem.ReceiverPhone,
				  &outputItem.ReceiverAddress,
				  &outputItem.ReceiverCity,
				  &outputItem.SenderFullName,
				  &outputItem.SenderPhone,
				  &outputItem.SenderEmail,
				  &outputItem.SenderAddress,
				  &outputItem.SenderCity,
				  &outputItem.SenderPostcode,
				  &outputItem.OrderId,
				  &outputItem.Comment,
				  &outputItem.Value,
				  &outputItem.IsDelivered,)

		output = append(output, outputItem)

	}

	return


}



func PostOrders (body PostOrder) {

	connection := fmt.Sprintf(
		"host=%s user=%s password=%s dbname=%s port=%d",
		Host, Username, Password, Database, Port,
	)

	db, err := sql.Open("postgres", connection)

	if err != nil {panic(err)}

	defer db.Close()

	log.Print(body.SenderFirstName)

	db.Exec(QUERY_POST_SENDER,
							body.SenderFirstName,
							body.SenderLastName,
							body.SenderPhone, 
							body.SenderEmail, 
							body.SenderAddress, 
							body.SenderCity, 
							body.SenderPostcode,
		)


	db.Exec(QUERY_POST_RECEIVER,
							body.ReceiverFirstName,
							body.ReceiverLastName,
							body.ReceiverPassport,
							body.ReceiverPhone,
							body.ReceiverAddress,
							body.ReceiverCity,)
							
	db.Exec(QUERY_POST_ORDER,
							body.Comment,
							body.Value,)
	for _, data := range body.Items {
		db.Exec(QUERY_POST_MAIN,
							data.Name,
							data.Quantity,)
	}


}


func DeleteOrder(id string) {

	connection := fmt.Sprintf(
		"host=%s user=%s password=%s dbname=%s port=%d",
		Host, Username, Password, Database, Port,
	)

	db, err := sql.Open("postgres", connection)

	if err != nil {panic(err)}

	defer db.Close()

	db.Exec(QUERY_DELETE, id)
	db.Exec(QUERY_DELETE1, id)

}