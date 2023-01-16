import { Order } from '../infra/Entity'
import { create } from './create'

export interface contract {
    create({ productId,  quantity, shopId }: create): Promise<Order>;
    getAll(): Promise<Order[]>;
    save(order: Order): Promise<Order>;
}