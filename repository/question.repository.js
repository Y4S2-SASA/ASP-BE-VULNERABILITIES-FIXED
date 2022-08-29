import { Question } from "../models/index.js";
import AppError from "../utils/appError.js";

export const saveQuestion = (data) =>
    Question.create(data)
    .then((question) => {
      return Promise.resolve(question);
    })
  .catch(() => {
      throw new AppError("Internal server error.", 500);
    });

export const getQuestion= (id) =>
    Question.findById(id)
    .populate("createdBy",{
      _id:1,
      firstName:1,
      lastName:1,
      username:1,
      email:1
    })
    .then((question) => {
      return Promise.resolve(question);
    })
    .catch(() => {
      throw new AppError("Internal server error.", 500);
    });

export const getQuestions = () =>
    Question.find()
    .populate("createdBy",{
      _id:1,
      firstName:1,
      lastName:1,
      username:1,
      email:1
    })
    .then((question) => {
      return Promise.resolve(question);
    })
    .catch(() => {
      throw new AppError("Internal server error.", 500);
    });

export const updateQuestion = (id, data) =>
    Question.findByIdAndUpdate(id, data, { new: true })
    .then((question) => {
      return Promise.resolve(question);
    })
    .catch(() => {
      throw new AppError("Internal server error.", 500);
    });

export const deleteQuestion = (id) =>
    Question.findByIdAndDelete(id)
    .then((question) => {
      return Promise.resolve(question);
    })
    .catch(() => {
      throw new AppError("Internal server error.", 500);
    });
