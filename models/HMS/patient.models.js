import mongoose from "mongoose";

const patientSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    diagnonisWith:{
        type: String,
        required: true
    },
    address:{
        type: String,
        required: true
    },
    age:{
        type: Number,
        required: true
    },
    bloodGroup:{
        type: String,
        required: true
    },
    gender:{
        type: String,
        enum: ["M","F","O"],
        required: true
    },
    admittedIn:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "HMS_hospital"
    }

},{timestamps:true})

export const patientModel = mongoose.model("hms_patient",patientSchema);