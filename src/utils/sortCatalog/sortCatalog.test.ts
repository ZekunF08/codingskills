import { sortCatalog } from './sortCatalog';

describe('testSort', () => {
    it('should sort based on Description in descending order', () => {
        const data = [
            { SKU: '280-oad-768', Description: 'Bread - Raisin', source: 'A' },
            {
                SKU: '999-epd-782',
                Description: 'Carbonated Water - Lemon Lime',
                source: 'A'
            },
            {
                SKU: '647-vyk-317',
                Description: 'Walkers Special Old Whiskey',
                source: 'A'
            },
            {
                SKU: '999-epd-782',
                Description: 'Carbonated Water - Lemon Lime',
                source: 'B'
            }
        ];
        const expected = [
            { SKU: '280-oad-768', Description: 'Bread - Raisin', source: 'A' },
            {
                SKU: '999-epd-782',
                Description: 'Carbonated Water - Lemon Lime',
                source: 'B'
            },
            {
                SKU: '999-epd-782',
                Description: 'Carbonated Water - Lemon Lime',
                source: 'A'
            },
            {
                SKU: '647-vyk-317',
                Description: 'Walkers Special Old Whiskey',
                source: 'A'
            }
        ];

        const result = sortCatalog(data);
        expect(result).toEqual(expected);
    });

    it('should sort by source if description have same description', () => {
        const data = [
            { SKU: '280-oad-768', Description: 'Bread - Raisin', source: 'A' },
            { SKU: '165-rcy-650', Description: 'Tea - Decaf 1 Cup', source: 'A' },
            { SKU: '280-oad-768', Description: 'Bread - Raisin', source: 'B' },
            { SKU: '165-rcy-650', Description: 'Tea - Decaf 1 Cup', source: 'B' }

        ];
        const expected = [
            { SKU: '280-oad-768', Description: 'Bread - Raisin', source: 'B' },
            { SKU: '280-oad-768', Description: 'Bread - Raisin', source: 'A' },
            { SKU: '165-rcy-650', Description: 'Tea - Decaf 1 Cup', source: 'B' },
            { SKU: '165-rcy-650', Description: 'Tea - Decaf 1 Cup', source: 'A' }
        ];
        const result = sortCatalog(data);
        expect(result).toEqual(expected);
    });
});
