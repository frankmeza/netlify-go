package main

import (
	"embed"
	"flag"
	"io/fs"
	"log"
	"net/http"

	"github.com/carlmjohnson/feed2json"
	"github.com/carlmjohnson/gateway"
	"github.com/frankmeza/netlify-go/api/chuck"
)

//go:embed nextjs/dist
//go:embed nextjs/dist/_next
//go:embed nextjs/dist/_next/static/chunks/pages/*.js
//go:embed nextjs/dist/_next/static/*/*.js
var nextFS embed.FS

func main() {
	port := flag.Int("port", 0, "specify a port to use http rather than AWS Lambda")
	flag.Parse()

	distFS, err := fs.Sub(nextFS, "nextjs/dist")
	if err != nil {
		log.Fatal(err)
	}

	// The static Next.js app will be served under `/`.
	http.Handle("/", http.FileServer(http.FS(distFS)))
	http.Handle("/carl", http.FileServer(http.Dir("./public")))
	http.HandleFunc("/api/chuck", chuck.HandleChuckJoke)

	http.Handle("/api/feed", feed2json.Handler(
		feed2json.StaticURLInjector("https://news.ycombinator.com/rss"), nil, nil, nil))

	if *port == 0 {
		// netlify
		log.Fatal(gateway.ListenAndServe("", nil))
	} else {
		// local
		log.Fatal(http.ListenAndServe(":3333", nil))
	}
}
