import mongoose, { Document } from 'mongoose';

export interface IPet extends Document {
  name: string;
  species: string;
  carry: string;
  weight: number;
  date_of_birth: string;
  tutorId: mongoose.Types.ObjectId; 
}

const petSchema = new mongoose.Schema({
  name: { type: String, required: true },
  species: { type: String, required: true },
  carry: { type: String, required: true },
  weight: { type: Number, required: true },
  date_of_birth: { type: Date, required: true },
  tutorId: { type: mongoose.Types.ObjectId, required: true },
});

const Pet = mongoose.model<IPet>('Pet', petSchema);

export default Pet;