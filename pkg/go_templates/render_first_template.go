package goTemplates

type SomeFoo struct {
	Name       string
	Profession string
}

type FirstHtml struct {
	SomeFoos []SomeFoo
	Title    string
}

func FirstTemplateData() FirstHtml {
	firstHtmlData := FirstHtml{
		Title: "basic ass foos",
		SomeFoos: []SomeFoo{
			{Name: "Tom", Profession: "butcher"},
			{Name: "Dick", Profession: "baker"},
			{Name: "Harry", Profession: "candlestick maker"},
		},
	}

	return firstHtmlData
}
