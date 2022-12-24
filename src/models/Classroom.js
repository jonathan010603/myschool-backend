import { DataTypes, Model } from "sequelize";
import sequelize from '../connection';

class Classroom extends Model { }

Classroom.init({
    classroomID: {
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    shift1: { type: DataTypes.BOOLEAN },
    shift2: { type: DataTypes.BOOLEAN },
    shift3: { type: DataTypes.BOOLEAN }
}, {
    sequelize,
    modelName: 'Classroom',
    tableName: 'Classrooms',
    timestamps: false
});

export default Classroom;