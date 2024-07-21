const express = require("express");
const router = express.Router();

const {
  getAllWorkouts,
  getOneWorkout,
  createWorkout,
  deleteWorkout,
  updateWorkout,
} = require("../queries/workout");

// GET ALL WORKOUTS
router.get("/", async (req, res) => {
  const allWorkouts = await getAllWorkouts();
  if (allWorkouts[0]) {
    res.status(200).json(allWorkouts);
  } else {
    res.status(500).json({ error: "server error" });
  }
});

// GET A SINGLE WORKOUT
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const workout = await getOneWorkout(id);
  if (workout) {
    res.status(200).send(workout);
  } else {
    res.status(404).json({ error: `Workout with id: ${id} not found!` });
  }
});

// CREATE A NEW WORKOUT
router.post("/", async (req, res) => {
  try {
    const currentWorkout = await createWorkout(req.body);
    res.status(201).send(currentWorkout);
  } catch (error) {
    res.status(400).json({ error: "Bad Request" });
  }
});

// DELETE A WORKOUT BY SPECIFIED ID
router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const workoutToDelete = await deleteWorkout(id);

  if (workoutToDelete) {
    res.status(200).json(workoutToDelete);
  } else {
    res.status(404).json({ error: `Workout with id: ${id} not found!` });
  }
});

// UPDATE A WORKOUT BY SPECIFIED ID
router.put("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const workoutToUpdate = await updateWorkout(id, req.body);
    res.status(200).json(workoutToUpdate);
  } catch (error) {
    res.status(404).json({ error: `Workout with id: ${id} not found!` });
  }
});

module.exports = router;
