import { Schema, model } from 'mongoose';
import { IUser } from '../utils/custom.interfaces';
import { Role } from '../utils/custom.enums';

// User schema definition
const UserSchema = new Schema<IUser>({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    role: {
        type: String,
        required: true,
        default: Role.user,
        enum: Role,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
    },
    password: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

// Creating and exporting the User model
const User = model<IUser>('User', UserSchema);

export default User;
