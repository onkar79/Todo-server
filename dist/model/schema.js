"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const TodoSchema = new mongoose_1.Schema({
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
module.exports = (0, mongoose_1.model)("Todo", TodoSchema);
