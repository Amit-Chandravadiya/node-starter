import mongoose from "mongoose";

const hospitalSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    address:{
        type: String,
        required: true
    },
    registrationNo:{
        type: String,
        required: true
    },
    specializationIn:{
        type: String,
        required: true
    }
},{timestamps:true})

export const hospitalModel = mongoose.model("hms_hospital",hospitalSchema);