import { getRepository, Repository as TypeormRepository } from 'typeorm';
import { contract } from '../interfaces/contract';
import { Credit } from './Entity';
import { create } from '../interfaces/create'

export class Repository implements contract {
    private ormRepository: TypeormRepository<Credit>;

    constructor() {
        this.ormRepository = getRepository(Credit);
    }

    async create({ clientId, value }: create): Promise<Credit> {
        const item = this.ormRepository.create({ clientId, value });

        await this.ormRepository.save(item);

        return item;
    }

    async getAll(): Promise<Credit[]> {
        const item = this.ormRepository.find()

        return item;
    }

    async save(item: Credit): Promise<Credit> {
        return this.ormRepository.save(item);
    }
}