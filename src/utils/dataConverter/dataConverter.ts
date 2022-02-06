import { CompanyPayload } from "../../types/CompanyPayload";
import { Catalog, CatalogWithSource } from "../../types/Catalog";
import { Product } from "../../types/Product";
import { SupplierProductBarcode } from "../../types/SupplierProductBarcode";
import { Supplier } from "../../types/Supplier";
import { readCSV } from "../csvHelper/csvHelper";
import { productReducer } from "../productsReducer/productsReducer";


export const dataConverter = async (catalogPath: string, barcodePath: string, supplierPath: string, source: string): Promise<CompanyPayload> => {
    let companyPayload: CompanyPayload = {
        company: source,
        catalog: await readCSV(catalogPath),
        supplier: await readCSV(supplierPath),
        supplierProductBarcode: await readCSV(barcodePath),
    };
    return companyPayload;
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