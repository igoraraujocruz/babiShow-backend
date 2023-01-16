import { inject, injectable } from 'tsyringe';
import { Product } from '../infra/Entity';
import { contract } from '../interfaces/contract';
import { create } from '../interfaces/create';

@injectable()
export class Create {
    constructor(
        @inject('Product')
        private repository: contract,
    ) {}

    async execute({
        name,  price, amount, slug,  category, cost
    }: create): Promise<Product> {

        const item = await this.repository.create({
            name,  price, amount, slug, category, cost
        });

        return item;
    }
}