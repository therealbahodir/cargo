package main

import ( 
	// "net/http"
	"github.com/gin-gonic/gin"
	"github.com/gin-contrib/static"
	// "github.com/gorilla/handlers"
)

var ForLogin = Admin {
	Name : "admin",
	Password : "1234",
}

func main() {
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

	router.Run(":8050")
}





	// http.ListenAndServe(":8050", handlers.CORS(headers,methods,origins)(router))

	// headers := handlers.AllowedHeaders([]string {"X-Requested-With", "Content-Type", "Authorization"})
	// methods := handlers.AllowedMethods([]string {"GET", "POST", "DELETE", "PATCH"})
	// origins := handlers.AllowedOrigins([]string{"*"})