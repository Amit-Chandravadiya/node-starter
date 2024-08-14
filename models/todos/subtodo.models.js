import mongoose from "mongoose";

const subTodoSchema = new mongoose.Schema({
    content:{
        type: String,
        required: true,
        lowercase: true
    },
    complete:{
        type: Boolean,
        default: false
    },
    createdBy:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
    }
},{timestamps:true});

export const todoModel = mongoose.model("subtodo",subTodoSchema);