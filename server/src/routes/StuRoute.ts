import express from 'express';
import { StuHandler } from '../handler/stuHandler';

const router = express.Router();
const stuHandler = new StuHandler();

router.get('/',stuHandler.getStudentRes.bind(stuHandler));

export default router;