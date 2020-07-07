const request = require('request')

const geocode = (address, callback) => {
	const url_geodata = "https://api.mapbox.com/geocoding/v5/mapbox.places/" + encodeURIComponent(address) + ".json?access_token=pk.eyJ1IjoiaHVubnl2YW5rYXdhbGEiLCJhIjoiY2tjOXVpcmFiMXA2MDJxbW81dHFla3Y4ZCJ9.UbJNChCiXsdc9ZLvLE9PNQ&limit=1"

	//request is a method that takes 2 arguments
	request({url: url_geodata, json: true}, (error, response) => {
		if(error){
			callback("Unable to reach location services", undefined)
		}
		else if (response.body.features.length===0) {
			callback("Unable to find coordinates for given location", undefined)
		}
		else{
			callback(undefined, {
				latitude: response.body.features[0].center[1],
				longitude: response.body.features[0].center[0],
				location: response.body.features[0].place_name
			})
		}
	})
}

module.exports = geocode