import { Router } from "express";
import {
  createPlan,
  getPlans,
  getPlanById,
  fetchWorkoutGoals,
  fetchWorkoutPlan,
  deletePlan,
} from "../controllers/planController";
import { protect } from "../middleware/authMiddleware";

const router = Router();

router.route("/").post(protect, createPlan).get(protect, getPlans);
router.route("/goals").post(protect, fetchWorkoutGoals);
router.route("/plan").post(protect, fetchWorkoutPlan);
router.route("/:id").get(protect, getPlanById).delete(protect, deletePlan);

export default router;
