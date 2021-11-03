import mongoose from "mongoose";
import {customAlphabet} from "nanoid";
import {UserDocument} from "./user.models";

const nanoid = customAlphabet("abcdefghijklmnopqrstuvwxyz0123456789", 10); // Id is 10 characters long

export interface ProductDocument extends mongoose.Document{ //TypeScript definition for UserSchema
    user: UserDocument["_id"];
    title: string;
    description: string;
    price: number;
    image: string;
    createdAt: Date;
    updatedAt: Date;
}

const productSchema = new mongoose.Schema({ //Schema definition
    productId: {
        type: String,
        required: true,
        unique: true,
        default: () => `product_${nanoid()}`,
    },
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    title: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    image: { type: String, required: true },
}, {
    timestamps: true,
});

const ProductModel = mongoose.model<ProductDocument>("Session", productSchema); //Model

export default ProductModel;