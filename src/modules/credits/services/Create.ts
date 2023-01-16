import { inject, injectable } from 'tsyringe';
import { Credit } from '../infra/Entity';
import { contract } from '../interfaces/contract';
import { create } from '../interfaces/create';

@injectable()
export class Create {
    constructor(
        @inject('Credit')
        private repository: contract,
    ) {}

    async execute({
        clientId, value   
    }: create): Promise<Credit> {

        const item = await this.repository.create({ clientId, value });

        return item;
    }
}