import { instanceToPlain } from 'class-transformer';
import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { Create } from '../services/Create';
import { GetAll } from '../services/GetAll';
import { GetAllByName } from '../services/GetAllByName';
import { GetByClientId } from '../services/GetByClientId';


export class Controller {
    async create(
        request: Request,
        response: Response,
    ): Promise<Response> {
        const { name } =
            request.body;


        const create = container.resolve(Create);

        const item = await create.execute({
            name
        });

        return response.status(200).json(item);
    }

    async get(request: Request, response: Response): Promise<Response> {
        const { clientId, name } = request.query; 

        if(clientId) {
            const get = container.resolve(GetByClientId)

            const item = await get.execute(String(clientId))

            return response.json(instanceToPlain(item))
        }

        if (name) {
            const get = container.resolve(GetAllByName);

            const products = await get.execute(String(name));

            return response.json(instanceToPlain(products));
        }

        const getAll = container.resolve(GetAll)

        const item = await getAll.execute()

        return response.status(200).json(instanceToPlain(item))
    }
}