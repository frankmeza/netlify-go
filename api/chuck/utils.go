package chuck

import "net/http"

func enableCors(w *http.ResponseWriter) {
	(*w).Header().Set("Access-Control-Allow-Origin", "*")
}

// func cacheControlMiddleware(h http.Handler) http.Handler {
// 	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
// 		w.Header().Set("Cache-Control", "public, max-age=300")
// 		// w.Header().Set("Access-Control-Allow-Origin", "*")

// 		h.ServeHTTP(w, r)
// 	})
// }
