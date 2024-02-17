import { ValidationError } from 'joi';
import { DEV_MODE } from '@/config';
import { CustomErrorHandler } from '@/services/customErrorHandler';

const errorHandler = (error, req, res) => {
    let STATUS = 500;
    let data = {
        message: 'internal server error',
        ...(DEV_MODE === 'true' && { orignal_message: error.message }),
    };

    if (error instanceof ValidationError) {
        STATUS = 401;
        data = {
            message: error.message,
        };
    }

    if (error instanceof CustomErrorHandler) {
        STATUS = error.status;
        data = {
            message: error.message,
        };
    }

    res.status(STATUS).json(data);
};

export { errorHandler };
