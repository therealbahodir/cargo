package main

import ( 
	"github.com/gin-gonic/gin"
	"github.com/gin-contrib/static"
	"github.com/joho/godotenv"
	"log"
	"os"
)

var ForLogin = Admin {
	Name : "admin",
	Password : "1234",
}

func main() {
	err := godotenv.Load()
	if err != nil {
		log.Print(err)
	}

	port := os.Getenv("PORT")

	router := gin.Default()


	router.POST("/declaration", PostApi)
	router.DELETE("/cargo", DeleteApi)
	router.GET("/cargo", GetApi)
	router.POST("/cargo", CompletedApi) // id, isCompleted
	router.POST("/admin", LoginApi) // user, password
	router.GET("/cargo/:itemId", EachApi)

	router.Use(static.Serve(
		"/", static.LocalFile("./BakhodirKhuja",true),
	))

	router.Run(":" + port)
}
