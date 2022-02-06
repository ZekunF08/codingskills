import { CompanyPayload } from "../../types/CompanyPayload";
import { Catalog } from "../../types/Catalog";
import { Product } from "../../types/Product";
import { SupplierProductBarcode } from "../../types/SupplierProductBarcode";
import { Supplier } from "../../types/Supplier";
import { readCSV } from "../csvHelper/csvHelper";

export const dataConverter = async (catalogPath: string, barcodePath: string, supplierPath: string, source: string): Promise<CompanyPayload> => {
    var supplier: Supplier[] = await readCSV(supplierPath) as Supplier[];
    supplier.forEach(sup => {
        sup.ID = Number(sup.ID);
    });
    var supplierProductBarcode: SupplierProductBarcode[] = await readCSV(barcodePath) as SupplierProductBarcode[];
    supplierProductBarcode.forEach(code => {
        code.SupplierID = Number(code.SupplierID);
    });
    let companyPayload: CompanyPayload = {
        company: source,
        catalog: await readCSV(catalogPath),
        supplier: supplier,
        supplierProductBarcode: supplierProductBarcode,
    };
    return companyPayload;
};

// reduce input into product 
export const convertToProduct = (payload: CompanyPayload): Product[] => {
    // console.log(`payload`, payload);
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

    return result;
};