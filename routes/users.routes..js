import express from "express";
import { register, login, findUser, updateUser, deleteUser, findUsers } from "../services/index.js";

const userRouter = express.Router();
userRouter.post('/register', register);
userRouter.post('/login', login);
userRouter.get('/:id', findUser);
userRouter.get('/', findUsers);
userRouter.put('/:id', updateUser);
userRouter.delete('/:id', deleteUser);

export default userRouter;