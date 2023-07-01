import express from "express";
import {
  createUser,
  deleteUser,
  getSingleUser,
  getUsers,
  updateUser,
} from "../controllers/userController";

const router = express.Router();

router.route("/register").post(createUser);

router.route("/users").get(getUsers);

router
  .route("/users/:id")
  .get(getSingleUser)
  .put(updateUser)
  .delete(deleteUser);

export default router;
