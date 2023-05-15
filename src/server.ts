import { PrismaClient } from "@prisma/client";
import express from "express";

const app = express();
const client = new PrismaClient();

app.get("/", (req: any, res: any) => {
  res.send("Hello World");
});
