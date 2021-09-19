const { any } = require('joi');
const Joi = require('joi');

const userSchema = Joi.object().keys({
    name: Joi.string().min(5).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).max(12).required(),
    newsLetter: Joi.boolean().required(),
    mobile: Joi.any(),
    categoria: Joi.any()
});

module.exports = {
    userSchema
}