import { Router } from 'express';
import { celebrate, Segments, Joi } from 'celebrate';
import { Controller } from './Controller';
import { ensureAuthenticated } from './Middlewarer';

export const router = Router();
const controller = new Controller();

router.post(
    '/',
    celebrate({
        [Segments.BODY]: {
            username: Joi.string().required().regex(/^[a-zA-Z0-9]+$/),
            password: Joi.string().required().min(6),
        },
    }),
    controller.create,
);

router.get('/me', ensureAuthenticated, controller.getMe)