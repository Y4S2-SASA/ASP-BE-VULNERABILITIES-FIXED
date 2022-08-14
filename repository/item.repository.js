import { Item } from "../models/index.js";
import AppError from "../utils/appError.js";

export const saveItem = (data) =>
    Item.create(data)
    .then((item) => {
      return Promise.resolve(item);
    })
  .catch(() => {
      throw new AppError("Internal server error.", 500);
    });

export const getItem= (id) =>
    Item.findById(id)
    .then((item) => {
      return Promise.resolve(item);
    })
    .catch(() => {
      throw new AppError("Internal server error.", 500);
    });

export const getItems = () =>
    Item.find()
    .populate("createdBy")
    .then((item) => {
      return Promise.resolve(item);
    })
    .catch(() => {
      throw new AppError("Internal server error.", 500);
    });

export const updateItem = (id, data) =>
    Item.findByIdAndUpdate(id, data, { new: true })
    .then((item) => {
      return Promise.resolve(item);
    })
    .catch(() => {
      throw new AppError("Internal server error.", 500);
    });

export const deleteItem = (id) =>
    Item.findByIdAndDelete(id)
    .then((item) => {
      return Promise.resolve(item);
    })
    .catch(() => {
      throw new AppError("Internal server error.", 500);
    });
