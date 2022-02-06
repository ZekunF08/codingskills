import { isDuplicate, productReducer } from "./productsReducer";
describe('test productReducer', () => {
    it('should remove duplicated product based on barcode with actual data', () => {

        const testProductsA = [
            {
                company: 'A',
                catalog: { SKU: '647-vyk-317', Description: 'Walkers Special Old Whiskey' },
                barCodes: [
                    'z2783613083817',
                    'z2783613083818',
                    'z2783613083819',
                    'n7405223693844',
                    'c7417468772846',
                    'w3744746803743',
                    'w2572813758673',
                    's7013910076253',
                    'm1161615509466'
                ],
                supplierId: [1]
            },
            {
                company: 'A',
                catalog: { SKU: '280-oad-768', Description: 'Bread - Raisin' },
                barCodes: [
                    'p2359014924610',
                    'a7802303764525',
                    'o5194275040472',
                    'j9023946968130',
                    'x5678105140949',
                    'c9083052423045',
                    'f4322915485228',
                    'i0471865670980',
                    'i0471865670981',
                    'i0471865670982',
                    'b4381274928349'
                ],
                supplierId: [2]
            },
            {
                company: 'A',
                catalog: { SKU: '165-rcy-650', Description: 'Tea - Decaf 1 Cup' },
                barCodes: [
                    'u5160747892301',
                    'm8967092785598',
                    'l7342139757479',
                    'p1667270888414',
                    'v0874763455559',
                    'p9774916416859',
                    'c4858834209466',
                    'x7331732444187',
                    'u7720008047675',
                    'i2431892662423',
                    'o1336108796249',
                    'w7839803663600'
                ],
                supplierId: [3]
            },
            {
                company: 'A',
                catalog: { SKU: '167-eol-949', Description: 'Cheese - Grana Padano' },
                barCodes: [
                    'a6971219877032',
                    'a7340270328026',
                    'a0126648261918',
                    'a9858014383660',
                    'a2338856941909',
                    'a5056026479965',
                    'a7425424390056',
                    'a0864219864945',
                    'a1257743939800',
                    'a0880467790155',
                    'a4469253605532',
                    'a0891358702681'
                ],
                supplierId: [4]
            },
            {
                company: 'A',
                catalog: {
                    SKU: '650-epd-782',
                    Description: 'Carbonated Water - Lemon Lime'
                },
                barCodes: [
                    'n8954999835177',
                    'd2381485695273',
                    'y0588794459804',
                    'v8710606253394',
                    'o5184937926186',
                    'r4059282550570',
                    'k3213966445562',
                    'a3343396882074'
                ],
                supplierId: [5]
            },
            {
                company: 'B',
                catalog: {
                    SKU: '999-vyk-317',
                    Description: 'Walkers Special Old Whiskey test'
                },
                barCodes: [
                    'z2783613083817',
                    'n7405223693844',
                    'c7417468772846',
                    'w3744746803743',
                    'w2572813758673',
                    's7013910076253',
                    'm1161615509466'
                ],
                supplierId: [1]
            },
            {
                company: 'B',
                catalog: { SKU: '999-oad-768', Description: 'Bread - Raisin' },
                barCodes: [
                    'p2359014924610',
                    'a7802303764525',
                    'o5194275040472',
                    'j9023946968130',
                    'x5678105140949',
                    'c9083052423045',
                    'f4322915485228',
                    'i0471865670980',
                    'b4381274928349'
                ],
                supplierId: [2]
            },
            {
                company: 'B',
                catalog: { SKU: '165-rcy-650', Description: 'Tea - Decaf 1 Cup' },
                barCodes: [
                    'u5160747892301',
                    'm8967092785598',
                    'l7342139757479',
                    'p1667270888414',
                    'v0874763455559',
                    'p9774916416859',
                    'c4858834209466',
                    'x7331732444187',
                    'u7720008047675',
                    'i2431892662423',
                    'o1336108796249',
                    'w7839803663600'
                ],
                supplierId: [3]
            },
            {
                company: 'B',
                catalog: { SKU: '999-eol-949', Description: 'Cheese - Grana Padano' },
                barCodes: [
                    'x6971219877032',
                    'x7340270328026',
                    'x0126648261918',
                    'x9858014383660',
                    'x2338856941909',
                    'x5056026479965',
                    'x7425424390056',
                    'x0864219864945',
                    'x1257743939800',
                    'x0880467790155',
                    'x4469253605532',
                    'x0891358702681'
                ],
                supplierId: [4]
            },
            {
                company: 'B',
                catalog: {
                    SKU: '999-epd-782',
                    Description: 'Carbonated Water - Lemon Lime'
                },
                barCodes: [
                    'b8954999835177',
                    'b2381485695273',
                    'b0588794459804',
                    'b8710606253394',
                    'b5184937926186',
                    'b4059282550570',
                    'b3213966445562',
                    'b3343396882074'
                ],
                supplierId: [5]
            }
        ];
        const expected = [{
            SKU: '647-vyk-317',
            Description: 'Walkers Special Old Whiskey',
            source: 'A'
        },
        { SKU: '280-oad-768', Description: 'Bread - Raisin', source: 'A' },
        { SKU: '165-rcy-650', Description: 'Tea - Decaf 1 Cup', source: 'A' },
        {
            SKU: '167-eol-949',
            Description: 'Cheese - Grana Padano',
            source: 'A'
        },
        {
            SKU: '650-epd-782',
            Description: 'Carbonated Water - Lemon Lime',
            source: 'A'
        },
        {
            SKU: '999-eol-949',
            Description: 'Cheese - Grana Padano',
            source: 'B'
        },
        {
            SKU: '999-epd-782',
            Description: 'Carbonated Water - Lemon Lime',
            source: 'B'
        }];
        const result = productReducer(testProductsA);
        expect(result).toEqual(expected);
    });
    it('should not remove product if no barcode', () => {

        const testProductsB = [
            {
                company: 'A',
                catalog: { SKU: '647-vyk-317', Description: 'Walkers Special Old Whiskey' },
                barCodes: [],
                supplierId: [1]
            },
            {
                company: 'A',
                catalog: { SKU: '280-oad-768', Description: 'Bread - Raisin' },
                barCodes: [],
                supplierId: [2]
            },
            {
                company: 'A',
                catalog: { SKU: '165-rcy-650', Description: 'Tea - Decaf 1 Cup' },
                barCodes: [],
                supplierId: [3]
            },
            {
                company: 'A',
                catalog: { SKU: '167-eol-949', Description: 'Cheese - Grana Padano' },
                barCodes: [],
                supplierId: [4]
            },
            {
                company: 'B',
                catalog: {
                    SKU: '999-vyk-317',
                    Description: 'Walkers Special Old Whiskey test'
                },
                barCodes: [],
                supplierId: [1]
            },
        ];
        const expected = [{
            SKU: '647-vyk-317',
            Description: 'Walkers Special Old Whiskey',
            source: 'A'
        },
        { SKU: '280-oad-768', Description: 'Bread - Raisin', source: 'A' },
        { SKU: '165-rcy-650', Description: 'Tea - Decaf 1 Cup', source: 'A' },
        {
            SKU: '167-eol-949',
            Description: 'Cheese - Grana Padano',
            source: 'A'
        },
        {
            SKU: '999-vyk-317',
            Description: 'Walkers Special Old Whiskey test',
            source: 'B'
        },
        ];
        const result = productReducer(testProductsB);
        expect(result).toEqual(expected);
    });

    it('should not remove product if have same SKU and description but different barcode', () => {

        const testProductsB = [
            {
                company: 'A',
                catalog: { SKU: '647-vyk-317', Description: 'Walkers Special Old Whiskey' },
                barCodes: ['z2783613083817',
                    'z2783613083818',
                    'z2783613083819',
                    'n7405223693844',
                    'c7417468772846',
                    'w3744746803743',
                    'w2572813758673',
                    's7013910076253',
                    'm1161615509466'],
                supplierId: [1]
            },
            {
                company: 'B',
                catalog: { SKU: '647-vyk-317', Description: 'Walkers Special Old Whiskey' },
                barCodes: ['p2359014924610',
                    'a7802303764525',
                    'o5194275040472',
                    'j9023946968130',
                    'x5678105140949',
                    'c9083052423045',
                    'f4322915485228',
                    'i0471865670980',
                    'i0471865670981',
                    'i0471865670982',
                    'b4381274928349'],
                supplierId: [2]
            },
        ];
        const expected = [{
            SKU: '647-vyk-317',
            Description: 'Walkers Special Old Whiskey',
            source: 'A'
        },
        {
            SKU: '647-vyk-317',
            Description: 'Walkers Special Old Whiskey',
            source: 'B'
        },
        ];
        const result = productReducer(testProductsB);
        expect(result).toEqual(expected);
    });

    it('should remove product if have same barcode', () => {

        const testProductsB = [
            {
                company: 'A',
                catalog: { SKU: '647-vyk-317', Description: 'Walkers Special Old Whiskey' },
                barCodes: ['z2783613083817',
                    'z2783613083818',
                    'z2783613083819',
                    'n7405223693844',
                    'c7417468772846',
                    'w3744746803743',
                    'w2572813758673',
                    's7013910076253',
                    'm1161615509466'],
                supplierId: [1]
            },
            {
                company: 'B',
                catalog: { SKU: '647-vyk-317', Description: 'Walkers Special Old Whiskey' },
                barCodes: ['p2359014924610',
                    'a7802303764525',
                    'o5194275040472',
                    'j9023946968130',
                    'x5678105140949',
                    'c9083052423045',
                    'f4322915485228',
                    'i0471865670980',
                    'i0471865670981',
                    'i0471865670982',
                    'b4381274928349',
                    'z2783613083817'],
                supplierId: [2]
            },
        ];
        const expected = [{
            SKU: '647-vyk-317',
            Description: 'Walkers Special Old Whiskey',
            source: 'A'
        },
        ];
        const result = productReducer(testProductsB);
        expect(result).toEqual(expected);
    });
});

describe('test isDuplicate function', () => {
    it('should return false for two empty array', () => {
        var result = isDuplicate([], []);
        expect(result).toEqual(false);
    });

    it('should return false for one empty array', () => {
        var result = isDuplicate(['1231', 'abcd'], []);
        expect(result).toEqual(false);
    });

    it('should return true for duplicate', () => {
        var result = isDuplicate(['a', 'b'], ['a', 'c', 'd']);
        expect(result).toEqual(true);
    });

    it('should return false for no duplicate', () => {
        var result = isDuplicate(['abcd', 'asd'], ['efgh', 'jkl']);
        expect(result).toEqual(false);
    });

    it('should return false for self duplicate', () => {
        var result = isDuplicate(['abcd', 'asd', 'asd', 'asd'], ['efgh', 'jkl', 'jkl', 'jkl']);
        expect(result).toEqual(false);
    });
});