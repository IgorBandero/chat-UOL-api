function participantAlreadyExistsError(){
    return {
        name: "ParticipantAlreadyExists",
        message: "Nome de participante já existe!",
    };
}

function participantDoesntExistsError(){
    return {
        name: "ParticipantDoesntExistsError",
        message: "Participante remetente da mensagem não existe!",
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
    participantDoesntExistsError,
}