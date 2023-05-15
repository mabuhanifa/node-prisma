import { PrismaClient } from "@prisma/client";
import express, { Request, Response } from "express";
const port = process.env.PORT || 3000;

const app = express();
app.use(express.json());
const client = new PrismaClient();
console.log(`object`);
app.post("/", (req: Request, res: Response) => {
  const data = req.body;
  try {
    console.log(data);
    res.send(data);
  } catch (error) {
    console.log(error);
  }
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
