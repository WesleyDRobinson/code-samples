const fs = require('fs')
const fetch = require('node-fetch');
const headers = {
    'Accept': 'application/json'
};

fetch('https://api.voltaapi.com/v1/stations', {
    method: 'GET',
    headers: headers
})
    .then(res => res.json())
    .then(body => {
        fs.writeFile('./stations.json', JSON.stringify(body), err => err ? console.error(error) : console.log('file written successfully'))
    })