const db = require("../db/dbConfig");

const getAllWorkouts = async () => {
  try {
    const allWorkouts = await db.any("SELECT * FROM workouts");
    return allWorkouts;
  } catch (error) {
    return error;
  }
};

module.exports = { getAllWorkouts };
