import {
    getUserService,
    getUsersService,
    updateUserService,
    deleteUserService
} from '../services/index.js';
import Success from "../utils/success.js";

export const fetchUser = async (req, res) => {
    try {
      const user = await getUserService(req.params.id);
      res.json(Success(user, `Successfully fetched user - ${req.params.username}`));
    } catch (err) {
      res.status(err.status).json(err.message);
    }
};
  
export const fetchUsers = async (req, res) => {
    try {
      const users = await getUsersService();
      res.json(Success(users, "Successfully fetched Users."));
    } catch (err) {
      res.status(err.status).json(err.message);
    }
};
  
export const updateUser = async (req, res) => {
    try {
      const user = await updateUserService(req.params.id, req.body);
      res.json(Success(user, `Successfully updated user - ${req.params.username}`));
    } catch (err) {
      res.status(err.status).json(err.message);
    }
};
  
export const deleteUser = async (req, res) => {
    try {
      const user = await deleteUserService(req.params.id);
      res.json(Success(user, `Successfully deleted user - ${req.params.username}`));
    } catch (err) {
      res.status(err.status).json(err.message);
    }
};