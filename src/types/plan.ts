export type WorkoutPlan = {
  title: string;
  content?: {
    day: string;
    exercises?: string;
  }[];
  description?: string;
  type: "plan" | "note";
};
