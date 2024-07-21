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

module.exports = { getAllWorkouts, getOneWorkout };
