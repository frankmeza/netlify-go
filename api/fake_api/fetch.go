package chuck

import (
	"fmt"
	"io/ioutil"
	"net/http"
)

const API = "https://jsonplaceholder.typicode.com/todos"

func HandleFetchJSON(w http.ResponseWriter, r *http.Request) {
	resp, err := http.Get(API)
	if err != nil {
		panic(err)
	}

	defer resp.Body.Close()

	body, err := ioutil.ReadAll(resp.Body)
	if err != nil {
		panic(err)
	}

	fmt.Fprintf(w, "%v", string(body))
}
