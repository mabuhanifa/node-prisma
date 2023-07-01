import { PrismaClient } from "@prisma/client";
import cors from "cors";
import express, { Request, Response } from "express";
import userRouter from "./routes/userRoute";
const port = process.env.PORT || 5000;

const app = express();
app.use(express.json());
app.use(cors());

const prisma = new PrismaClient();

app.use("/", userRouter);

app.post("/", async (req: Request, res: Response) => {
  const { username, password } = req.body;

  try {
    const user = await prisma.user.create({
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

app.get("/", async (req: Request, res: Response) => {
  try {
    const users = await prisma.user.findMany();
    res.send(users);
  } catch (error) {
    res.send(error);
  }
});

app.get("/:id", async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const user = await prisma.user.findUnique({
      where: {
        id: Number(id),
      },
    });
    res.send(user);
  } catch (error) {
    console.log(error);
  }
});

app.put("/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  const { username, password } = req.body;

  try {
    const user = await prisma.user.update({
      where: {
        id: Number(id),
      },
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

app.delete("/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const user = await prisma.user.delete({
      where: {
        id: Number(id),
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
