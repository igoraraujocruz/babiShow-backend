import { Product } from '../infra/Entity'
import { create } from './create'

export interface contract {
    create({ name, amount, price, slug, cost}: create): Promise<Product>;
    getAll(): Promise<Product[]>
    getByCategory(category: string): Promise<Product[]>
    findBySlug(slug: string): Promise<Product | undefined>;
    findByName(name: string): Promise<Product | undefined>;
    findById(productId: string): Promise<Product | undefined>;
    findAllByName(name: string): Promise<Product[]>;
    save(product: Product): Promise<Product>;
}