import { DataSource, ObjectType, Repository } from 'typeorm';
// import { TYPES } from '../type.core';
// import { Logger } from '../../shared/services/logger.service';
import appDataSource from './database.config';

import { CreateDataSource } from '@/core/services/provider';

import { DatabaseInterface } from './database.schema';

@CreateDataSource
export class Database implements DatabaseInterface {
    private static myDataSource: DataSource;

    // constructor (
    //     @inject(TYPES.Logger) private readonly logger: Logger
    // ) {}

    private async _getConnection(): Promise<DataSource> {
        if (Database.myDataSource?.isInitialized) {
            // this.logger.info('Connection Already Established!');
            console.log('Connection Already Established!');
            return Database.myDataSource;
        }

        try {
            Database.myDataSource = await appDataSource.initialize();
            // this.logger.info('Connection Established!');
            console.log('Connection Established!');
        } catch (error) {
            // this.logger.error(`Connection Failed. Error: ${error}`);
            console.log(`Connection Failed. Error: ${error}`);
        }

        return Database.myDataSource;
    }

    public async getRepository(entity: ObjectType<any>): Promise<Repository<any>> {
        const connection = await this._getConnection();
        return await connection?.getRepository(entity);
    }
}