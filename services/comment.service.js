import {
    saveComment,
    getComments,
    deleteComment,
} from '../repository/index.js';
import AppError from "../utils/appError.js";

export const saveCommentService = async (data) => {
    const { questionId, createdBy, body } = data;
    try {
        await saveComment({ questionId, createdBy, body });
        return Promise.resolve("Successfully saved Comment.");
    } catch (err) {
        throw new AppError(err.message, err.status);
    }
};

export const getCommentsService = async (id) => {
    try {
        const comments = await getComments(id);
        return Promise.resolve(comments);
    } catch (err) {
        throw new AppError(err.message, err.status);
    }
};

export const deleteCommentService = async (id) => {
    try {
        const comment = await deleteComment(id);
        return Promise.resolve(comment);
    } catch (err) {
        throw new AppError(err.message, err.status);
    }
};
