import { SlonikMigrator } from '@slonik/migrator';
export declare function getMigrator(): Promise<{
    pool: import("slonik").DatabasePool;
    migrator: SlonikMigrator;
}>;
