//const users = require('./routes/users')
const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 3001

app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello World!')
})
//fake database 

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})