const program = require('commander');

import * as path from "path";
import { ConvertToDegust } from "./classes/class-convert-to-degust";

const destinationFolder = 'C:\\Users\\Vittorio\\Documents\\WorkFolders\\RdMate\\inbox\\hoje_reidomate\\testeEstoque';


program
    .version('0.1.0');

program
    .command('sem [filePath]')
    .action(async (filePath: string) => {
        // let filename = path.join(__dirname, 'classes/Contagem-Exportação.csv');
        let csv = new ConvertToDegust(filePath);
        csv.parseData();
        csv.writeFile(path.join(destinationFolder, 'contagem_semanal_40.csv'));
    });

program.parse(process.argv);