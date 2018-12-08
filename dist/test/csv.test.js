"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const mocha_typescript_1 = require("mocha-typescript");
const class_convert_to_degust_1 = require("../classes/class-convert-to-degust");
const path = require("path");
let CsvTest = class CsvTest {
    static before() { }
    testCsvLoading() {
        let filePath = path.join(__dirname, '../classes/Contagem-Exportação.csv');
        let data = new class_convert_to_degust_1.ConvertToDegust(filePath);
        data.parseData();
        let csv = data.degustCsv;
        csv.forEach(el => {
            console.log(`cod: ${el.cod} - qtd: ${el.qtd}`);
        });
    }
};
__decorate([
    mocha_typescript_1.test('Testa Loading do CSV'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CsvTest.prototype, "testCsvLoading", null);
CsvTest = __decorate([
    mocha_typescript_1.suite
], CsvTest);
//# sourceMappingURL=csv.test.js.map