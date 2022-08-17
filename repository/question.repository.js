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
    .then((question) => {
      return Promise.resolve(question);
    })
    .catch(() => {
      throw new AppError("Internal server error.", 500);
    });

export const getQuestions = () =>
    Question.find()
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
