import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    DeleteDateColumn,
    ManyToOne,
    JoinColumn,
    OneToMany,
} from 'typeorm';
import { Exclude } from 'class-transformer';
import { Client } from '../../clients/infra/Entity';
import { Order } from '../../orders/infra/Entity';

@Entity('shop')
export class Shop {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    amountPaid: number;

    @Column()
    clientId: string;

    @ManyToOne(() => Client, client => client.shop)

    @JoinColumn()
    client: Client;

    @OneToMany(() => Order, order => order.shop, {
        eager: true,
    })
    order: Order[];

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @DeleteDateColumn()
    @Exclude()
    deletedAt?: Date;
}