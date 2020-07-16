const express = require("express")
const path = require("path")
const hbs = require("hbs")

const app = express()

//define path for Express config
const publicPathDirectory = path.join(__dirname, "../public")
const viewsPath = path.join(__dirname, "../templates/views")
const partialsPath = path.join(__dirname, "../templates/partials")

//setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

app.use(express.static(publicPathDirectory))

			//the function takes 2 arguments request and response
			//request as to what is requested by the user
			//response contains what we send back to the user
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
		name: 'Hunny',
		msg: 'Example Message'
	})
})


app.get("/weather", (req, res) => {
	res.send({
		Location: 'LA',
		Forecast: 'Sunny'
	})
})

app.get("help/*", (req, res) => {
	res.render('404', {
		msg: 'Error 404: Page not found'
	})
})

app.get("*", (req, res) => {
	res.render('404', {
		title: '404',
		name: 'Hunny',
		msg: 'Error 404: Page not found'
	})
})

app.listen(3000, () => {
	console.log("Listening of port 3000")
})