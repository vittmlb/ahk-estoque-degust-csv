"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const csvsync = require('csvsync');
const fs = require('fs');
const numeral = require('numeral');
class ConvertToDegust {
    constructor(filePath) {
        this._headerAirTableKeys = ['produto', 'cod', 'qtd'];
        this._headerCsvDegustKeys = ['cod item', 'quantidade'];
        this._degustCsv = [];
        const csv = fs.readFileSync(filePath);
        this._csv = csvsync.parse(csv, {
            skipHeader: true,
            returnObject: true,
            headerKeys: this.headerAirTableKeys,
            delimiter: ','
        });
    }
    get headerAirTableKeys() {
        return this._headerAirTableKeys;
    }
    get headerCsvDegustKeys() {
        return this._headerCsvDegustKeys;
    }
    get csv() {
        return this._csv;
    }
    get degustCsv() {
        return this._degustCsv;
    }
    set degustCsv(value) {
        this._degustCsv = value;
    }
    parseData() {
        let csv = this.csv;
        for (let j = 0; j < csv.length; j++) {
            this.searchAndInsert(this.degustCsv, csv[j]);
        }
    }
    /**
     * A função itera o array onde estão armazenados os somatórios das contagens de produtos para saber
     * se o objeto do segundo parâmetro deve ser inserido como um novo elemento nesse array ou se deve
     * ser apenas somado a um objeto já existente.
     * @param array (this.degustCsv)
     * @param obj
     */
    searchAndInsert(array, obj) {
        let flag = true;
        for (let i = 0; i < array.length; i++) {
            if (array[i].cod === obj.cod) {
                array[i].qtd += numeral(obj.qtd).value();
                flag = false;
            }
        }
        if (flag) {
            this.degustCsv.push({
                cod: obj.cod,
                qtd: numeral(obj.qtd).value()
            });
        }
    }
    /**
     *
     * @param filePath
     */
    writeFile(filePath) {
        let aux = this.stringifyObjectToCsv();
        fs.writeFileSync(filePath, aux);
    }
    /**
     * Função que adiciona o header apropriado ao conjunto de dados é iterado até criar um conjunto de dados (array)
     * que servirá de base para o método 'stringify' disponibilizado pelo pacote npm csvsync.
     */
    stringifyObjectToCsv() {
        let aux = [];
        aux.push(this.headerCsvDegustKeys); // Adiciona o header requerido pelo Degust.
        for (let i = 0; i < this._degustCsv.length; i++) {
            aux.push([this.degustCsv[i].cod, this.degustCsv[i].qtd]);
        }
        return csvsync.stringify(aux, { delimiter: ';' });
    }
}
exports.ConvertToDegust = ConvertToDegust;
//# sourceMappingURL=class-convert-to-degust.js.map