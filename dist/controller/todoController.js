"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const Todo = require("../model/schema");
const { Response, Request } = require("express");
let addTodo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const todo = new Todo(req.body);
        const newTodo = yield todo.save();
        const todos = yield Todo.find();
        res.send(todos);
    }
    catch (error) {
        throw error;
    }
});
let getTodos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const todos = yield Todo.find();
        res.status(200).json(todos);
    }
    catch (error) {
        throw error;
    }
});
let updateTodo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id, text, date, completed } = req.body;
        console.log(id, text);
        yield Todo.findOneAndUpdate({ id: id }, { text: text, date: date, completed: completed }).then(() => __awaiter(void 0, void 0, void 0, function* () {
            const todos = yield Todo.find();
            res.send(todos);
        }));
    }
    catch (error) {
        res.send(error);
    }
});
let deleteTodo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.body;
        yield Todo.findOneAndDelete({ id: id }).then(() => __awaiter(void 0, void 0, void 0, function* () {
            const todos = yield Todo.find();
            res.send(todos);
        }));
    }
    catch (error) {
        res.send(error);
    }
});
module.exports = { addTodo, getTodos, updateTodo, deleteTodo };
