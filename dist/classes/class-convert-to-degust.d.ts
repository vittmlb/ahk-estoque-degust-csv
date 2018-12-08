export declare class ConvertToDegust {
    private readonly _headerAirTableKeys;
    private readonly _headerCsvDegustKeys;
    private readonly _csv;
    private _degustCsv;
    constructor(filePath: string);
    readonly headerAirTableKeys: Array<string>;
    readonly headerCsvDegustKeys: Array<string>;
    readonly csv: IAirTable[];
    degustCsv: Array<IDegustCSV>;
    parseData(): void;
    /**
     * A função itera o array onde estão armazenados os somatórios das contagens de produtos para saber
     * se o objeto do segundo parâmetro deve ser inserido como um novo elemento nesse array ou se deve
     * ser apenas somado a um objeto já existente.
     * @param array (this.degustCsv)
     * @param obj
     */
    searchAndInsert(array: Array<IDegustCSV>, obj: IAirTable): void;
    /**
     *
     * @param filePath
     */
    writeFile(filePath: string): void;
    /**
     * Função que adiciona o header apropriado ao conjunto de dados é iterado até criar um conjunto de dados (array)
     * que servirá de base para o método 'stringify' disponibilizado pelo pacote npm csvsync.
     */
    private stringifyObjectToCsv;
}
export interface IAirTable {
    produto: string;
    cod: string;
    qtd: number;
}
export interface IDegustCSV {
    "cod": string;
    "qtd": number;
}
