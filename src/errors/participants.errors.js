function participantAlreadyExistsError(){
    return {
        name: "ParticipantAlreadyExists",
        message: "Nome de participante já existe!",
    };
}

function internalServerError(){
    return {
        name: "InternalServerError",
        message: "Erro no servidor",
    };
}

export const participantsErrors = {
    participantAlreadyExistsError,
    internalServerError,
}