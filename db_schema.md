## GZCLP Schema

### users

 column | type | details
--------|--------|-------
id | SERIAL |PRIMARY KEY
first_name | character varying
last_name | character varying
email | character varying
username | character varying


### workouts

column | type | details
-------|------|--------
id | SERIAL | PRIMARY KEY 
name | character varying |
user_id | integer | REFERENCES users(id)

### tiers

column | type | details
-------|------|--------
id | SERIAL | PRIMARY KEY 
name | character varying |
workout_id | integer | REFERENCES workouts(id)


### lifts

column | type | details
-------|------|--------
id | SERIAL | PRIMARY KEY 
lift_name_id | integer | REFERENCES lift_names(id)
weight | integer |
rep_id | integer | REFERENCES reps(id),
tier_id | integer | REFERENCES tiers(id)
user_id | integer | REFERENCES users(id)

### lift_names

column | type | details
-------|------|--------
id | SERIAL | PRIMARY KEY
name | character varying | 


### reps

column | type | details
-------|------|--------
id | SERIAL | PRIMARY KEY
name | character varying | 
