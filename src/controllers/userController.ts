import bcrypt from "bcrypt";
import { Request, Response } from "express";
import prisma from "../utils/prisma";

export const createUser = async (req: Request, res: Response) => {
  const { username, password } = req.body;

  const hashed = bcrypt.hashSync(password, 10);

  try {
    const user = await prisma.user.create({
      data: {
        username: username,
        password: hashed,
      },
    });

    res.send({
      data: user.username,
      success: true,
      message: `user created with name ${user.username}`,
    });
  } catch (error) {
    res.send(error);
  }
};

export const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await prisma.user.findMany();
    res.send(users);
  } catch (error) {
    res.send(error);
  }
};

export const getSingleUser = async (req: Request, res: Response) => {
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
};

export const updateUser = async (req: Request, res: Response) => {
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
};

export const deleteUser = async (req: Request, res: Response) => {
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
};
