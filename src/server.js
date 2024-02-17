import express, { urlencoded, json } from 'express';
import morgan from 'morgan';
import cors from 'cors';
import { errorHandler } from '@/middlewares/error-handler';

export const createServer = () => {
    const app = express();
    app.disable('x-powered-by')
        .use(morgan('dev'))
        .use(urlencoded({ extended: true }))
        .use(json())
        .use(cors())
        .get('/status', (_, res) => {
            return res.json({ ok: true });
        })
        .use(errorHandler);

    return app;
};
