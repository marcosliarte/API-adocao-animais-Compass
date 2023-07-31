import { Request, Response } from 'express';
import mongoose from 'mongoose';
import PetModel, { IPet } from '../models/petModel';
import TutorModel, { ITutor } from '../models/tutorModel';

export const getAllPets = async (req: Request, res: Response) => {
  try {
    const pets = await PetModel.find();
    res.json(pets);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error retrieving pets', error });
  }
};

export const createPet = async (req: Request, res: Response) => {
  try {
    const { tutorId } = req.params;
    if (!mongoose.Types.ObjectId.isValid(tutorId)) {
      return res.status(400).json({ message: 'Invalid tutor ID' });
    }

    const tutor = await TutorModel.findById(tutorId);
    if (!tutor) {
      return res.status(404).json({ message: 'Tutor not found' });
    }

    const petData: IPet = req.body;
    const pet = await PetModel.create(petData);
    tutor.pets.push(pet._id);
    await tutor.save();

    res.json(pet);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error creating pet', error });
  }
};

export const updatePet = async (req: Request, res: Response) => {
  try {
    const { petId, tutorId } = req.params;
    if (!mongoose.Types.ObjectId.isValid(tutorId)) {
      return res.status(400).json({ message: 'Invalid tutor ID' });
    }
    if (!mongoose.Types.ObjectId.isValid(petId)) {
      return res.status(400).json({ message: 'Invalid pet ID' });
    }

    const tutor = await TutorModel.findById(tutorId);
    if (!tutor) {
      return res.status(404).json({ message: 'Tutor not found' });
    }

    const pet = await PetModel.findById(petId);
    if (!pet) {
      return res.status(404).json({ message: 'Pet not found for the specified tutor' });
    }

    if (req.body.name) pet.name = req.body.name;
    if (req.body.species) pet.species = req.body.species;
    if (req.body.carry) pet.carry = req.body.carry;
    if (req.body.weight) pet.weight = req.body.weight;
    if (req.body.date_of_birth) pet.date_of_birth = req.body.date_of_birth;

    await pet.save();

    res.json(pet);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error updating pet', error });
  }
};

export const deletePet = async (req: Request, res: Response) => {
  try {
    const { petId, tutorId } = req.params;
    if (!mongoose.Types.ObjectId.isValid(tutorId)) {
      return res.status(400).json({ message: 'Invalid tutor ID' });
    }
    if (!mongoose.Types.ObjectId.isValid(petId)) {
      return res.status(400).json({ message: 'Invalid pet ID' });
    }

    const pet = await PetModel.findOneAndDelete({
      _id: petId,
      tutorId,
    });

    if (!pet) {
      return res.status(404).json({ message: 'Pet not found for the specified tutor' });
    }

    const tutor = await TutorModel.findByIdAndUpdate(
      tutorId,
      { $pull: { pets: petId } },
      { new: true }
    );

    res.json({ message: 'Pet deleted successfully', pet });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error deleting pet', error });
  }
};
