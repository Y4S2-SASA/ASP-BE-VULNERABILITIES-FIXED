import mongoose from "mongoose";

const { Schema } = mongoose;

const CommentSchema = new Schema(
  {
    commentId: String,
    createdBy: {
      type: Schema.Types.ObjectId,
      ref: "user",
    },
    questionId: String,
    body: String
  },
  { timestamps: true },
  { versionKey: false },
);

CommentSchema.index({ createdAt: 1 });

export const Comment = mongoose.model("Comment", CommentSchema);
