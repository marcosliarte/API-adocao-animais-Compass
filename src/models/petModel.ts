import mongoose, {Schema, Document, model} from "mongoose";

export interface Pet{
    name: string;
    species: string;
    carry: string;
    weight: number;
    date_of_birth: string;
}

export interface PetModel extends Document, Pet {}

const petSchema = new Schema({
    id: {type: Number, require: true},
    name: {type: String, require: true},
    species: {type: String, require: true},
    carry: {type: String, require: true},
    weight: {type: Number, require: true},
    date_of_birth: {type: String, require: true}
});

export default model<PetModel>('Pet', petSchema);