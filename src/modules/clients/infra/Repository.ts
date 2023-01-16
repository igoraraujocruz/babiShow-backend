import { getRepository, ILike, Repository as TypeormRepository } from 'typeorm';
import { contract } from '../interfaces/contract';
import { Client } from './Entity';
import { create } from '../interfaces/create'

export class Repository implements contract {
    private ormRepository: TypeormRepository<Client>;

    constructor() {
        this.ormRepository = getRepository(Client);
    }

    async create({ name }: create): Promise<Client> {
        const item = this.ormRepository.create({ name });

        await this.ormRepository.save(item);

        return item;
    }

    async getAll(): Promise<Client[]> {
        const item = this.ormRepository.find()

        return item;
    }

    async getByClientId(clientId: string): Promise<Client | undefined> {
        const item = this.ormRepository.findOne(clientId)

        return item;
    }

    async getAllByName(name: string): Promise<Client[] | undefined> {
        const item = this.ormRepository.find({
            where: {
                name: ILike(`%${name}%`)
            }
        })

        return item;
    }

    async save(item: Client): Promise<Client> {
        return this.ormRepository.save(item);
    }
}