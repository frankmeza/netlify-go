package utils

import "net/http"

func EnableCORS(next http.HandlerFunc) http.HandlerFunc {
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
