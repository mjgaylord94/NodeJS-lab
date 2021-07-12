const path = require('path');
const fs = require('fs');
const requestPromise = require('request-promise');

let redditPath = path.join(__dirname, 'popular-articles.json')


requestPromise('https://reddit.com/r/popular.json')
    .then(body => {
        let array = []
        JSON.parse(body).data.children.forEach(element => {
            let article = {
                title: element.data.title,
                url: element.data.url,
                author: element.data.author
            }
            array.push(article);
        });
        fs.writeFileSync(redditPath, JSON.stringify(array), function (err) {
            if (err) throw err;
            console.log('complete');
        });
    }).catch(err => console.log(err));