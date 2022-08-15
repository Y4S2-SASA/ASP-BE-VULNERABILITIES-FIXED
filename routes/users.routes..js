import express from "express";
import { register, login } from "../services/index.js";
import {
    deleteUser,
    fetchUser,
    fetchUsers,
    updateUser
} from '../controllers/index.js';

const userRouter = express.Router();
userRouter.post('/register', register);
userRouter.post('/login', login);
userRouter.get('/fetch/:id', fetchUser);
userRouter.get('/fetch', fetchUsers);
userRouter.put('/update/:id', updateUser);
userRouter.delete('/delete/:id', deleteUser);

export default userRouter;