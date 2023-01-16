import { AppError } from '../../../shared/AppError';
import { inject, injectable } from 'tsyringe';
import { Client } from '../infra/Entity';
import { contract } from '../interfaces/contract';

@injectable()
export class GetByClientId {
    constructor(
        @inject('Client')
        private repository: contract,
    ) {}

    async execute(clientId: string): Promise<Client | undefined> {

        const item = await this.repository.getByClientId(clientId);

        if(!item) {
            throw new AppError('Cliente não encontrado')
        }

        return item;
    }
}