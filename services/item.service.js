import {
    saveItem,
    getItem,
    getItems,
    updateItem,
    deleteItem,
} from '../repository/index.js';
import AppError from "../utils/appError.js";

export const saveItemService = async (data) => {
    const { name, price, quantity, description, imageUrl, createdBy  } = data;
    try {
      await saveItem({ name, price, quantity, description, imageUrl, createdBy });
      return Promise.resolve("Successfully saved Item.");
    } catch (err) {
      throw new AppError(err.message, err.status);
    }
  };
  
  export const getItemService = async (id) => {
    try {
      const item = await getItem(id);
      return Promise.resolve(item);
    } catch (err) {
      throw new AppError(err.message, err.status);
    }
  };
  
  export const getItemsService = async () => {
    try {
      const items = await getItems();
      return Promise.resolve(items);
    } catch (err) {
      throw new AppError(err.message, err.status);
    }
  };
  
  export const updateItemService = async (id, data) => {
    try {
      const item = await updateItem(id, data);
      return Promise.resolve(item);
    } catch (err) {
      throw new AppError(err.message, err.status);
    }
  };
  
  export const deleteItemService = async (id) => {
    try {
      const item = await deleteItem(id);
      return Promise.resolve(item);
    } catch (err) {
      throw new AppError(err.message, err.status);
    }
  };
  