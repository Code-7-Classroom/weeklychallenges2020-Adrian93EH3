let express = require('express');
let app = express();
let data = require('./public/employee.json')

app.get('/', (req, res) => {
    res.send("Home page.")
}) 

app.get('/employee', (req, res) => {
    if(!data) {
        res.status(404).send(`Could not find employees`)
    }
    res.send(data)
})

app.get('/employee/:id', (req, res) => {
    const sData = data.employees.find(function (employee) {
        console.log(employee.id)
        return parseInt(req.params.id) === employee.id
    })
    if (!sData) {
      res.status(404).send(`Could not find the id`);
    }
        res.send(sData);
})

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})