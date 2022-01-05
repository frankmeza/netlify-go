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

	listener := gateway.ListenAndServe
	portStr := "n/a"

	distFS, err := fs.Sub(nextFS, "nextjs/dist")
	if err != nil {
		log.Fatal(err)
	}

	if *port != -1 {
		portStr = fmt.Sprintf(":%d", *port)
		listener = http.ListenAndServe
		// http.Handle("/", http.FileServer(http.Dir("./public")))
		http.Handle("/", http.FileServer(http.FS(distFS)))
	}

	http.Handle("/api/feed", feed2json.Handler(
		feed2json.StaticURLInjector("https://news.ycombinator.com/rss"), nil, nil, nil))
	log.Fatal(listener(portStr, nil))

	// a 0 value means its on netlify
	// if *port == 0 {
	// 	// The static Next.js app will be served under `/`.
	// 	http.Handle("/", http.FileServer(http.FS(distFS)))
	// 	http.HandleFunc("/api/chuck", chuck.HandleChuckJoke)

	// 	http.Handle("/api/feed", feed2json.Handler(
	// 		feed2json.StaticURLInjector("https://news.ycombinator.com/rss"), nil, nil, nil))

	// 	log.Fatal(listener("", nil))
	// 	// else the env is local
	// } else {
	// 	// The static Next.js app will be served under `/`.
	// 	http.Handle("/", http.FileServer(http.FS(distFS)))
	// 	http.HandleFunc("/api/chuck", chuck.HandleChuckJoke)

	// 	http.Handle("/api/feed", feed2json.Handler(
	// 		feed2json.StaticURLInjector("https://news.ycombinator.com/rss"), nil, nil, nil))

	// 	listener = http.ListenAndServe
	// 	portString := ":" + strconv.Itoa(*port)

	// 	log.Fatal(listener(portString, nil))
	// }

	// http.Handle("/", http.FileServer(http.Dir("./public")))
}

// package main

// import (
// 	"embed"
// 	"flag"
// 	"io/fs"
// 	"log"
// 	"net/http"
// 	"strconv"

// 	"github.com/carlmjohnson/feed2json"
// 	"github.com/carlmjohnson/gateway"
// 	"github.com/frankmeza/netlify-go/api/chuck"
// )

// // //go:embed nextjs/dist
// // //go:embed nextjs/dist/_next
// // //go:embed nextjs/dist/_next/static/chunks/pages/*.js
// // //go:embed nextjs/dist/_next/static/*/*.js
// var nextFS embed.FS

// func main() {
// 	port := flag.Int("port", 0, "specify a port to use http rather than AWS Lambda")
// 	flag.Parse()

// 	distFS, err := fs.Sub(nextFS, "nextjs/dist")
// 	if err != nil {
// 		log.Fatal(err)
// 	}

// 	// The static Next.js app will be served under `/`.
// 	http.Handle("/", http.FileServer(http.FS(distFS)))
// 	http.HandleFunc("/api/chuck", chuck.HandleChuckJoke)

// 	http.Handle("/api/feed", feed2json.Handler(
// 		feed2json.StaticURLInjector("https://news.ycombinator.com/rss"), nil, nil, nil))

// 	if *port == 0 {
// 		// log.Fatal(gateway.ListenAndServe("", nil))
// 		log.Fatal(gateway.ListenAndServe(
// 			strconv.Itoa(*port),
// 			nil,
// 		))
// 	} else {
// 		log.Fatal(gateway.ListenAndServe(
// 			strconv.Itoa(*port),
// 			nil,
// 		))
// 	}
// 	// http.Handle("/", http.FileServer(http.Dir("./public")))
// }

// // func cacheControlMiddleware(h http.Handler) http.Handler {
// // 	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
// // 	w.Header().Set("Cache-Control", "public, max-age=300")
// // 	h.ServeHTTP(w, r)
// // })

// // func handleChuckJoke(w http.ResponseWriter, r *http.Request) {
// // 	// return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
// // 	resp, err := http.Get("https://api.chucknorris.io/jokes/random")
// // 	if err != nil {
// // 		panic(err)
// // 	}

// // 	defer resp.Body.Close()

// // 	body, err := ioutil.ReadAll(resp.Body)
// // 	if err != nil {
// // 		panic(err)
// // 	}

// // 	finalOutput := maths.OneTwoThree() + "" + maths.OneTwoThree() + "" + string(body)

// // 	fmt.Fprintf(w, "%v", finalOutput)
// // }

// // func cacheControlMiddleware(h http.Handler) http.Handler {
// // 	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
// // 		w.Header().Set("Cache-Control", "public, max-age=300")
// // 		h.ServeHTTP(w, r)
// // 	})
// // }
