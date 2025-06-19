"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMigrator = void 0;
const migrator_1 = require("@slonik/migrator");
const slonik_1 = require("slonik");
const dotenv = require("dotenv");
const path = require("path");
const envPath = path.resolve(__dirname, process.env.NODE_ENV === 'test' ? '../.env.test' : '../.env');
dotenv.config({ path: envPath });
async function getMigrator() {
    const pool = await (0, slonik_1.createPool)(`postgres://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}/${process.env.DB_NAME}`);
    const migrator = new migrator_1.SlonikMigrator({
        migrationsPath: path.resolve(__dirname, 'migrations'),
        migrationTableName: 'migration',
        slonik: pool,
    });
    return { pool, migrator };
}
exports.getMigrator = getMigrator;
//# sourceMappingURL=getMigrator.js.map