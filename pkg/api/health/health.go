package health

import (
	"fmt"
	"net/http"
	"time"
)

func Check(w http.ResponseWriter, _r *http.Request) {
	fmt.Fprintf(w, "\n%v\n%s\n\n", "app is healthy!", time.Now())
}
