const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = new express()
app.use(cors())
app.use (bodyParser.json())

app.get('/hello', (req, res) => {
  res.send('This is express. Hi.')
})

app.listen(4000, err => {
  console.log('Server listening on port 4000')
})
