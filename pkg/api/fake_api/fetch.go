package chuck

import (
	"encoding/json"
	"fmt"
	"io/ioutil"
	"net/http"
)

type TodoRemote struct {
	ID         int    `json:"id"`
	IsComplete bool   `json:"completed"`
	Title      string `json:"title"`
	UserID     int    `json:"userId"`
}

type Todo struct {
	ID         int    `json:"id"`
	IsComplete bool   `json:"is_complete"`
	Title      string `json:"title"`
	UserID     int    `json:"user_id"`
}

const TODO_LIST_URL = "https://jsonplaceholder.typicode.com/todos"

func HandleFetchJSON(w http.ResponseWriter, r *http.Request) {
	resp, err := http.Get(TODO_LIST_URL)
	if err != nil {
		panic(err)
	}

	defer resp.Body.Close()

	// read response body into `body`
	body, err := ioutil.ReadAll(resp.Body)
	if err != nil {
		panic(err)
	}

	// instantiate collections variables
	var todoRemoteList []TodoRemote
	var todoList []Todo

	// unmarshal response from client request into todoRemoteList
	if err := json.Unmarshal(body, &todoRemoteList); err != nil {
		panic(err)
	}

	// instantiate each TodoRemote as Todo, put in existing slice
	for _, todo := range todoRemoteList {
		todoList = append(todoList, Todo(todo))
	}

	// marshal todoList so that its json keys are used
	todoListBytes, err := json.Marshal(&todoList)
	if err != nil {
		panic(err)
	}

	// sends todoList using json keys, instead of struct keys
	fmt.Fprintf(w, "%+v", string(todoListBytes))
}
