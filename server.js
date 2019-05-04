const express = require('express')
const cors = require('cors')
const app = express()
const port = 3000

app.use(cors())

app.get('/add7', (req, res) => {
  // add 7 to the database with a specific id

  // query that id from the database

  // respond to the client with that id and value

})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
