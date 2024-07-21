import openAI from "openai";
import dotenv from "dotenv";
dotenv.config();

export const openAi = new openAI({
  apiKey: process.env.OPENAI_API_KEY,
});
