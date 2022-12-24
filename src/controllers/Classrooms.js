/* eslint-disable class-methods-use-this */
import ClassroomModel from '../models/Classroom';
import sequelize from '../connection';

class Classrooms {
    constructor() {
        this.checkConnection();
    }

    async checkConnection() {
        try {
            await sequelize.authenticate();
            console.log('Connection has been established successfully.');
        } catch (error) {
            console.error('Unable to connect to the database:', error);
        }
    }

    async getAllClassrooms(req, res) {
        try {
            const classrooms = await ClassroomModel.findAll();
            res.json(classrooms);
        } catch (error) {
            console.log(error);
            res.status(500).send("Internal error");
        }
    }

    async getByClassroomID(req, res) {
        try {
            const classroom = await ClassroomModel.findAll({
                where: { classroomID: req.params.id }
            });
            res.json(classroom);
        } catch (error) {
            console.log(error);
            res.status(500).send("Internal error");
        }
    }

    async createClassroom(req, res) {
        try {
            await ClassroomModel.create({
                shift1: req.body.shift1,
                shift2: req.body.shift2,
                shift3: req.body.shift3,
            }, { fields: ['shift1', 'shift2', 'shift3'] });
            res.status(201).send("Classroom added successfully.");
        } catch (error) {
            console.log(error);
            res.status(500).send("Internal error");
        }
    }
}

export default new Classrooms();
