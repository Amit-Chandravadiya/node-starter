import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
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
    },
    subtodos: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "subtodo"
        }
    ]

},{timestamps:true});

export const todoModel = mongoose.model("todo",todoSchema);