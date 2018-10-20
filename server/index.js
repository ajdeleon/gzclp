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

pgClient.query('CREATE TABLE IF NOT EXISTS users (id serial PRIMARY KEY, first_name varchar, last_name varchar, email varchar, username varchar)').catch(err => console.log(err))

app.get('/hello', (req, res) => {
  res.send('This is express. Hi.')
})

app.post('/users', async (req, res) => {
  const {id, first_name, last_name, email, username } = req.body
  pgClient.query('INSERT INTO users(id, first_name, last_name, email, username) VALUES($1, $2, $3, $4, $5)', [id, first_name, last_name, email, username])

  res.send('Posted successfully')
})

app.get('/users', async (req, res) => {
  const values = await pgClient.query('SELECT * from users')

  res.send(values.rows)
})

app.listen(4000, err => {
  console.log('Server listening on port 4000')
})
