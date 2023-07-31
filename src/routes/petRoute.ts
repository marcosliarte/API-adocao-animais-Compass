import { Router } from 'express';
import mongoose from 'mongoose';
import { createPet, updatePet, deletePet, getAllPets } from '../controllers/petController';

const router = Router();

router.get('/pets', getAllPets)
router.post('/pet/:tutorId', createPet);
router.put('/pet/:petId/tutor/:tutorId', updatePet);
router.delete('/pet/:petId/tutor/:tutorId', deletePet);

export default router;
