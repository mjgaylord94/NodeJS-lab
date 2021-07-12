const path = require('path');
const fs = require('fs');
const requestPromise = require('request-promise');

let redditPath = path.join(__dirname, 'popular-articles.json')


requestPromise('https://reddit.com/r/popular.json')
.then(body => {
    JSON.parse(body).data.children.forEach(element => {
        fs.appendFileSync(redditPath, element.data.title + '\n' + element.data.url + '\n' + element.data.author + '\n')
    });
}).catch(err => console.log(err));