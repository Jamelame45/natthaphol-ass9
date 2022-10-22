const express = require('express')
const app = express()

app.get('/',(req, res) => {
    res.send('Hello World')
})

app.get('/getname', (req, res) => {
    res.send('Natthaphol Labchai')
})

app.get('/getprofile', (req, res) => {
    let data = {
        name: 'Natthaphol labchai',
        age: 20,
        apocalypse: 'Live for tomorrow',
        detail: ' I am a student of the Faculty of Engineering. Multimedia and Entertainment 2nd year with skills in graphics, drawing, photography and music.',
    }
    res.send(data)
})

app.get('/getabout', (req, res) => {
    let data = {
    name: 'Natthaphol labchai',
    age: 20,
    email: 'Natthaphol.lapc@bumail.net',
    addreaa: '',
    }
    res.send(data)
})

app.get('/getproject', (req, res) => {
    let data = {
    project_name: '',
    project_description: '',
    }
    res.send(data)
})

app.get('/getcontact', (req, res) => {
    let data = {
        address: '',
        email: '',
        phone_number: '',
    }
    res.send(data)
})

app.listen(3000, () => {
    console.log('Start server at port 3000.')
})