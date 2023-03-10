import { Router } from 'express';
import { celebrate, Segments, Joi } from 'celebrate';
import { Controller } from './Controller';

export const router = Router();
const controller = new Controller();

router.post(
    '/',
    celebrate({
        [Segments.BODY]: {
            name: Joi.string().required(),
        },
    }),
    controller.create,
);

router.get('/', 
celebrate({
    [Segments.QUERY]: {
        clientId: Joi.string().uuid(),
        name: Joi.string(),
    },
}),
controller.get)

