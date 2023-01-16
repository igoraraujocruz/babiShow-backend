import { inject, injectable } from 'tsyringe';
import { Credit } from '../infra/Entity';
import { contract } from '../interfaces/contract';

@injectable()
export class GetAll {
    constructor(
        @inject('Credit')
        private repository: contract,
    ) {}

    async execute(): Promise<Credit[]> {

        const item = await this.repository.getAll();

        return item;
    }
}