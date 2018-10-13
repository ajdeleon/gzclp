const keys = require('./keys')

const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = new express()
app.use(cors())
app.use(bodyParser.json())

const { Pool } = require('pg')
const pgClient = new Pool({
  port: keys.pgPort,
  user: keys.pgUser,
  host: keys.pgHost,
  database: keys.pgDatabase,
  password: keys.pgPassword,
})

pgClient.query('CREATE TABLE IF NOT EXISTS users (id INT, name TEXT)').catch(err => console.log(err))

app.get('/hello', (req, res) => {
  res.send('This is express. Hi.')
})

app.post('/users', async (req, res) => {
  const id = req.body.id
  const name = req.body.name

  pgClient.query('INSERT INTO users(id, name) VALUES($1, $2)', [id, name])

  res.send('Posted successfully')
})

app.get('/users', async (req, res) => {
  const values = await pgClient.query('SELECT * from users')

  res.send(values.rows)
})

app.listen(4000, err => {
  console.log('Server listening on port 4000')
})
