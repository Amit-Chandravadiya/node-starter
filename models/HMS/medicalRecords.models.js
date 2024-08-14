import mongoose from "mongoose";

const meditabRecordSchema = new mongoose.Schema({

},{timestamps:true})

export const medicalRecordModel = mongoose.model("hms_medical_record",meditabRecordSchema);