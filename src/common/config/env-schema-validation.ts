import Joi, { ObjectSchema } from 'joi';

export const envSchema: ObjectSchema<any> = Joi.object({
  PORT: Joi.number().integer().default(3000).required(),
  NODE_ENV: Joi.string().required(),
});
