CREATE TABLE "users" (
  "id" serial PRIMARY KEY,
  "first_name" varchar,
  "last_name" varchar,
  "email" varchar,
  "username" varchar
);

CREATE TABLE "workouts" (
  "id" serial PRIMARY KEY,
  "name" varchar,
  "user_id" int
);

CREATE TABLE "tiers" (
  "id" serial PRIMARY KEY,
  "name" varchar,
  "workout_id" int
);

CREATE TABLE "lifts" (
  "id" serial PRIMARY KEY,
  "name" int,
  "weight" int,
  "reps_id" int,
  "tier_id" int
);

CREATE TABLE "reps" (
  "id" serial PRIMARY KEY,
  "name" varchar
);

CREATE TABLE "lift_names" (
  "id" serial PRIMARY KEY,
  "name" varchar
);

ALTER TABLE "workouts" ADD FOREIGN KEY ("user_id") REFERENCES "users" ("id");

ALTER TABLE "tiers" ADD FOREIGN KEY ("workout_id") REFERENCES "workouts" ("id");

ALTER TABLE "lifts" ADD FOREIGN KEY ("tier_id") REFERENCES "tiers" ("id");

ALTER TABLE "reps" ADD FOREIGN KEY ("id") REFERENCES "lifts" ("reps_id");

ALTER TABLE "lift_names" ADD FOREIGN KEY ("id") REFERENCES "lifts" ("name");
