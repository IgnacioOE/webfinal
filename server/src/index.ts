import express from 'express';
import cors from 'cors';
import router from './routes/StuRoute';


const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

app.use('/',router);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});