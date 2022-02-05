import { Catalog } from "./Catalog";
import { Supplier } from "./Supplier";
import { SupplierProductBarcode } from "./SupplierProductBarcode";

export interface CompanyPayload {
    company: string,
    catalog: Catalog[] | SupplierProductBarcode[] | Supplier[];
    supplierProductBarcode: Catalog[] | SupplierProductBarcode[] | Supplier[];
    supplier: Catalog[] | SupplierProductBarcode[] | Supplier[];
}
