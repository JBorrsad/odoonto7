"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.run = void 0;
const getMigrator_1 = require("./getMigrator");
async function run() {
    const { migrator } = await (0, getMigrator_1.getMigrator)();
    migrator.runAsCLI();
    console.log('Done');
}
exports.run = run;
run();
//# sourceMappingURL=migrate.js.map