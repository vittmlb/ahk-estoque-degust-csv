import { suite, test } from 'mocha-typescript';
import { ConvertToDegust, IAirTable, IDegustCSV } from "../classes/class-convert-to-degust";
import * as path from 'path';

@suite
class CsvTest {

    public static before() {}

    @test('Testa Loading do CSV')
    public testCsvLoading() {
        let filePath = path.join(__dirname, '../classes/Contagem-Exportação.csv');
        let data = new ConvertToDegust(filePath);
        data.parseData();
        let csv = data.degustCsv;
        csv.forEach(el => {
            console.log(`cod: ${el.cod} - qtd: ${el.qtd}`);
        });
    }

}