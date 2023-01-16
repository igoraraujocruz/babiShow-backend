import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    DeleteDateColumn,
    OneToMany,
    JoinTable,
} from 'typeorm';
import { Exclude } from 'class-transformer';
import { Shop } from '../../shop/infra/Entity';
import { Credit } from '../../credits/infra/Entity';

@Entity('clients')
export class Client {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;

    @OneToMany(() => Credit, credit => credit.client, {
        eager: true
    })
    credit: Credit[];

    @OneToMany(() => Shop, shop => shop.client, {
        eager: true
    })
    shop: Shop[];

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @DeleteDateColumn()
    @Exclude()
    deletedAt?: Date;
}