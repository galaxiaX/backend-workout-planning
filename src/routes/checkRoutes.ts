import { Request, Response, Router } from "express";
import mongoose from "mongoose";

const router = Router();

router.get("/", async (req: Request, res: Response) => {
  // const result = await mongoose.connection.db. ().ping();
  const time = new Date();
  res.json({
    result: "ok",
    time,
    main_url: process.env.BASE_URL,
    port: process.env.PORT,
    // data: result,
  });
});

export default router;
