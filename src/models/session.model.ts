import mongoose from "mongoose";
import bcrypt from "bcrypt";
import config from "config";
import {boolean} from "zod";
import {UserDocument} from "./user.models";

export interface SchemaDocument extends mongoose.Document{ //TypeScript definition for UserSchema
    user: UserDocument["_id"];
    valid: boolean;
    userAgent: string;
    createdAt: Date;
    updatedAt: Date;
}

const sessionSchema = new mongoose.Schema({ //Schema definition
    user: {type: mongoose.Schema.Types.ObjectId, ref: "User"},
    valid: {type: boolean, default: true},
    userAgent: {type: String},
}, {
    timestamps: true,
});

const SessionModel = mongoose.model("Session", sessionSchema); //Model

export default SessionModel;