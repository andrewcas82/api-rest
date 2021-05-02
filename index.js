const express = require('express')
    //const body_parser = require('body-parser')
const cors = require('cors')
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

const db_manager = require('./persistence/dbmanager')

app.get('/', (req, res) => {
    res.send('Hola mundo')
})

//CRUD
//C CREATE - POST
app.post('/users', (req, res, next) => {
    db_manager.user_create(req, res, next)
})

//R READ - GET
app.get('/users', (req, res, next) => {
    db_manager.user_details(req, res, next)
})

//U UPDATE - PUT/PATCH
app.put('/users', (req, res, next) => {
    db_manager.user_update(req, res, next)
})

//D DELETE - DELETE
app.delete('/users', (req, res, next) => {
    db_manager.user_delete(req, res, next)
})

app.listen(8080, () => {
    console.log('API REST running in port 8080 :) ');
});