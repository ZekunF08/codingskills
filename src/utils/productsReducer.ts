import { Product } from "../types/Product";
export const productReducer = (products: Product[]) => {
    let firstCompany = 'A';
    //console.log(`products`, products);
    //find duplicated barCodes
    var duplicatedCode = products.flatMap(x => x.barCodes).filter((v, i, a) => a.indexOf(v) !== i);
    //filter based on duplicate
    var newProducts = products.filter(x => {
        if (x.company === firstCompany) {
            return true;
        }
        return isDuplicate(x.barCodes, duplicatedCode);
    });
    console.log(`newProducts`, newProducts);

    var result = newProducts.map(prod => ({ SKU: prod.catalog.SKU, Description: prod.catalog.Description, source: prod.company }));
    console.log(`result`, result);
};
const isDuplicate = (array1: string[], array2: string[]): Boolean => {
    return array1.some(element => array2.indexOf(element) === -1);
};