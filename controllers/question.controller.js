import {
    saveQuestionService, 
    getQuestionService, 
    getQuestionsService, 
    updateQuestionService, 
    deleteQuestionService,
} from '../services/index.js';
import Success from "../utils/success.js";

export const saveQuestion = async (req, res) => {
    try {
      const question = await saveQuestionService(req.body);
      res.json(Success(question, "Successfully created Question."));
    } catch (err) {
      res.status(err.status).json(err.message);
    }
  };
  
  export const getQuestion = async (req, res) => {
    try {
      const question = await getQuestionService(req.params.id);
      res.json(Success(question, "Successfully fetched Question."));
    } catch (err) {
      res.status(err.status).json(err.message);
    }
  };
  
  export const getQuestions = async (req, res) => {
    try {
      const questions = await getQuestionsService();
      res.json(Success(questions, "Successfully fetched Questions."));
    } catch (err) {
      res.status(err.status).json(err.message);
    }
  };
  
  export const updateQuestion = async (req, res) => {
    try {
      const question = await updateQuestionService(req.params.id, req.body);
      res.json(Success(question, "Successfully updated Question."));
    } catch (err) {
      res.status(err.status).json(err.message);
    }
  };
  
  export const deleteQuestion = async (req, res) => {
    try {
      const question = await deleteQuestionService(req.params.id);
      res.json(Success(question, "Successfully deleted Question."));
    } catch (err) {
      res.status(err.status).json(err.message);
    }
  };
  
