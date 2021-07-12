const path = require('path');
const fs = require('fs');

let chirpsPath = path.join(__dirname, '../chirps.json');

let chirps = [
    {username: "Gonta", chirpText: "I say a mouse tempura is the best one, yes it is!"},
    {username: "Jiji", chirpText: "Well pardon me, Miss Snooty Cat!"},
    {username: "Lady Eboshi", chirpText: "Cut off a wolf's head and it still has the power to bite."},
    {username: "Yubaba", chirpText: "Oh, Haku's bleeding all over the carpet."},
    {username: "Sophie", chirpText: "Yes, I'm the scariest witch of them all—the kind that cleans!"},
]

fs.writeFileSync(chirpsPath, JSON.stringify(chirps), function(err) {
    if (err) throw err;
    console.log('complete');
});