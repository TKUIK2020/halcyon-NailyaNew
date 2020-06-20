const jokes = require('random-joke-getter')
require("http").createServer((req, res) => {
    console.log(`url: ${req.url}`)
    jokes.getRandomJoke((joke) => {
        res.end(joke)
    })
}).listen(3000, () => console.log("Server is on"));