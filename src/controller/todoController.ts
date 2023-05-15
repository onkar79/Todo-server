const Todo = require("../model/schema");
const { Response, Request } = require("express");
import { ITodo } from "../types/todo";
import { Request, Response, NextFunction } from "express";

let addTodo = async (req: Request, res: Response): Promise<void> => {
  try {
    const todo = new Todo(req.body);
    const newTodo: ITodo = await todo.save();
    const allTodos: ITodo[] = await Todo.find();
    res.send({ message: "Todo added", todo: newTodo, todos: allTodos });
  } catch (error) {
    throw error;
  }
};

let getTodos = async (req: Request, res: Response): Promise<void> => {
  try {
    const todos: ITodo[] = await Todo.find();
    res.status(200).json({ todos });
  } catch (error) {
    throw error;
  }
};

let updateTodo = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id, text } = req.body;
    Todo.findOneAndUpdate({ id: id }, { text: text }).then(() => {
      const allTodos: ITodo[] = Todo.find();
      res.send({ message: "Updated Successfully.", todos: allTodos });
    });
  } catch (error) {
    res.send(error);
  }
};
let deleteTodo = async (req: Request, res: Response) => {
  try {
    const { id } = req.body;
    console.log(id);
    Todo.findOneAndDelete({ id: id }).then(() =>{
    const allTodos: ITodo[] = Todo.find();
    res.send({ message: "Deleted Successfully.", todos: allTodos });
  });
  } catch (error) {
    res.send(error);
  }
};

module.exports = { addTodo, getTodos, updateTodo, deleteTodo };
