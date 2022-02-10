import { Product } from '../../types/Product';
import { CatalogWithSource } from '../../types/Catalog';
export const productReducer = (products: Product[]): CatalogWithSource[] => {
    const firstCompany = products[0].company;
    // find duplicated barCodes
    const duplicatedCode = products.flatMap(x => x.barCodes).filter((v, i, a) => a.indexOf(v) !== i);
    // filter based on duplicate
    const newProducts = products.filter(x => {
        if (x.company === firstCompany) {
            return true;
        }
        return !isDuplicate(x.barCodes, duplicatedCode);
    });

    const result: CatalogWithSource[] = newProducts.map(prod => ({ SKU: prod.catalog.SKU, Description: prod.catalog.Description, source: prod.company }));
    return result;
};
export const isDuplicate = (array1: string[], array2: string[]): Boolean => {
    if (array1.length < 1 || array2.length < 1) {
        return false;
    }
    return array1.some(element => array2.indexOf(element) !== -1);
};
