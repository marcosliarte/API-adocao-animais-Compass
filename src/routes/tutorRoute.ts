import { Router } from 'express';
import { getAllTutors, createTutor, updateTutor, deleteTutor } from '../controllers/tutorController';

const router = Router();

router.get('/tutors', getAllTutors);
router.post('/tutor', createTutor);
router.put('/tutor/:id', updateTutor);
router.delete('/tutor/:id', deleteTutor);

export default router;
