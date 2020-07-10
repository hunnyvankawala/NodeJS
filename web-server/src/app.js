const express = require("express")
const path = require("path")

const app = express()

const publicPathDirectory = path.join(__dirname, "../public")

app.use(express.static(publicPathDirectory))

			//the function takes 2 arguments request and response
			//request as to what is requested by the user
			//response contains what we send back to the user

app.set("view engine", "hbs")

app.get("", (req, res) => {
	res.render('index', {
		title: 'Weather',
		name: 'Hunny'
	})
})

app.get("/about", (req, res) => {
	res.render('about', {
		title: 'About Me',
		name: 'Hunny'
	})
})

app.get("/help", (req, res) => {
	res.render('help', {
		title: 'Help',
		msg: 'Example Message'
	})
})


app.get("/weather", (req, res) => {
	res.send({
		Location: 'LA',
		Forecast: 'Sunny'
	})
})

app.listen(3000, () => {
	console.log("Listening of port 3000")
})