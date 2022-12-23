/* eslint-disable import/newline-after-import */
import { Router } from 'express';
import studentsController from '../controllers/Students';

const router = new Router();

router.get('/students', studentsController.getAll);

export default router;
