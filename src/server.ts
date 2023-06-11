import { PrismaClient } from "@prisma/client";
import express, { Request, Response } from "express";
const port = process.env.PORT || 5000;

const app = express();
app.use(express.json());
const prisma = new PrismaClient();

app.post("/", async (req: Request, res: Response) => {
  const { username, password } = req.body;
  console.log(req.body);
  try {
    const user = prisma.user.create({
      data: {
        username: username,
        password: password,
      },
    });
    res.send(user);
  } catch (error) {
    console.log(error);
  }
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
