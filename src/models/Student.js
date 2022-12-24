import { DataTypes, Model } from "sequelize";
import sequelize from '../connection';
import Classroom from "./Classroom";

class Student extends Model { }

Student.init({
    studentID: {
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER
    },
    classroomID: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
            model: Classroom,
            key: 'classroomID'
        }
    },
    studentName: {
        allowNull: false,
        type: DataTypes.STRING(255),
    },
    studentLastName: {
        allowNull: false,
        type: DataTypes.STRING(255),
    },
    studentBirthDate: {
        allowNull: false,
        type: DataTypes.DATE,
    },
    studentPhone: {
        allowNull: false,
        type: DataTypes.STRING(30),
    },
    studentCPF: {
        unique: true,
        allowNull: false,
        type: DataTypes.STRING(11),
    },
    studentEmail: {
        allowNull: false,
        type: DataTypes.STRING(255),
    },
    studentUsername: {
        unique: true,
        allowNull: false,
        type: DataTypes.STRING(255),
    },
    studentHash: {
        allowNull: false,
        type: DataTypes.STRING(255),
    },
    studentShift: {
        allowNull: false,
        type: DataTypes.ENUM('Matutino', 'Vespertino', 'Noturno'),
    },
}, {
    sequelize,
    modelName: 'Student',
    tableName: 'Students',
    timestamps: true,
    updatedAt: false
});

export default Student;