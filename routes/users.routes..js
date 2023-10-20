import express from "express";
import { register, login, findUser, updateUser, deleteUser, findUsers, getGoogleAuthCodeSignup, getGoogleAuthCodeSignin, signupWithGoogle, signinWithGoogle } from "../services/index.js";

const userRouter = express.Router();
userRouter.get('/google/auth/signin', getGoogleAuthCodeSignin)
userRouter.get('/google/auth/signup', getGoogleAuthCodeSignup)
userRouter.get('/google/callback/signup', signupWithGoogle)
userRouter.get('/google/callback/signin', signinWithGoogle)
userRouter.post('/register', register);
userRouter.post('/login', login);
userRouter.get('/:id', findUser);
userRouter.get('/', findUsers);
userRouter.put('/:id', updateUser);
userRouter.delete('/:id', deleteUser);

export default userRouter;