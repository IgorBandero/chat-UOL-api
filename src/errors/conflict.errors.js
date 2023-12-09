function participantAlreadyExistsError(){
    return {
        name: "ParticipantAlreadyExists",
        message: "Nome de participante já existe!",
    };
}

export const conflictErrors = {
    participantAlreadyExistsError,
}