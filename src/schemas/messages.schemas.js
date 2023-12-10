import Joi from 'joi';

export const messageSchema = Joi.object({
    to: Joi.string().required().min(1),
    text: Joi.string().required().min(1),
    type: Joi.string().required().valid('message', 'private_message')
})

