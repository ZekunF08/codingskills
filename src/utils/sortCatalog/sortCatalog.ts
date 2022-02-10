import { CatalogWithSource } from '../../types/Catalog';

export const sortCatalog = (result: CatalogWithSource[]): CatalogWithSource[] => {
    const duplicatedName = result.filter((v, i, a) => a.findIndex(x => x.Description === v.Description) !== i);
    let newResult = result.filter(r => {
        if (r.source === 'A') {
            return true;
        }
        return !duplicatedName.some(x => x.Description === r.Description);
    });
    duplicatedName.forEach(dup => {
        const indexA = newResult.findIndex(r => r.Description === dup.Description);
        newResult = insert(newResult, indexA, dup);
    });
    return newResult;
};
const insert = (arr: CatalogWithSource[], index: number, newItem: CatalogWithSource) => [
    // part of the array before the specified index
    ...arr.slice(0, index),
    // inserted item
    newItem,
    // part of the array after the specified index
    ...arr.slice(index)
];
