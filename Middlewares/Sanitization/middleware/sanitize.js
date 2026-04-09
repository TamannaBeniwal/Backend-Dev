import validator from "validator";

// Function to clean input recursively
const sanitizeInput = (data) => {
    if (typeof data === "string") {
        return validator.escape(data.trim());
    }

    if (typeof data === "object" && data !== null) {
        for (let key in data) {
            data[key] = sanitizeInput(data[key]);
        }
    }

    return data;
};


// Middleware
export const sanitizeMiddleware = (req, res, next) => {
    if (req.body) req.body = sanitizeInput(req.body);
    if (req.query) req.query = sanitizeInput(req.query);
    if (req.params) req.params = sanitizeInput(req.params);

    next();
};