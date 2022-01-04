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
	distFS, err := fs.Sub(nextFS, "nextjs/dist")
	if err != nil {
		log.Fatal(err)
	}

	port := flag.Int("port", -1, "specify a port to use http rather than AWS Lambda")
	flag.Parse()

	// if *port == -1 {
	// 	log.Fatal(gateway.ListenAndServe("", nil))
	// 	return
	// }
	listener := gateway.ListenAndServe
	portStr := "n/a"
	if *port != -1 {
		portStr = fmt.Sprintf(":%d", *port)
		listener = http.ListenAndServe
		http.Handle("/", http.FileServer(http.Dir("./public")))
	}

	http.HandleFunc("/api/chuck", handleChuckJoke)
	// http.Handle("/", http.FileServer(http.Dir("./public")))

	http.Handle("/api/feed", feed2json.Handler(
		feed2json.StaticURLInjector("https://news.ycombinator.com/rss"), nil, nil, nil))
	http.Handle("/", http.FileServer(http.FS(distFS)))
	log.Fatal(listener(portStr, nil))

	// http.Handle("/api/feed", feed2json.Handler(
	// 	feed2json.StaticURLInjector("https://news.ycombinator.com/rss"),
	// 	nil, nil, nil, cacheControlMiddleware,
	// ))

	// The static Next.js app will be served under `/`.
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
