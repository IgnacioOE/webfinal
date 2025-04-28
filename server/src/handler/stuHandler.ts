import { StuController } from "../controller/stuController";
import { Request, Response, NextFunction } from 'express';

const stuController = new StuController();

export class StuHandler {
    async getStudentRes(req: Request, res: Response, next: NextFunction) {
        try {
            const estudiantes = await stuController.getStudents();
            const { usuario, contrasena } = req.body;
            const Restudiante = await stuController.verifyStudent(usuario, contrasena);
            res.json(Restudiante);
        } catch (error) {
            next(error);
        }
    }
}