import express from 'express';
import { StuHandler } from '../handler/stuHandler';

const router = express.Router();
const stuHandler = new StuHandler();

router.get('/',(req, res, next) => stuHandler.getStudentRes(req, res, next));

export default router;