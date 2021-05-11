const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = `http://api.weatherstack.com/current?access_key=25858bdac6d66de87d6e7f721f32810e&query=${latitude},${longitude}&units=f`;
    request({ url: url, json: true }, (error, response) => {
        if (error) {
            callback('Unable to connect to the server', undefined)
        } else if (response.body.error) {
            console.log(response.body)
            callback('unable to find location', undefined)
        } else {
            callback(null, response.body.current.weather_descriptions[0] + '. It is currently ' + response.body.current.temperature + ' degrees out but it feels like ' + response.body.current.feelslike + ' out there')
        }
    })
}
module.exports = forecast;