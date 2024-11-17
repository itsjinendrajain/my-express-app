import { Document } from 'mongoose';
import { Role } from './custom.enums';

export interface IUser extends Document {
    name: string;
    role: Role;
    email: string;
    password: string;
    createdAt?: Date;
}