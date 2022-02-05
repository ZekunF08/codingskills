import { readCSV } from "./csvHelper";

export const dataConverter = async() =>{
    let catAFile: string = './input/catalogA.csv';
    let catBFile: string = './input/catalogB.csv';
    let barCodeAFile: string = './input/barcodesA.csv';
    let barCodeBFile: string = './input/barcodesB.csv';
    let supplierAFile :string = './input/suppliersA.csv'
    let supplierBFile :string = './input/suppliersB.csv'
    var catA = await readCSV(catAFile);
    console.log(`catA`, catA)
    var catB  =  await readCSV(catBFile);
    console.log(`catB`, catB)
    var barCodeA = await readCSV(barCodeAFile);
    console.log(`barCodeA`, barCodeA)
    var barCodeB = await readCSV(barCodeBFile);
    console.log(`barCodeB`, barCodeB)
    var supA = await readCSV(supplierAFile);
    console.log(`supplierAFile`, supA)
    var supB = await readCSV(supplierBFile);
    console.log(`supplierBFile`, supB)
}