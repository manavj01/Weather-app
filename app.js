const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const address = process.argv[2]

if (!address) {
  return console.log("Please provide an address.")
} else {
  geocode(address, (error, data) => {
    if (error) {
      return console.log(error)
    }

    forecast(data.latitude, data.longitude, (error, forecaseData) => {
      if (error) {
        return console.log(error)
      }
      console.log(data.location)
      console.log(forecaseData)
    })

  })

}


