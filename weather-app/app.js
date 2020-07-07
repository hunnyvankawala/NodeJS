const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const location = process.argv[2]

if (!location) {
	console.log("Please provide valid location")
}
else {
	geocode(location, (error, data) => {
		if (error){
			console.log('Error', error)
		}
		else{
			forecast(data.latitude, data.longitude, (error, forecastData) => {
				if (error){
					console.log('Error', error)
				}
		  		
		  		console.log(data.location)
		  		console.log(forecastData.description)
		  		console.log("It is currently " + forecastData.currenttemperature + " degrees outside")
		  		console.log("It feels like " + forecastData.feelslike + " degrees")
			})
		}
	})
}