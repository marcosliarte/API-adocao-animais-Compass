import { Request, Response } from 'express';
import mongoose from 'mongoose';
import TutorModel, { ITutor } from '../models/tutorModel';

export const getAllTutors = async (req: Request, res: Response) => {
  try {
    const tutors = await TutorModel.find().populate('pets');
    res.json(tutors);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error retrieving tutors', error });
  }
};

export const createTutor = async (req: Request, res: Response) => {
  try {
    const tutorData: ITutor = req.body;
    const tutor = await TutorModel.create(tutorData);
    res.json(tutor);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error creating tutor', error });
  }
};

export const updateTutor = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const tutorData: ITutor = req.body;
    const tutor = await TutorModel.findByIdAndUpdate(id, tutorData, { new: true });
    if (!tutor) {
      return res.status(404).json({ message: 'Tutor not found' });
    }
    res.json(tutor);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error updating tutor', error });
  }
};

export const deleteTutor = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const tutor = await TutorModel.findByIdAndDelete(id);
    if (!tutor) {
      return res.status(404).json({ message: 'Tutor not found' });
    }
    res.json({ message: 'Tutor deleted successfully', tutor });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error deleting tutor', error });
  }
};