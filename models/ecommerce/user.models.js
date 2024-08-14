import mongoose  from "mongoose";

const userSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            lowercase: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true
        },
        password: {
            type: String,
            required: [true,"Password is required !"],
            min: [10,"Password must be of 10 characters !"],
            max: [64,"Password can have 64 characters maximum !"],
        }

    },
    {
        timestamps:true
    }
);

export const userModel = mongoose.model("ecommerce_user",userSchema);