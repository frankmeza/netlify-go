package main

import (
	"fmt"
	"io/ioutil"
	"net/http"

	"github.com/frankmeza/netlify-go/maths"
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

	finalOutput := maths.OneTwoThree() + "" + maths.OneTwoThree() + "" + string(body)

	fmt.Fprintf(w, "%v", finalOutput)
}
