import httpStatus from "http-status";

export function handleErrors(error, req, res, next) {

    if (error.name === "ParticipantAlreadyExists"){
        return res.status(httpStatus.CONFLICT).send({
            message: error.message
        })
    }

    if (error.name === "ParticipantDoesntExistsError"){
        return res.status(httpStatus.UNPROCESSABLE_ENTITY).send({
            message: error.message
        })
    } 

    if (error.name === "InvalidLimitError"){
        return res.status(httpStatus.UNPROCESSABLE_ENTITY).send({
            message: error.message
        })
    } 

    if (error.name === "InternalServerError"){
        return res.status(httpStatus.INTERNAL_SERVER_ERROR).send({
            message: error.message
        })
    }     

    res.status(httpStatus.INTERNAL_SERVER_ERROR).send({
        error: "InternalServerError",
        message: "Internal Server Error",
    });
}