import { AppError } from '../../../shared/AppError';
import { inject, injectable } from 'tsyringe';
import { Shop } from '../infra/Entity';
import { contract } from '../interfaces/contract';
import { update } from '../interfaces/update';

@injectable()
export class Update {
    constructor(
        @inject('Shop')
        private repository: contract,
    ) {}

    async execute({
        shopId,
        paid
    }: update): Promise<Shop> {

        const shop = await this.repository.getById(shopId)

        if(!shop) {
            throw new AppError('Não foi possível encontrar essa compra')
        }

        shop.paid = paid

        return this.repository.save(shop)

    }
}