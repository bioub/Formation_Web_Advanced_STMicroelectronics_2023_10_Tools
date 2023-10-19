import { Schema, model } from 'mongoose';
import { Todo as TodoType } from '@formation/common/todo';

const todoSchema = new Schema<TodoType>({
  title: {
    type: String,
    required: [true, 'title is required'],
  },
  completed: {
    type: Boolean,
  },
});

export const Todo = model<TodoType>('Todo', todoSchema);
