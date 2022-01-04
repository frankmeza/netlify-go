package main

import (
	"embed"
	"flag"
	"fmt"
	"io/fs"
	"log"
	"net/http"

	"github.com/carlmjohnson/feed2json"
	"github.com/carlmjohnson/gateway"
)

// //go:embed nextjs/dist
// //go:embed nextjs/dist/_next
// //go:embed nextjs/dist/_next/static/chunks/pages/*.js
// //go:embed nextjs/dist/_next/static/*/*.js
var nextFS embed.FS

func main() {
	port := flag.Int("port", -1, "specify a port to use http rather than AWS Lambda")
	flag.Parse()

	distFS, err := fs.Sub(nextFS, "nextjs/dist")
	if err != nil {
		log.Fatal(err)
	}

	// The static Next.js app will be served under `/`.
	http.Handle("/", http.FileServer(http.FS(distFS)))
	http.HandleFunc("/api/chuck", handleChuckJoke)

	http.Handle("/api/feed", feed2json.Handler(
		feed2json.StaticURLInjector("https://news.ycombinator.com/rss"), nil, nil, nil))

	if *port == -1 {
		log.Fatal(gateway.ListenAndServe("", nil))
		return
	}

	log.Fatal(gateway.ListenAndServe("", nil))

	// http.Handle("/", http.FileServer(http.Dir("./public")))
}

func handleChuckJoke(w http.ResponseWriter, r *http.Request) {
	// return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
	resp, err := http.Get("https://api.chucknorris.io/jokes/random")
	if err != nil {
		panic(err)
	}
	defer resp.Body.Close()

	fmt.Fprintf(w, "+%v", resp.Body)
	// h.ServeHTTP(w, r)
	// }
}

func cacheControlMiddleware(h http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Cache-Control", "public, max-age=300")
		h.ServeHTTP(w, r)
	})
}
