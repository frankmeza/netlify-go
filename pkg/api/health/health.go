package health

import (
	"encoding/json"
	"net/http"
	"time"
)

func Check(w http.ResponseWriter, r *http.Request) {
	json.NewEncoder(w).Encode(map[string]string{
		"now": time.Now().String(),
		"ok":  "true",
	})
}
