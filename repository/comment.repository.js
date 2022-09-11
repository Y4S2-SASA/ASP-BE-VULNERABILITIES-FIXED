import { Comment } from "../models/index.js";
import AppError from "../utils/appError.js";

export const saveComment = (data) =>
    Comment.create(data)
    .then((comment) => {
      return Promise.resolve(comment);
    })
  .catch(() => {
      throw new AppError("Internal server error.", 500);
    });

export const getComments = (id) =>
    Comment.find({questionId: id})
    .populate("createdBy",{
      _id:1,
      firstName:1,
      lastName:1,
      username:1,
      email:1
    })
    .then((comment) => {
      return Promise.resolve(comment);
    })
    .catch(() => {
      throw new AppError("Internal server error.", 500);
    });

export const deleteComment = (id) =>
    Comment.findByIdAndDelete(id)
    .then((comment) => {
      return Promise.resolve(comment);
    })
    .catch(() => {
      throw new AppError("Internal server error.", 500);
    });
