"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const program = require('commander');
const path = require("path");
const class_convert_to_degust_1 = require("./classes/class-convert-to-degust");
const destinationFolder = 'C:\\Users\\Vittorio\\Documents\\WorkFolders\\RdMate\\inbox\\hoje_reidomate\\testeEstoque';
program
    .version('0.1.0');
program
    .command('sem [fileName]')
    .action(async (fileName) => {
    let filePath = path.join(__dirname, 'data', fileName);
    let csv = new class_convert_to_degust_1.ConvertToDegust(filePath);
    csv.parseData();
    csv.writeFile(path.join(destinationFolder, 'contagem_semanal_40.csv'));
});
program.parse(process.argv);
//# sourceMappingURL=cns.js.map