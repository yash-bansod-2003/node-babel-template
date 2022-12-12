import { ValidationError } from 'joi';
import { DEV_MODE } from '../config';
import { customErrorHandler } from '../services'

const errorHandler = (error, req, res, next) => {
    let STATUS = 500;
    let data = {
        message: 'internal server error',
        ...(DEV_MODE === 'true' && { orignal_message: error.message })
    }

    if (error instanceof ValidationError) {
        STATUS = 401;
        data = {
            message: error.message,
        }
    }

    if (error instanceof customErrorHandler) {
        STATUS = error.status;
        data = {
            message: error.message,
        }
    }

    res.status(STATUS).json(data);
}

export default errorHandler;