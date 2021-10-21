package main

import (
	"net/http"
	"encoding/json"
	"io/ioutil"
	"github.com/gin-gonic/gin"
)

 
func GetApi(ctx *gin.Context) {

	ctx.Writer.Header().Set("Access-Control-Allow-Origin", "*")

	ctx.Writer.Header().Set("Content-Type", "application/json")
	
	encoder := json.NewEncoder(ctx.Writer)

	encoder.Encode(GetOrders())

}


func CompletedApi (ctx *gin.Context) {

	ctx.Writer.Header().Set("Access-Control-Allow-Origin", "*")

	ctx.Writer.Header().Set("Content-Type", "application/json")

	ctx.Writer.WriteHeader(http.StatusAccepted)

	body, err := ioutil.ReadAll(ctx.Request.Body)

	if err != nil {panic(err)}

	var data PatchCompleted

	var idd ForDelete

	json.Unmarshal(body, &idd)

	data.OrderId = idd.Id

	data.IsDelivered = true

	PatchItem(data)

}

func PostApi (ctx *gin.Context) {

	ctx.Writer.Header().Set("Access-Control-Allow-Origin", "*")

	ctx.Writer.Header().Set("Content-Type", "application/json")

	ctx.Writer.WriteHeader(http.StatusAccepted)

	body , err := ioutil.ReadAll(ctx.Request.Body)

	if err != nil {panic(err)}

	var Data PostOrder

	json.Unmarshal(body, &Data)

	PostOrders(Data)

}



func LoginApi (ctx *gin.Context) {

	ctx.Writer.Header().Set("Access-Control-Allow-Origin", "*")

	ctx.Writer.Header().Set("Content-Type", "application/json")

	body, err := ioutil.ReadAll(ctx.Request.Body)

	if err != nil {panic(err)}

	var data Admin

	json.Unmarshal(body, &data)

	if data.Name == ForLogin.Name && data.Password == ForLogin.Password {
		ctx.Writer.WriteHeader(http.StatusCreated)
	} else {
		ctx.Writer.WriteHeader(http.StatusAccepted)
	}

}

func EachApi (ctx *gin.Context) {

	ctx.Writer.Header().Set("Access-Control-Allow-Origin", "*")

	ctx.Writer.Header().Set("Content-Type","application/json")

	encoder := json.NewEncoder(ctx.Writer)

	id := ctx.Param("itemId")

	encoder.Encode(GetByItemId(id))

}


func DeleteApi (ctx *gin.Context) {

	ctx.Writer.Header().Set("Access-Control-Allow-Origin", "*")

	ctx.Writer.Header().Set("Access-Control-Allow-Methods", "DELETE")

	ctx.Writer.Header().Set("Content-Type","application/json")

	body, err := ioutil.ReadAll(ctx.Request.Body)

	if err != nil {panic(err)}

	var idd ForDelete

	json.Unmarshal(body, &idd)

	DeleteOrder(idd.Id)

	ctx.Writer.WriteHeader(http.StatusAccepted)

}


