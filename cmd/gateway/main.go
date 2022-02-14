package main

import (
	"embed"
	"flag"
	"io/fs"
	"log"
	"net/http"

	"github.com/carlmjohnson/gateway"
	"github.com/frankmeza/netlify-go/api/chuck"
	fakeApi "github.com/frankmeza/netlify-go/api/fake_api"
)

func enableCORS(next http.HandlerFunc) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		if r.URL.Host == "" {
			w.Header().Add("Access-Control-Allow-Credentials", "*")
			w.Header().Add("Access-Control-Allow-Headers", "*")
			w.Header().Add("Access-Control-Allow-Methods", "*")
			w.Header().Add("Access-Control-Allow-Origin", "*")
		}

		if r.Method == "OPTIONS" {
			http.Error(w, "No Content", http.StatusNoContent)
			return
		}

		next(w, r)
	}
}

//go:embed nextjs/dist
//go:embed nextjs/dist/_next
//go:embed nextjs/dist/_next/static/chunks/pages/*.js
//go:embed nextjs/dist/_next/static/*/*.js
var nextFS embed.FS

func main() {
	isDevelopment := flag.Int(
		"dev", 0, "append -dev 1 to start server on :3333",
	)

	flag.Parse()

	distFS, err := fs.Sub(nextFS, "nextjs/dist")
	if err != nil {
		log.Fatal(err)
	}

	// The static Next.js app will be served under `/`.
	http.Handle("/", http.FileServer(http.FS(distFS)))
	http.HandleFunc("/api/chuck", enableCORS(chuck.HandleChuckJoke))
	http.HandleFunc("/api/fake_api", enableCORS(fakeApi.HandleFetchJSON))

	if *isDevelopment == 0 {
		// netlify
		println("append -dev 1 to start server on :3333")
		log.Fatal(gateway.ListenAndServe("", nil))
	} else {
		// local
		println("server running on localhost:3333")
		log.Fatal(http.ListenAndServe(":3333", nil))
	}
}
