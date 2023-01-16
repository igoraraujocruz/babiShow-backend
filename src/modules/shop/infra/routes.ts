import { Router } from 'express';
import { celebrate, Segments, Joi } from 'celebrate';
import { Controller } from './Controller';
import { ensureAuthenticated } from '../../sellers/infra/Middlewarer';

export const router = Router();
const controller = new Controller();

router.post(
    '/',
    celebrate({
        [Segments.BODY]: {
            clientId: Joi.string().required(),
            amountPaid: Joi.number().required(),
        },
    }),
    controller.create,
);

router.put(
    '/',
    celebrate({
        [Segments.BODY]: {
            shopId: Joi.string().required(),
            paid: Joi.boolean().required(),
        },
    }),
    controller.update,
);

router.get('/',
celebrate({
    [Segments.QUERY]: {
        shopId: Joi.string().uuid(),
    },
}),
ensureAuthenticated,
controller.get)