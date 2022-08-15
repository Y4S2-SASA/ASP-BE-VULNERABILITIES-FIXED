import express from "express";
import { register, login, findUsers, updateUser, deleteUser } from "../services/index.js";

const userRouter = express.Router();
userRouter.post('/register', register);
userRouter.post('/login', login);
userRouter.get('/', findUsers);
userRouter.put('/:id', updateUser);
userRouter.delete('/:id', deleteUser);

export default userRouter;