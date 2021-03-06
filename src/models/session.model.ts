import mongoose from "mongoose";
import {UserDocument} from "./user.models";

export interface SessionDocument extends mongoose.Document{ //TypeScript definition for UserSchema
    user: UserDocument["_id"];
    valid: boolean;
    userAgent: string;
    createdAt: Date;
    updatedAt: Date;
}

const sessionSchema = new mongoose.Schema({ //Schema definition
    user: {type: mongoose.Schema.Types.ObjectId, ref: "User"},
    valid: {type: Boolean, default: true},
    userAgent: {type: String},
}, {
    timestamps: true,
});

const SessionModel = mongoose.model<SessionDocument>("Session", sessionSchema); //Model

export default SessionModel;