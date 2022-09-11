import {
    saveCommentService, 
    getCommentsService, 
    deleteCommentService,
} from '../services/index.js';
import Success from "../utils/success.js";

export const saveComment = async (req, res) => {
    try {
      const comment = await saveCommentService(req.body);
      res.json(Success(comment, "Successfully created Comment."));
    } catch (err) {
      res.status(err.status).json(err.message);
    }
  };
  
  export const getComments = async (req, res) => {
    try {
      const comments = await getCommentsService(req.params.id);
      res.json(Success(comments, "Successfully fetched Comments."));
    } catch (err) {
      res.status(err.status).json(err.message);
    }
  };
  
  export const deleteComment = async (req, res) => {
    try {
      const comment = await deleteCommentService(req.params.id);
      res.json(Success(comment, "Successfully deleted Comment."));
    } catch (err) {
      res.status(err.status).json(err.message);
    }
  };
  
