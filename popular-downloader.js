const path = require('path');
const fs = require('fs');
const requestPromise = require('request-promise');

let downloadPath = path.join(__dirname, '/downloads')

requestPromise('https://reddit.com/r/popular.json')
.then(body => {
    
}).catch(err => console.log(err));