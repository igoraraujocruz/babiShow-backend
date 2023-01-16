import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    DeleteDateColumn,
    OneToMany,
    OneToOne,
} from 'typeorm';
import { Exclude } from 'class-transformer';
import { Photo } from '../../photos/infra/Entity';
import { Order } from '../../orders/infra/Entity';

@Entity('products')
export class Product {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;

    @Column()
    amount: number;

    @Column()
    cost: number;

    @Column()
    category: string;

    @Column()
    price: number;
    
    @Column()
    slug: string;

    @OneToMany(() => Photo, photos => photos.product, {
        eager: true,
    })
    photos: Photo[];

    @OneToOne(() => Order, order => order.product)
    order: Order[];

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @DeleteDateColumn()
    @Exclude()
    deletedAt?: Date;
}