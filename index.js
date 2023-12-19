const express = require("express");
const app = express();
const PORT = 8080;

app.use(express.json())

app.listen(
    PORT,
    () => console.log(`API ready at http://localhost:${PORT}`)
)

/*
    Updates needed for the following call : 
        * Connect to a DB (MongoDB or other)
        * Only res.send if the username exists in the db, as well as if the username matches
          the password within the DB
*/
app.post('/authenticate', (req, res) => {
    const { username } = req.body
    const { password } = req.body
    const { is_team_driver_login } = req.body

    if(!username | !password) {
        res.status(401).send({message: 'Unauthorized due to invalid username or password.'})
    }

    res.send({
        user: `User with the username ${username} found`,
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
    res.send({
        message: `Loads!`
    })
})