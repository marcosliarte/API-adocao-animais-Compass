import { Request, Response } from 'express';
import Tutor from '../models/tutorModel';

export const getAllTutors = async (req: Request, res: Response) => {
  try {
    const tutors = await Tutor.find().populate('pets').exec();
    res.json(tutors);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching tutors', error });
  }
};

export const createTutor = async (req: Request, res: Response) => {
  try {
    const tutor = await Tutor.create(req.body);
    res.json(tutor);
  } catch (error) {
    res.status(500).json({ message: 'Error creating tutor', error });
  }
};

export const updateTutor = async (req: Request, res: Response) => {
    try {
      const tutorId = req.params.id;
      const updatedTutor = await Tutor.findByIdAndUpdate(tutorId, req.body, { new: true });
      if (!updatedTutor) {
        return res.status(404).json({ message: 'Tutor not found' });
      }
      res.json(updatedTutor);
    } catch (error) {
      res.status(500).json({ message: 'Error updating tutor', error });
    }
  };
  
  export const deleteTutor = async (req: Request, res: Response) => {
    try {
      const tutorId = req.params.id;
      const deletedTutor = await Tutor.findByIdAndDelete(tutorId);
      if (!deletedTutor) {
        return res.status(404).json({ message: 'Tutor not found' });
      }
      res.json({ message: 'Tutor deleted successfully', deletedTutor });
    } catch (error) {
      res.status(500).json({ message: 'Error deleting tutor', error });
    }
  };
