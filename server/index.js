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

pgClient
  .query(
    'CREATE TABLE IF NOT EXISTS users (id serial PRIMARY KEY, first_name varchar, last_name varchar, email varchar, username varchar)'
  )
  .catch(err => console.log(err))

app.get('/hello', (req, res) => {
  res.send('This is express. Hi.')
})

app.post('/users', async (req, res) => {
  const { id, first_name, last_name, email, username } = req.body
  pgClient.query(
    'INSERT INTO users(id, first_name, last_name, email, username) VALUES($1, $2, $3, $4, $5)',
    [id, first_name, last_name, email, username]
  )

  res.send('Posted successfully')
})

app.get('/users', async (req, res) => {
  const values = await pgClient.query('SELECT * from users')

  res.send(values.rows)
})

app.get('/users/:id', async (req, res) => {
  const values = await pgClient.query('SELECT * from users WHERE id = $1', [
    req.params.id,
  ])

  res.send(values.rows)
})

app.get('/users/:id/workouts', async (req, res) => {
  const values = await pgClient.query(
    'SELECT lifts.id, lifts.user_id, lifts.weight, lifts.workout_id, workouts.name AS workout_name, lifts.tier, lift_names.name AS lift_name, reps.name AS reps FROM lifts JOIN lift_names ON lifts.lift_name_id = lift_names.id JOIN reps ON lifts.rep_id = reps.id JOIN workouts ON lifts.workout_id = workouts.id WHERE lifts.user_id = $1',
    [req.params.id]
  )

  res.send(values.rows)
})

app.get('/users/:id/workouts/:workoutName', async (req, res) => {
  const values = await pgClient.query(
    'SELECT lifts.id, lifts.user_id, workouts.name AS workout_name, lifts.weight, lifts.workout_id, lifts.tier, lift_names.name AS lift_name, reps.name AS reps FROM lifts JOIN lift_names ON (lifts.lift_name_id = lift_names.id) JOIN reps ON (lifts.rep_id = reps.id) JOIN workouts ON (lifts.workout_id = workouts.id) WHERE lifts.user_id = $1 AND workouts.name = $2',
    [req.params.id, req.params.workoutName]
  )

  res.send(values.rows)
})

// app.post('/workouts', async (req, res) => {
//   const { user_id,  }
//   const values = await pgClient.query(`WITH workoutIns AS (
//   INSERT INTO workouts(name, user_id)
//   VALUES ('test', 1)
//   RETURNING id as workout_id
// )
// INSERT INTO lifts( user_id, weight, lift_name_id, rep_id, workout_id, tier)
// SELECT 1, 25, 4, 1, workout_id, 1 FROM workoutIns
//   UNION ALL
// SELECT 1, 25, 5, 2, workout_id, 2 FROM workoutIns
//   UNION ALL
// SELECT 1, 25, 6, 3, workout_id, 3 FROM workoutIns
// `, [ insert values here ])
// })

//app.get('/workouts/:id')

app.listen(4000, err => {
  console.log('Server listening on port 4000')
})
