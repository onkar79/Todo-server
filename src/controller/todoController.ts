const Todo = require("../model/schema");
const { Response, Request } = require("express");
import { ITodo } from "../types/todo";
import { Request, Response, NextFunction } from "express";

let addTodo = async (req: Request, res: Response): Promise<void> => {
  try {
    const todo = new Todo(req.body);
    const newTodo: ITodo = await todo.save();
    const todos: ITodo[] = await Todo.find();
    res.send(todos);
  } catch (error) {
    throw error;
  }
};

let getTodos = async (req: Request, res: Response): Promise<void> => {
  try {
    const todos: ITodo[] = await Todo.find();
    res.status(200).json( todos );
  } catch (error) {
    throw error;
  }
};

let updateTodo = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id, text ,date,completed} = req.body;
    console.log(id,text)
   await Todo.findOneAndUpdate({ id: id }, { text: text, date:date, completed:completed}).then( async () => {
      const todos: ITodo[] = await Todo.find();
      res.send( todos );
    });
  } catch (error) {
    res.send(error);
  }
};
let deleteTodo = async (req: Request, res: Response) => {
  try {
    const { id } = req.body;
  await  Todo.findOneAndDelete({ id: id }).then( async() =>{
    const todos: ITodo[] =await Todo.find();
    res.send(todos);
  });
  } catch (error) {
    res.send(error);
  }
};

module.exports = { addTodo, getTodos, updateTodo, deleteTodo };
