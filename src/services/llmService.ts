import { Response } from "express";
import { openAi } from "../config/openAi";

export const getWorkoutGoals = async (
  data: {
    dateOfBirth: string;
    height: number;
    weight: number;
    weeklyActivities: string[];
  },
  res: Response<any, Record<string, any>>
) => {
  try {
    const stream = openAi.beta.chat.completions.stream({
      model: "gpt-4",
      messages: [
        {
          role: "user",
          content: `Generate a list of 5 different workout goals for the following details: Date of Birth: ${
            data.dateOfBirth
          }, Height: ${data.height} cm, Weight: ${
            data.weight
          } kg, Weekly Activities: ${data.weeklyActivities.join(", ")}. 
           Format the goals as "goal title: goal description", example "Muscle Gain: Aim to increase lean body mass through weightlifting or resistance training four times a week.". 
           Do not number the goals. Do not include other information in the response.`,
        },
      ],
      stream: true,
    });

    for await (const chunk of stream) {
      const content = chunk.choices[0]?.delta?.content || "";
      if (content) {
        res.write(content);
      }
    }
  } catch (error: any) {
    throw new Error(`Error fetching workout goals: ${error.message}`);
  }
};

export const getWorkoutPlan = async (
  data: {
    dateOfBirth: string;
    height: number;
    weight: number;
    weeklyActivities: string[];
    workoutGoal: string;
  },
  res: Response<any, Record<string, any>>
) => {
  try {
    const stream = openAi.beta.chat.completions.stream({
      model: "gpt-4",
      messages: [
        {
          role: "user",
          content: `Generate a weekly workout plan for 1 month for the following details: Date of Birth: ${
            data.dateOfBirth
          }, Height: ${data.height} cm, Weight: ${
            data.weight
          } kg, Weekly Activities: ${data.weeklyActivities.join(
            ", "
          )}, Workout Goal: ${data.workoutGoal}. 
          Format the plan as follows:
          Week 1:
          Day 1: [activity]
          Day 2: [activity]
          Day 3: [activity]
          Day 4: [activity]
          Day 5: [activity]
          Day 6: [activity]
          Day 7: [activity]
  
          Week 2:
          Day 1: [activity]
          Day 2: [activity]
          Day 3: [activity]
          Day 4: [activity]
          Day 5: [activity]
          Day 6: [activity]
          Day 7: [activity]

          Week 3:
          Day 1: [activity]
          Day 2: [activity]
          Day 3: [activity]
          Day 4: [activity]
          Day 5: [activity]
          Day 6: [activity]
          Day 7: [activity]

          Week 4:
          Day 1: [activity]
          Day 2: [activity]
          Day 3: [activity]
          Day 4: [activity]
          Day 5: [activity]
          Day 6: [activity]
          Day 7: [activity]

          Note: [Some Notes here].
          Include specific activities for each day in the format "Day X: [activity]". 
          Do not number the weeks or days, just list the activities clearly. Do not include other information in the response.`,
        },
      ],
      stream: true,
    });

    for await (const chunk of stream) {
      const content = chunk.choices[0]?.delta?.content || "";
      if (content) {
        res.write(content);
      }
    }
  } catch (error: any) {
    throw new Error(`Error fetching workout plan: ${error.message}`);
  }
};
