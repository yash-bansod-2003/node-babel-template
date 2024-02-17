class CustomErrorHandler {
    constructor(status, message) {
        this.status = status;
        this.message = message;
    }

    static serverError(message = 'internal server error') {
        return new CustomErrorHandler(500, message);
    }
}
export { CustomErrorHandler };
