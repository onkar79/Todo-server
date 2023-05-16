"use strict";
const { Router } = require("express");
const { getTodos, addTodo, updateTodo, deleteTodo } = require("../controller/todoController");
const router = Router();
router.get('/', getTodos);
router.post('/add', addTodo);
router.put('/update', updateTodo);
router.delete('/delete', deleteTodo);
module.exports = router;
