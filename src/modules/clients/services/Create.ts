import { inject, injectable } from 'tsyringe';
import { Client } from '../infra/Entity';
import { contract } from '../interfaces/contract';
import { create } from '../interfaces/create';

@injectable()
export class Create {
    constructor(
        @inject('Client')
        private repository: contract,
    ) {}

    async execute({
        name   
    }: create): Promise<Client> {

        const item = await this.repository.create({ name });

        return item;
    }
}