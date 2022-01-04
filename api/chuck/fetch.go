package chuck

import (
	"fmt"
	"io/ioutil"
	"net/http"
)

func HandleChuckJoke(w http.ResponseWriter, r *http.Request) {
	// return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
	resp, err := http.Get("https://api.chucknorris.io/jokes/random")
	if err != nil {
		panic(err)
	}

	defer resp.Body.Close()

	body, err := ioutil.ReadAll(resp.Body)
	if err != nil {
		panic(err)
	}

	finalOutput := OneTwoThree() + " " + OneTwoThree() + " " + "456 " + string(body)
	fmt.Fprintf(w, "%v", finalOutput)
}
