# Damyon's Web Service Project
Web service project for Eleos Technologies.
## TO DO LIST
- [X] Decide on a language / framework [JavaScript/Node.js]
- [X] Get a boilerplate server running
- [ ] Implement endpoints:
  - [X] (POST) **Login**
    - [X] Takes in a username/password
    - [X] Returns a user object and a token to be used for verification
  - [ ] (GET) **Verifies**
    - [ ] Use token recieved from **Login** to verify periodically as the user uses the app and ensures that they should still be logged in. Instead of a user/pass it sends a token
  - [X] (GET) **Load**
    - [X] Returns a list/array of load objects
  - [X] (PUT) **Message**
    - [X] Message data sent to this endpoint
## Endpoints

### /authenticate
  - /authenticate is a POST method that takes in a usernam/password and responds with a user object that contains a token used for verification.

### /authenticate/:token
  - WIP

### /loads
  - /load is a GET method that returns a list of load objects

### /messages/:handle
  - /messages is a PUT method takes in a message body and saves it to the DB, then responds with the unique handle