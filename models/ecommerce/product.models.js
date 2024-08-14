import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    decription:{
        type: String,
        required: true,
    },
    name:{
        type: String,
        required: true,
    },
    productImage:{
        type: String,
    },
    price:{
        type: Number,
        default: 0
    },
    stock:{
        type: Number,
        default: 0
    },
    category:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "ecommerce_category",
        required: true
    },
    ownew:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "ecommerce_user"
    }
},{timestamps:true});

export const productModel = mongoose.model("ecommerce_product",productSchema);