import { User } from "../models/index.js";

export const getUser= (_id) => {
    User.findById(_id)
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

export const updateUser = (_id, data) => {
    User.findByIdAndUpdate(_id, data, { new: true })
    .then((user) => {
      return Promise.resolve(user);
    })
    .catch(() => {
      throw new AppError("Internal server error.", 500);
    });
}
    

export const deleteUser = (_id) => {
    User.findByIdAndDelete(_id)
    .then((user) => {
      return Promise.resolve(user);
    })
    .catch(() => {
      throw new AppError("Internal server error.", 500);
    });
}
    
    