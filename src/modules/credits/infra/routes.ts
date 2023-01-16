import { Router } from 'express';
import { celebrate, Segments, Joi } from 'celebrate';
import { Controller } from './Controller';

export const router = Router();
const controller = new Controller();

router.post(
    '/',
    celebrate({
        [Segments.BODY]: {
            clientId: Joi.string().required(),
            value: Joi.number().required(),
        },
    }),
    controller.create,
);

router.get('/', controller.getAll)

