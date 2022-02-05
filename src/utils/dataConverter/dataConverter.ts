import { CompanyPayload } from "../../types/CompanyPayload";
import { Catalog, CatalogWithSource } from "../../types/Catalog";
import { Product } from "../../types/Product";
import { SupplierProductBarcode } from "../../types/SupplierProductBarcode";
import { Supplier } from "../../types/Supplier";
import { readCSV } from "../csvHelper/csvHelper";
import { productReducer } from "../productsReducer/productsReducer";


export const dataConverter = async (catalogPath: string, barcodePath: string, supplierPath: string, source: string): Promise<CompanyPayload> => {
    var catA = await readCSV(catalogPath);
    // console.log(`catA`, catA)
    var catB = await readCSV(catalogPath);
    // console.log(`catB`, catB)
    var barCodeA = await readCSV(barcodePath);
    // console.log(`barCodeA`, barCodeA)
    var barCodeB = await readCSV(barcodePath);
    // console.log(`barCodeB`, barCodeB)
    var supA = await readCSV(supplierPath);
    // console.log(`supplierAFile`, supA)
    var supB = await readCSV(supplierPath);
    // console.log(`supplierBFile`, supB)
    let companyPayload: CompanyPayload = {
        company: source,
        catalog: await readCSV(catalogPath),
        supplier: await readCSV(supplierPath),
        supplierProductBarcode: await readCSV(barcodePath),
    };
    // let companyPayloadB: CompanyPayload = {
    //     company: source,
    //     catalog: await readCSV(catBFile),
    //     supplier: await readCSV(supplierBFile),
    //     supplierProductBarcode: await readCSV(barCodeBFile),
    // };
    // convert inputs into one single product against each company
    return companyPayload;
    // var productsA = convertToProduct(companyPayloadA);
    // var productsB = convertToProduct(companyPayloadB);
    // // remove duplicated data here
    // return productReducer(productsA.concat(productsB));
};

// reduce input into product 
export const convertToProduct = (payload: CompanyPayload): Product[] => {

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