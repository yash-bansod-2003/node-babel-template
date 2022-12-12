
class customErrorHandler {
    constructor(status, message) {
        this.status = status;
        this.message = message;
    }

    static serverError(message = 'internal server error') {
        return new customErrorHandler(500, message);
    }
}

export default customErrorHandler;