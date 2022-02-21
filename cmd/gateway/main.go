package main

import (
	"embed"
	"flag"
	"html/template"
	"io/fs"
	"log"
	"net/http"

	"github.com/carlmjohnson/gateway"
	"github.com/gorilla/mux"

	"github.com/frankmeza/netlify-go/pkg/api/chuck"
	fakeApi "github.com/frankmeza/netlify-go/pkg/api/fake_api"
	"github.com/frankmeza/netlify-go/pkg/api/health"
	goTemplates "github.com/frankmeza/netlify-go/pkg/go_templates"

	"github.com/frankmeza/netlify-go/pkg/utils"
)

//go:embed nextjs/dist
//go:embed nextjs/dist/_next
//go:embed nextjs/dist/_next/static/chunks/pages/*.js
//go:embed nextjs/dist/_next/static/*/*.js
var nextFS embed.FS

// see Taskfile for development usage
func main() {
	isDevelopment := flag.Int(
		"dev", 0, "append -dev 1 to start server on :3333",
	)

	flag.Parse()

	distFS, err := fs.Sub(nextFS, "nextjs/dist")
	if err != nil {
		log.Fatal(err)
	}

	firstTemplate := template.Must(template.ParseFiles("../../pkg/go_templates/first.html"))

	router := mux.NewRouter()

	// The static Next.js app will be served under `/`.
	router.Handle("/", http.FileServer(http.FS(distFS)))
	router.HandleFunc("/health", utils.EnableCORS(health.Check))

	router.HandleFunc("/go_template", utils.EnableCORS(func(w http.ResponseWriter, r *http.Request) {
		data := goTemplates.FirstTemplateData()
		firstTemplate.Execute(w, data)
	}))

	router.HandleFunc("/api/chuck", utils.EnableCORS(chuck.HandleChuckJoke))
	router.HandleFunc("/api/fake_api", utils.EnableCORS(fakeApi.HandleFetchJSON))

	if *isDevelopment == 0 {
		// netlify
		println("append -dev 1 to start server on :3333")
		log.Fatal(gateway.ListenAndServe("", router))
	} else {
		// local
		println("server running on localhost:3333")
		log.Fatal(http.ListenAndServe(":3333", router))
	}
}

// now with the gorilla/mux router, a path like `albums/{albumName}/song/{songName}` is possible
// and a handler like the following allows access to these variables in the url path
// r.HandleFunc(`albums/{albumName}/song/{songName}`, func(w http.ResponseWriter, r *http.Request) {
//     vars := mux.Vars(r)
//     albumName := vars["albumName"]
//     songName := vars["songName"]

//     fmt.Fprintf(w, "You've requested the song: %s on album %s\n", songName, albumName)
// })
