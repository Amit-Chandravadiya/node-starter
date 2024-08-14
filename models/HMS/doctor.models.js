import mongoose from "mongoose";

const hospitalHrsSchema = new mongoose.Schema({
    hospitalId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "HMS_hospital"
    },
    workingHrs:{
        type: Number,
        requred: true
    }
})
const doctorsSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    salary:{
        type: String,
        required: true
    },
    qualification:{
        type: String,
        required: true
    },
    experience:{
        type: Number,
        required: true,
        default: 0
    },
    worksInHospitals:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref:"HMS_hospital"
        }
    ],
    workingHrsInDifferentHospitals:[hospitalHrsSchema]
},{timestamps:true})

export const doctorsModel = mongoose.model("hms_doctor",doctorsSchema);