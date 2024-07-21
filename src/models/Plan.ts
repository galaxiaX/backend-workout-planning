import { Document, Schema, model } from "mongoose";
import { WorkoutPlan } from "../types/plan";

interface IPlan extends Document {
  user: Schema.Types.ObjectId;
  planName: string;
  dateOfBirth: Date;
  height: number;
  weight: number;
  weeklyActivities: string[];
  workoutGoal: string;
  workoutPlan: WorkoutPlan[];
}

const WorkoutPlanSchema: Schema = new Schema({
  title: {
    type: String,
    required: true,
  },
  content: [
    {
      day: {
        type: String,
        required: true,
      },
      exercises: {
        type: String,
      },
    },
  ],
  description: {
    type: String,
  },
  type: {
    type: String,
    enum: ["plan", "note"],
    required: true,
  },
});

const PlanSchema: Schema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    planName: {
      type: String,
      required: true,
    },
    dateOfBirth: {
      type: Date,
      required: true,
    },
    height: {
      type: Number,
      required: true,
    },
    weight: {
      type: Number,
      required: true,
    },
    weeklyActivities: {
      type: [String],
    },
    workoutGoal: {
      type: String,
    },
    workoutPlan: {
      type: [WorkoutPlanSchema],
    },
  },
  {
    timestamps: true,
  }
);

const Plan = model<IPlan>("WorkoutPlanningPlan", PlanSchema);

export default Plan;
