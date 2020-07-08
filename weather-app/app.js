const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const location = process.argv[2]

if (!location) {
	console.log("Please provide valid location")
}
else {
								//object destructuring
	geocode(location, (error, {latitude, longitude, location} = {}) => {
		if (error){
			console.log('Error', error)
		}
		else{
			forecast(latitude, longitude, (error, {description, currenttemperature, feelslike} = {}) => {
				if (error){
					console.log('Error', error)
				}
		  		
		  		console.log(location)
		  		console.log(description)
		  		console.log("It is currently " + currenttemperature + " degrees outside")
		  		console.log("It feels like " + feelslike + " degrees")
			})
		}
	})
}