package chuck

import (
	"fmt"
	"io/ioutil"
	"net/http"
)

const CHUCK_NORRIS_API = "https://api.chucknorris.io/jokes/random"

func HandleChuckJoke(w http.ResponseWriter, r *http.Request) {
	enableCors(&w)

	resp, err := http.Get(CHUCK_NORRIS_API)
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
