import mongoose from "mongoose";

const { Schema } = mongoose;

const QuestionSchema = new Schema(
  {
    questionId: String,
    createdBy: String,
    tags: Array,
    title: String,
    description: String,
    imageUrl: String,
    numOfViews: Number,
    comments: Array
  },
  { timestamps: true },
  { versionKey: false },
);

QuestionSchema.index({ createdAt: 1 });

export const Question = mongoose.model("Question", QuestionSchema);
