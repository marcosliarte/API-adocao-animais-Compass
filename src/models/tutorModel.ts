import mongoose, {Schema, Document, model} from 'mongoose';
import { Pet } from './petModel';

export interface Tutor{
    name:string;
    phone:string;
    email:string;
    date_of_birth:string;
    zip_code:string;
    pets?: Pet[];
}

export interface TutorModel extends Document, Tutor {}

const tutorSchema = new Schema({
    id: {type: Number, require: true},
    name: {type: String, require: true},
    phone: {type: String, require: true},
    email: {type: String, require: true},
    date_of_birth: {type: String, require: true}, 
    zip_code: {type: String, require: true},
    pets: [{type: Schema.Types.ObjectId, ref: 'Pet'}]
});

export default model<TutorModel>('Tutor', tutorSchema);