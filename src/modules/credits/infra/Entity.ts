import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    DeleteDateColumn,
    ManyToOne,
} from 'typeorm';
import { Exclude } from 'class-transformer';
import { Client } from '../../clients/infra/Entity';

@Entity('credits')
export class Credit {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    clientId: string;

    @Column()
    value: number;

    @ManyToOne(() => Client, client => client.credit)
    client: Client;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @DeleteDateColumn()
    @Exclude()
    deletedAt?: Date;
}