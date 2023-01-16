import { Client } from '../infra/Entity'
import { create } from './create'

export interface contract {
    create({ name }: create): Promise<Client>;
    getByClientId(clientId: string): Promise<Client | undefined>;
    getAllByName(name: string): Promise<Client[] | undefined>;
    getAll(): Promise<Client[]>;
    save(user: Client): Promise<Client>;
}