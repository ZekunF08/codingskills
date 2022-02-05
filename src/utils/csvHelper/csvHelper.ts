import * as fs from 'fs';
import * as path from 'path';
import * as csv from 'fast-csv';

import { Catalog, CatalogWithSource } from "../../types/Catalog";
import { Supplier } from "../../types/Supplier";
import { SupplierProductBarcode } from "../../types/SupplierProductBarcode";

export const readCSV = (filePath: string) => {
    const dataSet: Catalog[] | Supplier[] | SupplierProductBarcode[] = [];
    var result = new Promise<Catalog[] | Supplier[] | SupplierProductBarcode[]>((resolve, reject) => {
        fs.createReadStream(filePath)
            .pipe(csv.parse({ headers: true }))
            .on('error', error => { console.error(error); reject; })
            .on('data', (row) => {
                // console.log(row);
                dataSet.push(row);
            })
            .on('end', (rowCount: number) => {
                // console.log(`Parsed ${rowCount} rows`);
                // console.log(`dataSet`,dataSet);
                if (dataSet.length > 1) {
                    resolve(dataSet);
                }

            });
    });
    return result;
};

export const writeCSV = (outPutFile: string, data: CatalogWithSource[]) => {
    // let row = { SKU: 'ad', Description: 'ad', source: 'hahha' };
    if (data.length < 1) {
        console.error("No data");
        return;
    }
    let outPutPath = `./output/${outPutFile}.csv`;
    let row = Object.keys(data[0]);
    // var outPutData = getTitle.concat(data);
    // let writeStream = fs.createWriteStream(outPutFile);
    csv.writeToPath(outPutPath, [row, ...data],).
        on('error', err => console.error(err))
        .on('finish', () => console.log('Done writing.'));
};
