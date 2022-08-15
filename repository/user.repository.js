import { User } from "../models/index.js";
import AppError from "../utils/appError.js";

export const getUser= (id) => {
    User.findById(id)
    .then((user) => {
      return Promise.resolve(user);
    })
    .catch(() => {
      throw new AppError("Internal server error.", 500);
    });
}

export const getUsers = () => {
    User.find()
    .then((user) => {
      return Promise.resolve(user);
    })
    .catch(() => {
      throw new AppError("Internal server error.", 500);
    });
}

export const updateUser = (id, data) => {
    User.findByIdAndUpdate(id, data, { new: true })
    .then((user) => {
      return Promise.resolve(user);
    })
    .catch(() => {
      throw new AppError("Internal server error.", 500);
    });
}
    

export const deleteUser = (id) => {
    User.findByIdAndDelete(id)
    .then((user) => {
      return Promise.resolve(user);
    })
    .catch(() => {
      throw new AppError("Internal server error.", 500);
    });
}
    
    