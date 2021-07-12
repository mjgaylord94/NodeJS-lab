const path = require('path');
const fs = require('fs');
const requestPromise = require('request-promise');

requestPromise('https://reddit.com/r/popular.json')
.then(body => {
    JSON.parse(body).data.children.forEach(element => {
        if (path.extname(element.data.url) == ".jpg" || path.extname(element.data.url) == ".png" || path.extname(element.data.url) == ".gif") {
            const imageRequestOptions = {
                url: element.data.url,
                encoding: "base64"
            };

            requestPromise(imageRequestOptions)
            .then(function(image) {
                fs.writeFile(`./downloads/${element.data.id}${path.extname(element.data.url)}`, image, "base64", function (err) {
                    if (err) throw err;
                    console.log(err);
                }) 
            })
        }
    });
}).catch(err => console.log(err));