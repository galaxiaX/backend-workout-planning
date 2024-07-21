import { Request, Response, Router } from "express";

const router = Router();

router.get("/", async (req: Request, res: Response) => {
  const time = new Date();
  res.json({
    result: "ok",
    time,
    main_url: process.env.BASE_URL,
    port: process.env.PORT,
  });
});

export default router;
