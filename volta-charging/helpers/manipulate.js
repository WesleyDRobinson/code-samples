const fs = require('fs')
const stations = require('./stations')

// add _geoloc to records for geo filtering
const modified = stations.map(station => {
    station._geoloc = {
        lat: station.location.coordinates[1],
        lng: station.location.coordinates[0]
    }
    return station
})

fs.writeFile('./stationsModified.json', JSON.stringify(modified), err => err ? console.error(error) : console.log('file written successfully'))
