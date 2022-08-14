import {
    saveItemService, 
    getItemService, 
    getItemsService, 
    updateItemService, 
    deleteItemService,
} from '../services/index.js';
import Success from "../utils/success.js";

export const saveItem = async (req, res) => {
    try {
      const item = await saveItemService(req.body);
      res.json(Success(item, "Successfully created Item."));
    } catch (err) {
      res.status(err.status).json(err.message);
    }
  };
  
  export const getItem = async (req, res) => {
    try {
      const item = await getItemService(req.params.id);
      res.json(Success(item, "Successfully fetched Item."));
    } catch (err) {
      res.status(err.status).json(err.message);
    }
  };
  
  export const getItems = async (req, res) => {
    try {
      const items = await getItemsService();
      res.json(Success(items, "Successfully fetched Items."));
    } catch (err) {
      res.status(err.status).json(err.message);
    }
  };
  
  export const updateItem = async (req, res) => {
    try {
      const item = await updateItemService(req.params.id, req.body);
      res.json(Success(item, "Successfully updated Item."));
    } catch (err) {
      res.status(err.status).json(err.message);
    }
  };
  
  export const deleteItem = async (req, res) => {
    try {
      const item = await deleteItemService(req.params.id);
      res.json(Success(item, "Successfully deleted Item."));
    } catch (err) {
      res.status(err.status).json(err.message);
    }
  };
  
