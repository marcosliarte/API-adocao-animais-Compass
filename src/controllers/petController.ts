import { Request, Response } from 'express';
import Pet from '../models/petModel';
import Tutor from '../models/tutorModel';

export const createPet = async (req: Request, res: Response) => {
  try {
    const tutorId = req.params.tutorId;
    const tutor = await Tutor.findById(tutorId);
    if (!tutor) {
      return res.status(404).json({ message: 'Tutor not found' });
    }

    const pet = await Pet.create({ ...req.body, tutorId });
    tutor.pets.push(pet);
    await tutor.save();

    res.json(pet);
  } catch (error) {
    res.status(500).json({ message: 'Error creating pet', error });
  }
};

export const updatePet = async (req: Request, res: Response) => {
  try {
    const { petId, tutorId } = req.params;
    const pet = await Pet.findOneAndUpdate({ _id: petId, tutorId }, req.body, { new: true });
    if (!pet) {
      return res.status(404).json({ message: 'Pet not found for the specified tutor' });
    }
    res.json(pet);
  } catch (error) {
    res.status(500).json({ message: 'Error updating pet', error });
  }
};

export const deletePet = async (req: Request, res: Response) => {
  try {
    const { petId, tutorId } = req.params;
    const pet = await Pet.findOneAndDelete({ _id: petId, tutorId });
    if (!pet) {
      return res.status(404).json({ message: 'Pet not found for the specified tutor' });
    }
    res.json({ message: 'Pet deleted successfully', pet });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting pet', error });
  }
};

