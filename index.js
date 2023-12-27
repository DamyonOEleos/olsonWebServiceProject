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

const Loads    = require('./schemas/loads')
const Users    = require('./schemas/users')
const Messages = require('./schemas/messages')


/*
    Sample 'Hello World' for GET
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

    Authorization
        Eleos Platform Key required to access ./authenticate

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
    const EPK = req.headers['eleos-platform-key']

    if(EPK !== process.env.ELEOS_PLATFORM_KEY){
        return res.status(401).json({message : `Error 401 : Missing or invalid API key`})
    }
    
    const { token } = req.params

    if( token !== 'tk001'){
        return res.status(401).json({message : `Error 401: Missing or Invalid Token`})
    } else {
        Users.findOne({api_token: `${token}`}).then((user) => {
            res.status(200).json(user)
        })
    }
    
})

/*
    GET
     ./loads is called to gather a list of loads within the MongoDB. Returns multiple Loads 
     Schemas.

     Authorization :
        Eleos platform key required to access GET ./loads

    Required Body : N/A
        No body is required

    Response Codes : 
        200 - Successful
        400 - Bad request
        401 - Missing API key
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
        res.status(400)
    })
})

/*
    PUT
     ./messages/:handle requires that a handle is passed through, as well as a body containing
     at least the direction of the message, the username of the person sending/recieving a message
     and the message type. The message is saved within the DB, and the only response sent by the 
     server, assuming that the request is successful, is the handle.

    Authorization :
        Eleos Platform Key is required for this request

    Path Parameters : Handle
        Handle a unique identifier for each message sent/recieved

    Required body : direction, username, message_type
        direction - either inbound or outbound
        username - recipient if outbound, sender if inbound
        message_type - text or form

*/
app.put('/messages/:handle', (req, res) => {
    const { handle } = req.params;
    const { direction, username, message_type, body, form_code,
    contact_code, read_at, deleted_at, in_reply_to_handle,
    workflow_action, telemantics, server_validation_request, server_validation_status } = req.body
    const EPK = req.headers['eleos-platform-key']
    const composed_at = new Date


    if(EPK !== process.env.ELEOS_PLATFORM_KEY){
        return res.status(401).json({message : `Error 401 : Missing or invalid API key`})
    }

    if(!direction | !username | !message_type){
        return res.status(400).json({message: `Required parameters not met`})
    }

    const message = new Messages({
        direction: direction,
        username: username,
        message_type: message_type,
        body: body,
        form_code: form_code,
        contact_code: contact_code,
        composed_at: composed_at,
        read_at: read_at,
        deleted_at: deleted_at,
        in_reply_to_handle: in_reply_to_handle,
        workflow_action: workflow_action,
        telemantics: telemantics,
        server_validation_request: server_validation_request,
        server_validation_status: server_validation_status

    })
    message.save().then(
        res.json(handle)
    ).catch((err) => {
        console.log(err)
        res.status(401)
    })

    res.send({
        message: 'Messages'
    })
})