const request = require('request')

const url = "http://api.weatherstack.com/current?access_key=a2a56b5d94fff1edf87286912b781613&query=37.123,-122.897"

request({ url: url, json: true }, (error, response ) => {
	console.log(response.body.current)
})