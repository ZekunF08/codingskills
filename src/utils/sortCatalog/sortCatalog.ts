import { CatalogWithSource } from '../../types/Catalog';

export const sortCatalog = (result: CatalogWithSource[]): CatalogWithSource[] => {
    result.sort((a, b) => {
        var compare: number = b.Description.localeCompare(a.Description);
        // compare = 0 means description is same
        if (compare !== 0) {
            return compare;
        }
        return b.source.localeCompare(a.source);
    });
    console.log(`result`, result);
    return result;
};