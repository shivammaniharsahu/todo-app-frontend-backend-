const mongoose = require("mongoose")
const validator = require("validator")
const todoSchema = mongoose.Schema({
    title: {
        type: String,
        required: true, 
    },
    description: {
        type: String,
        required: true,
    },
    user_id: {
        type: mongoose.Schema.Types.ObjectId, ref: 'User'
    },
    status: {
        type: String,
        required: true,
        default: "new",
        enum: ["new", "inprogress", "complete"]
    },
    
})
const Todo = mongoose.model("Todo", todoSchema);
module.exports = Todo
