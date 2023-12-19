const app = require('express')();
const PORT = 8080;

app.listen(
    PORT,
    () => console.log(`API ready at http://localhost:${PORT}`)
)