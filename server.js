import express from 'express';
import { PORT } from './config'
import { errorHandler } from './middlewares'
import cors from 'cors';

const port = PORT || 8000;
const app = express();

app.use(cors({
    origin: '*',
    credentials: true
}));
app.use(errorHandler);
app.use(express.json());


app.listen(port, () => console.log(`server started on http://localhost:${port}`));