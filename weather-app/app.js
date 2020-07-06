const request = require('request')

const url = "http://api.weatherstack.com/current?access_key=a2a56b5d94fff1edf87286912b781613&query=37.123,-122.897&units=f"

request({ url: url, json: true }, (error, response ) => {
	if(error){
		console.log("Unable to reach weatherstack")
	}
	else if (response.body.error) {
		console.log("Unable to find location")
	}
	else {
		console.log(response.body.current.weather_descriptions[0])
		console.log("It is currently " + response.body.current.temperature + " degrees out there")
		console.log("It feels like " + response.body.current.feelslike + " degrees")
	}
})

const url_geodata = "https://api.mapbox.com/geocoding/v5/mapbox.places/12what.json?access_token=pk.eyJ1IjoiaHVubnl2YW5rYXdhbGEiLCJhIjoiY2tjOXVpcmFiMXA2MDJxbW81dHFla3Y4ZCJ9.UbJNChCiXsdc9ZLvLE9PNQ&limit=1"

request({ url: url_geodata, json: true}, (error, response) => {
	if(error){
		console.log("Unable to reach mapbox")
	}
	else if (response.body.features.length===0) {
		console.log("Unable to find coordinates")
	}
	else{
		console.log(response.body.features[0].center)
	}
})
