import { PrismaClient } from "@prisma/client";
import express from "express";
const port = process.env.PORT || 3000;
const app = express();
app.use(express.json());
const client = new PrismaClient();

app.post("/", (req: any, res: any) => {
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
