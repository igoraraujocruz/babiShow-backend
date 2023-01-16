import { Credit } from '../infra/Entity'
import { create } from './create'

export interface contract {
    create({ clientId, value }: create): Promise<Credit>;
    getAll(): Promise<Credit[]>;
    save(user: Credit): Promise<Credit>;
}