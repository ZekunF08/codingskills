import * as fs from 'fs';
import * as csv from 'fast-csv';

import { Catalog, CatalogWithSource } from '../../types/Catalog';
import { Supplier } from '../../types/Supplier';
import { SupplierProductBarcode } from '../../types/SupplierProductBarcode';
import strings from '../../Constants/strings';

export const readCSV = (filePath: string) => {
    const dataSet: Catalog[] | Supplier[] | SupplierProductBarcode[] = [];
    const result = new Promise<Catalog[] | Supplier[] | SupplierProductBarcode[]>((resolve, reject) => {
        if (!fs.existsSync(filePath)) {
            reject(strings.error_file_not_exist);
            return;
        }
        if (filePath.split('.').pop() !== 'csv') {
            reject(strings.error_file_type);
            return;
        }
        fs.createReadStream(filePath)
            .pipe(csv.parse({ headers: true }))
            .on('error', error => {
                console.error(error);
                reject(error);
            })
            .on('data', (row) => {
                dataSet.push(row);
            })
            .on('end', (rowCount: number) => {
                if (rowCount > 1) {
                    resolve(dataSet);
                }
                reject(strings.error_file_empty);
            });
    });
    return result;
};

export const writeCSV = (outPutFile: string, data: CatalogWithSource[]) => {
    const outPutPath = `./output/${outPutFile}.csv`;
    const result = new Promise((resolve, reject) => {
        if (data.length < 1) {
            reject(strings.error_no_result);
            return;
        }
        const row = Object.keys(data[0]);
        csv.writeToPath(outPutPath, [row, ...data])
            .on('error', err => {
                reject(err);
            })
            .on('finish', () => {
                resolve(strings.success_done_writing);
            });
    });
    return result;
};
