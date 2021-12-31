// Use mongoose
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutData = new Schema({
  exercise: [
    {
      name: {
        type: String,
        trim: true,
        required: "Enter exercise name",
      },
      type: {
        type: String,
        trim: true,
        required: "",
      },
      duration: {
        type: Number,
      },
      weight: {
        type: Number,
      },
      distance: {
        type: Number,
      },
      sets: {
        type: Number,
      },
      reps: {
        type: Number,
      },
    },
  ],
  day: {
    type: Date,
    default: Date.now,
  },
});

const workout = mongoose.model("Workout", workoutData);
module.exports = workout;
