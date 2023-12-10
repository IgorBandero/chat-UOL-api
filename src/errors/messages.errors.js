function invalidLimitError(){
    return {
        name: "InvalidLimitError",
        message: "A quantidade de mensagens solicitada é inválida, deve ser um número maior que zero!",
    };
}

export const messagesErrors = {
    invalidLimitError,
}