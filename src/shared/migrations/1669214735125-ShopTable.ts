import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class ShopTable1669214735125 implements MigrationInterface {

    async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');
        await queryRunner.createTable(
            new Table({
                name: 'shop',
                columns: [
                    {
                        name: 'id',
                        type: 'uuid',
                        isPrimary: true,
                        generationStrategy: 'uuid',
                        default: 'uuid_generate_v4()',
                    },
                    {
                        name: 'amountPaid',
                        type: 'decimal',
                    },
                    {
                        name: 'clientId',
                        type: 'uuid',
                    },
                    {
                        name: 'createdAt',
                        type: 'timestamp',
                        default: 'now()',
                    },
                    {
                        name: 'updatedAt',
                        type: 'timestamp',
                        default: 'now()',
                    },
                    {
                        name: 'deletedAt',
                        type: 'timestamp',
                        isNullable: true,
                    },
                ],
            }),
        );
        await queryRunner.createForeignKey(
            'shop',
            new TableForeignKey({
                name: 'shopClientForeignKey',
                columnNames: ['clientId'],
                referencedColumnNames: ['id'],
                referencedTableName: 'clients',
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE',
            }),
        );
    }

    async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('shop', 'shopClientForeignKey');
        await queryRunner.dropTable('shop');
    }

}
