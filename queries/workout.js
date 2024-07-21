const db = require("../db/dbConfig");

const getAllWorkouts = async () => {
  try {
    const allWorkouts = await db.any("SELECT * FROM workouts");
    return allWorkouts;
  } catch (error) {
    return error;
  }
};

const getOneWorkout = async (id) => {
  try {
    const oneWorkout = await db.one("SELECT * FROM workouts WHERE id = $1", id);
    return oneWorkout;
  } catch (error) {
    return error;
  }
};

const createWorkout = async (workout) => {
  const { type, durationInMinutes, caloriesBurned, date } = workout;
  try {
    const currWorkout = await db.one(
      "INSERT INTO workouts (type, durationInMinutes, caloriesBurned, date) VALUES ($1, $2, $3, $4) RETURNING *",
      [type, durationInMinutes, caloriesBurned, date]
    );
    return currWorkout;
  } catch (error) {
    return error;
  }
};

const deleteWorkout = async (id) => {
  try {
    const deletedWorkout = await db.one(
      "DELETE FROM workouts WHERE id = $1 RETURNING *",
      id
    );
    return deletedWorkout;
  } catch (error) {
    return error;
  }
};

module.exports = { getAllWorkouts, getOneWorkout, createWorkout, deleteWorkout };
