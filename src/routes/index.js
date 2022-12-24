/* eslint-disable import/newline-after-import */
import { Router } from 'express';
import studentsController from '../controllers/Students';
import classroomsController from '../controllers/Classrooms';
import seq from '../connection';

const router = new Router();

router.get('/students', studentsController.getAllStudents);
router.get('/students/:id', studentsController.getByStudentID);
router.post('/students', studentsController.createStudent);

router.get('/classrooms', classroomsController.getAllClassrooms);
router.get('/classrooms/:id', classroomsController.getByClassroomID);
router.post('/classrooms', classroomsController.createClassroom);

export default router;
