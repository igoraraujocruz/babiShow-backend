import { instanceToPlain } from 'class-transformer';
import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { Create } from '../services/Create';
import { GetById } from '../services/GetById';
import { GetAll } from '../services/GetAll';
import { AppError } from '../../../shared/AppError';
import { Update } from '../services/Update';

export class Controller {
    async create(
        request: Request,
        response: Response,
    ): Promise<Response> {
                
        const { clientId, amountPaid } =
            request.body;

        const create = container.resolve(Create);

        const item = await create.execute({
            clientId,
            amountPaid
        });

        return response.status(200).json(item);
    }

    async update(
        request: Request,
        response: Response,
    ): Promise<Response> {
                
        const { shopId, paid } =
            request.body;

        const create = container.resolve(Update);

        const item = await create.execute({
            shopId,
            paid
        });

        return response.status(200).json(item);
    }

    async get(request: Request, response: Response): Promise<Response> {

        const { shopId } = request.query;

        if (shopId) {
            const get = container.resolve(GetById);

            const shop = await get.execute(String(shopId));

            return response.json(instanceToPlain(shop));
        }

        const getAll = container.resolve(GetAll)

        const item = await getAll.execute()

        return response.status(200).json(instanceToPlain(item))
    }
}