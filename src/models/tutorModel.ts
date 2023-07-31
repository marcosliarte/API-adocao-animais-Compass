import mongoose, { Schema, Document, model } from 'mongoose';

export interface ITutor extends Document {
  name: string;
  phone: string;
  email: string;
  date_of_birth: Date;
  zip_code: string;
  pets: mongoose.Types.ObjectId[];
}

const tutorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String, required: true },
  date_of_birth: { type: Date, required: true },
  zip_code: { type: String, required: true },
  pets: [{ type: mongoose.Types.ObjectId, ref: 'Pet' }],
});

const TutorModel = mongoose.model<ITutor>('Tutor', tutorSchema);

export default TutorModel;