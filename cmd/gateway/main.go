package main

import (
	// "embed"
	"flag"
	"fmt"
	"log"
	"net/http"

	"github.com/carlmjohnson/feed2json"
	"github.com/carlmjohnson/gateway"
)

func main() {
	port := flag.Int("port", -1, "specify a port to use http rather than AWS Lambda")
	flag.Parse()

	listener := gateway.ListenAndServe
	portStr := ""

	if *port != -1 {
		portStr = fmt.Sprintf(":%d", *port)
		listener = http.ListenAndServe

		// distFS, err := fs.Sub(nextFS, "nextjs/dist")
		// if err != nil {
		// 	log.Fatal(err)
		// }
		// // The static Next.js app will be served under `/`.
		// http.Handle("/", http.FileServer(http.FS(distFS)))
		http.Handle("/", http.FileServer(http.Dir("./public/nextjs/.next/dist")))
	}

	http.Handle("/api/feed", feed2json.Handler(
		feed2json.StaticURLInjector("https://news.ycombinator.com/rss"),
		nil, nil, nil, cacheControlMiddleware,
	))

	log.Fatal(listener(portStr, nil))
}

func cacheControlMiddleware(h http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Cache-Control", "public, max-age=300")
		h.ServeHTTP(w, r)
	})
}
