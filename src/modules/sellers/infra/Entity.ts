import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    DeleteDateColumn,
} from 'typeorm';
import { Exclude } from 'class-transformer';

@Entity('sellers')
export class Seller {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    username: string;
    
    @Column()
    @Exclude()
    password: string;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @DeleteDateColumn()
    @Exclude()
    deletedAt?: Date;
}