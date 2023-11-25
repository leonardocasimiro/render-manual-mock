export const logRequestMiddleware = async (req, res, next) => {
    console.log(req.url);
    next();
};
//Express trae esta opcion para tipar todo, al asignarla al metod ErrorRequestHandler
export const logErrorRequestMiddleware = async (error, req, res, next) => {
    console.error(error);
    res.sendStatus(500);
};
