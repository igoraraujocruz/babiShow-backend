import { Seller } from '../infra/Entity'
import { create } from './create'

export interface contract {
    create({ username, password }: create): Promise<Seller>;
    getBySellerUsername(sellerUsername: string): Promise<Seller | undefined>;
    getAll(): Promise<Seller[]>
    findById(id: string): Promise<Seller | undefined>;
    save(user: Seller): Promise<Seller>;
}