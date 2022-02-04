import * as fs from 'fs';
import * as path from 'path';
import * as csv from 'fast-csv';

export const readCSV = (filePath : string) =>{
    fs.createReadStream(filePath)
    .pipe(csv.parse({ headers: true }))
    .on('error', error => console.error(error))
    .on('data', row => console.log(row))
    .on('end', (rowCount: number) => console.log(`Parsed ${rowCount} rows`));
}
