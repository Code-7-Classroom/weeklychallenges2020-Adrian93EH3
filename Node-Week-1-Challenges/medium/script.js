const fs = require('fs');

fs.readFile('thePlanets.txt', 'utf8', (error, content) => {
    if (error) {
        console.log(error);
    }
    console.log(content);
})