"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.seed = void 0;
const getMigrator_1 = require("./getMigrator");
const fs = require("fs");
const path = require("path");
const seed = async (query, file) => {
    console.log(`executing migration: ${file} ...`);
    const { pool, migrator } = await (0, getMigrator_1.getMigrator)();
    await migrator.up();
    await pool.query(query);
    console.log(`${file} migration executed`);
};
exports.seed = seed;
const directoryPath = path.join(__dirname, 'seeds');
async function runAll() {
    fs.readdir(directoryPath, async function (err, files) {
        if (err) {
            return console.log('Unable to scan directory: ' + err);
        }
        for (const file of files) {
            const data = fs.readFileSync(path.resolve(directoryPath, file), {
                encoding: 'utf8',
                flag: 'r',
            });
            await (0, exports.seed)({ sql: data, values: [], type: 'SLONIK_TOKEN_SQL' }, file);
        }
        console.log('done');
        process.exit(0);
    });
}
runAll();
//# sourceMappingURL=seed.js.map