import { ITodo } from "./../types/todo";
import { model, Schema } from "mongoose";

const TodoSchema: Schema = new Schema({
  id: {
    type: String,
  },
  text: {
    type: String,
  },
  date: {
    type: Number,
  },
  completed: {
    type: Boolean,
  },
});
module.exports = model<ITodo>("Todo", TodoSchema);
