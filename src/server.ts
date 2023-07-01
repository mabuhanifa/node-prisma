import cors from "cors";
import express from "express";
import userRouter from "./routes/userRoute";
const port = process.env.PORT || 3000;

const app = express();
app.use(express.json());
app.use(cors());

app.use("/api", userRouter);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
