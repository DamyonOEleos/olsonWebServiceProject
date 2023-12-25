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
    Hello World
*/
app.get('/', (req, res) => {
    return res.json({message : `Hello World`})
})

/*
    POST
     ./authenticate is a POST method that takes in the username and password of a user
     and responds with a user schema including the username, password, full_name and most
     importantly, the api_token for the user. The api_token is used to ensure that the correct
     user is logged in and is checked periodically in the authenticate GET method. 

    Required Body : username, password, is_team_driver_login
        username - the username of the user
        password - the password for the user associated with the username
        is_team_driver_login - wether or not the user is a team driver or not

    Response codes : 
        200 - Successful
        400 - Bad request
        401 - Invalid username or password or user was not found
*/
app.post('/authenticate', (req, res) => {
    const { username, password, is_team_driver_login } = req.body
    const EPK = req.headers['eleos-platform-key']

    if(EPK !== process.env.ELEOS_PLATFORM_KEY){
        return res.status(401).json({message : `Error 401 : Missing or invalid API key`})
    }

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
        res.status(400).json({message : `Bad request`})
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
    const EPK = req.headers['eleos-platform-key']

    if(EPK !== process.env.ELEOS_PLATFORM_KEY){
        return res.status(401).json({message : `Error 401 : Missing or invalid API key`})
    }
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