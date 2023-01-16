import { inject, injectable } from 'tsyringe';
import { Product } from '../infra/Entity';
import { Update as IUpdate} from '../interfaces/update';
import { AppError } from '../../../shared/AppError';
import { contract } from '../interfaces/contract';

@injectable()
export class Update {
    constructor(
        @inject('Product')
        private repository: contract,
    ) {}

    public async execute({
        id,
        name,
        amount,
        price,
        category,
        cost
    }: IUpdate): Promise<Product> {
        const product = await this.repository.findById(id);

        if (!product) {
            throw new AppError('Product not found');
        }

        const productNameAlreadyExist =
            await this.repository.findByName(name);

        if (
            id !== productNameAlreadyExist?.id &&
            name === productNameAlreadyExist?.name
        ) {
            throw new AppError('O nome do produto já está em uso');
        }

        product.name = name;
        product.amount = amount;
        product.price = price;
        product.category = category;
        product.cost = cost;
        
        return this.repository.save(product);
    }
}