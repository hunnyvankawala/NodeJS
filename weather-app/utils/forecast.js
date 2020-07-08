const request = require('request')

const forecast = (latitude, longitude, callback) => {
	const url = "http://api.weatherstack.com/current?access_key=a2a56b5d94fff1edf87286912b781613&query=" + latitude + "," + longitude + "&units=f"

	request({ url, json: true }, (error, { body } = {}) => {
		
		if(error){
			callback("Unable to reach weatherstack", undefined)
		}
		else if (body.error) {
			callback("Unable to find location for the given coordinates", undefined)
		}
		else {
			callback(undefined, {
				description: body.current.weather_descriptions[0],
				currenttemperature: body.current.temperature,
				feelslike: body.current.feelslike
			})
		}
	})
}

module.exports = forecast