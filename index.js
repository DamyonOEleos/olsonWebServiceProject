// Set up required dependencies
require('dotenv').config()
const express = require("express");
const mongoose = require("mongoose")

// App and Port For local Host
const app = express();
const PORT = 8080;

// Parse json bodies
app.use(express.json())

// DB connection
const dbURI = process.env.MONGO_DB_URI

async function run(){
    await mongoose.connect(dbURI)
    .then(console.log("DB Connected"))
    .catch(err => console.log(err))
}

run()
// Local host listen
app.listen(
    PORT,
    () => console.log(`API ready at http://localhost:${PORT}`)
)

// Schemas

const Loads = require('./schemas/loads')
const Users = require('./schemas/users')

/*
    Updates needed for the following call : 
        * Connect to a DB (MongoDB or other)
        * Only res.send if the username exists in the db, as well as if the username matches
          the password within the DB
*/
app.post('/authenticate', (req, res) => {
    const { username, password, is_team_driver_login } = req.body

    Users.findOne({ username: {$regex: new RegExp(username, 'i') } }).then((user) => {
        if(!user){
            console.log('User not found')
            return res.status(401).json({message : `User ${username} not found`})
        }
        
        if(user.password !== password) {
            console.log(`Incorrect Password for user ${username}`)
            return res.status(401).json({message : `Password incorrect`})
        }

        console.log(user)
        return res.status(200).json(user)
    }).catch((err) => {
        console.log(err)
        res.status(401)
    })
})

/*
    Updates needed for the following call - 
        * Connect authenticate with DB
        * Only send correct response when token matches whats needed
*/
app.get('/authenticate/:token', (req, res) => {
    const { token } = req.params
    res.send({
        message: `Found user with token: ${token}`
    })
})

/*
    Updates needed for following call - 
        * Connect to DB so it can return a list of loads
*/
app.get('/loads', (req, res) => {
    Loads.find({})
    .then((load) => {
        res.json(load)
        console.log(load)
    }).catch((err) => {
        console.log(err)
        res.status(401)
    })
})

/*
    Updates needed for the following call -
        * Connect to DB
        * Body params for PUT request
*/
app.put('/messages/:handle', (req, res) => {
    const { handle } = req.params;

    res.send({
        message: 'Messages'
    })
})