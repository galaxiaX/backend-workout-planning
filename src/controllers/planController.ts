import { Response } from "express";
import { Request } from "../types/type";
import Plan from "../models/Plan";
import { getWorkoutGoals, getWorkoutPlan } from "../services/llmService";

export const fetchWorkoutGoals = async (req: Request, res: Response) => {
  const { dateOfBirth, height, weight, weeklyActivities } = req.body;

  try {
    res.setHeader("Content-Type", "text/event-stream");
    res.setHeader("Cache-Control", "no-cache");
    res.setHeader("Connection", "keep-alive");
    res.flushHeaders();

    await getWorkoutGoals(
      {
        dateOfBirth,
        height,
        weight,
        weeklyActivities,
      },
      res
    );

    res.end();
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

export const fetchWorkoutPlan = async (req: Request, res: Response) => {
  const { dateOfBirth, height, weight, weeklyActivities, workoutGoal } =
    req.body;

  try {
    res.setHeader("Content-Type", "text/event-stream");
    res.setHeader("Cache-Control", "no-cache");
    res.setHeader("Connection", "keep-alive");
    res.flushHeaders();

    await getWorkoutPlan(
      {
        dateOfBirth,
        height,
        weight,
        weeklyActivities,
        workoutGoal,
      },
      res
    );

    res.end();
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

export const createPlan = async (req: Request, res: Response) => {
  const {
    planName,
    dateOfBirth,
    height,
    weight,
    weeklyActivities,
    workoutGoal,
    workoutPlan,
  } = req.body;

  try {
    const plan = new Plan({
      user: req.user._id,
      planName,
      dateOfBirth,
      height,
      weight,
      weeklyActivities,
      workoutGoal,
      workoutPlan,
    });

    await plan.save();

    res.status(201).json(plan);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

export const getPlans = async (req: Request, res: Response) => {
  try {
    const plans = await Plan.find({ user: req.user._id }).sort({
      createdAt: -1,
    });
    res.status(200).json(plans);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

export const getPlanById = async (req: Request, res: Response) => {
  try {
    const plan = await Plan.findById(req.params.id);

    if (!plan) {
      return res.status(404).json({ message: "Plan not found" });
    }

    if (plan.user.toString() !== req.user._id.toString()) {
      return res.status(401).json({ message: "Not authorized" });
    }

    res.status(200).json(plan);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

export const deletePlan = async (req: Request, res: Response) => {
  try {
    const plan = await Plan.findById(req.params.id);

    if (!plan) {
      return res.status(404).json({ message: "Plan not found" });
    }

    if (plan.user.toString() !== req.user._id.toString()) {
      return res.status(401).json({ message: "Not authorized" });
    }

    await plan.deleteOne();

    res.status(200).json({ message: "Plan removed" });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};
