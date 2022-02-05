import { CompanyPayload } from "../types/CompanyPayload";
import { Catalog, CatalogWithSource } from "../types/Catalog";
import { Product } from "../types/Product";
import { SupplierProductBarcode } from "../types/SupplierProductBarcode";
import { readCSV } from "./csvHelper/csvHelper";
import { productReducer } from "./productsReducer";


export const dataConverter = async (): Promise<CatalogWithSource[]> => {
    let catAFile: string = './input/catalogA.csv';
    let catBFile: string = './input/catalogB.csv';
    let barCodeAFile: string = './input/barcodesA.csv';
    let barCodeBFile: string = './input/barcodesB.csv';
    let supplierAFile: string = './input/suppliersA.csv';
    let supplierBFile: string = './input/suppliersB.csv';

    var catA = await readCSV(catAFile);
    // console.log(`catA`, catA)
    var catB = await readCSV(catBFile);
    // console.log(`catB`, catB)
    var barCodeA = await readCSV(barCodeAFile);
    // console.log(`barCodeA`, barCodeA)
    var barCodeB = await readCSV(barCodeBFile);
    // console.log(`barCodeB`, barCodeB)
    var supA = await readCSV(supplierAFile);
    // console.log(`supplierAFile`, supA)
    var supB = await readCSV(supplierBFile);
    // console.log(`supplierBFile`, supB)
    let companyPayloadA: CompanyPayload = {
        company: 'A',
        catalog: await readCSV(catAFile),
        supplier: await readCSV(supplierAFile),
        supplierProductBarcode: await readCSV(barCodeAFile),
    };
    let companyPayloadB: CompanyPayload = {
        company: 'B',
        catalog: await readCSV(catBFile),
        supplier: await readCSV(supplierBFile),
        supplierProductBarcode: await readCSV(barCodeBFile),
    };
    // convert inputs into one single product against each company
    var productsA = convertToProduct(companyPayloadA);
    var productsB = convertToProduct(companyPayloadB);
    // remove duplicated data here
    return productReducer(productsA.concat(productsB));
};

// reduce input into product 
const convertToProduct = (payload: CompanyPayload): Product[] => {

    //TODO: handle type narrowDown earlier if have time
    var catalogList = payload.catalog as Catalog[];
    var productBarcodeList = payload.supplierProductBarcode as SupplierProductBarcode[];
    // var supplierList = payload.supplierProductBarcode as SupplierProductBarcode[];
    let result: Product[] = catalogList.map(cat => {
        var barCodes: SupplierProductBarcode[] = productBarcodeList.filter(x => x.SKU === cat.SKU);
        var supplierList = [...new Set(barCodes.map(x => x.SupplierID))];
        return {
            company: payload.company,
            catalog: cat,
            barCodes: barCodes.map(x => x.Barcode),
            supplierId: supplierList
        };
    });

    //console.log('result',result);
    return result;
};