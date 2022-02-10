import filePath from '../../Constants/filePath';
import { CompanyPayload } from '../../types/CompanyPayload';
import { Product } from '../../types/Product';
import { convertToProduct, dataConverter } from './dataConverter';

describe('test data converter', () => {
    it('should return Company A payload if correct input are given', async () => {
        const companyAInfo = await dataConverter(filePath.cat_A_file, filePath.barcode_A_file, filePath.supplier_A_file, 'A');
        const expected = {
            company: 'A',
            catalog: [
                { SKU: '647-vyk-317', Description: 'Walkers Special Old Whiskey' },
                { SKU: '280-oad-768', Description: 'Bread - Raisin' },
                { SKU: '165-rcy-650', Description: 'Tea - Decaf 1 Cup' },
                { SKU: '167-eol-949', Description: 'Cheese - Grana Padano' },
                {
                    SKU: '650-epd-782',
                    Description: 'Carbonated Water - Lemon Lime'
                }
            ],
            supplier: [
                { ID: 1, Name: 'Twitterbridge' },
                { ID: 2, Name: 'Thoughtsphere' },
                { ID: 3, Name: 'Photobug' },
                { ID: 4, Name: 'Jatri' },
                { ID: 5, Name: 'Trunyx' }
            ],
            supplierProductBarcode: [
                { SupplierID: 1, SKU: '647-vyk-317', Barcode: 'z2783613083817' },
                { SupplierID: 1, SKU: '647-vyk-317', Barcode: 'z2783613083818' },
                { SupplierID: 1, SKU: '647-vyk-317', Barcode: 'z2783613083819' },
                { SupplierID: 1, SKU: '647-vyk-317', Barcode: 'n7405223693844' },
                { SupplierID: 1, SKU: '647-vyk-317', Barcode: 'c7417468772846' },
                { SupplierID: 1, SKU: '647-vyk-317', Barcode: 'w3744746803743' },
                { SupplierID: 1, SKU: '647-vyk-317', Barcode: 'w2572813758673' },
                { SupplierID: 1, SKU: '647-vyk-317', Barcode: 's7013910076253' },
                { SupplierID: 1, SKU: '647-vyk-317', Barcode: 'm1161615509466' },
                { SupplierID: 2, SKU: '280-oad-768', Barcode: 'p2359014924610' },
                { SupplierID: 2, SKU: '280-oad-768', Barcode: 'a7802303764525' },
                { SupplierID: 2, SKU: '280-oad-768', Barcode: 'o5194275040472' },
                { SupplierID: 2, SKU: '280-oad-768', Barcode: 'j9023946968130' },
                { SupplierID: 2, SKU: '280-oad-768', Barcode: 'x5678105140949' },
                { SupplierID: 2, SKU: '280-oad-768', Barcode: 'c9083052423045' },
                { SupplierID: 2, SKU: '280-oad-768', Barcode: 'f4322915485228' },
                { SupplierID: 2, SKU: '280-oad-768', Barcode: 'i0471865670980' },
                { SupplierID: 2, SKU: '280-oad-768', Barcode: 'i0471865670981' },
                { SupplierID: 2, SKU: '280-oad-768', Barcode: 'i0471865670982' },
                { SupplierID: 2, SKU: '280-oad-768', Barcode: 'b4381274928349' },
                { SupplierID: 3, SKU: '165-rcy-650', Barcode: 'u5160747892301' },
                { SupplierID: 3, SKU: '165-rcy-650', Barcode: 'm8967092785598' },
                { SupplierID: 3, SKU: '165-rcy-650', Barcode: 'l7342139757479' },
                { SupplierID: 3, SKU: '165-rcy-650', Barcode: 'p1667270888414' },
                { SupplierID: 3, SKU: '165-rcy-650', Barcode: 'v0874763455559' },
                { SupplierID: 3, SKU: '165-rcy-650', Barcode: 'p9774916416859' },
                { SupplierID: 3, SKU: '165-rcy-650', Barcode: 'c4858834209466' },
                { SupplierID: 3, SKU: '165-rcy-650', Barcode: 'x7331732444187' },
                { SupplierID: 3, SKU: '165-rcy-650', Barcode: 'u7720008047675' },
                { SupplierID: 3, SKU: '165-rcy-650', Barcode: 'i2431892662423' },
                { SupplierID: 3, SKU: '165-rcy-650', Barcode: 'o1336108796249' },
                { SupplierID: 3, SKU: '165-rcy-650', Barcode: 'w7839803663600' },
                { SupplierID: 4, SKU: '167-eol-949', Barcode: 'a6971219877032' },
                { SupplierID: 4, SKU: '167-eol-949', Barcode: 'a7340270328026' },
                { SupplierID: 4, SKU: '167-eol-949', Barcode: 'a0126648261918' },
                { SupplierID: 4, SKU: '167-eol-949', Barcode: 'a9858014383660' },
                { SupplierID: 4, SKU: '167-eol-949', Barcode: 'a2338856941909' },
                { SupplierID: 4, SKU: '167-eol-949', Barcode: 'a5056026479965' },
                { SupplierID: 4, SKU: '167-eol-949', Barcode: 'a7425424390056' },
                { SupplierID: 4, SKU: '167-eol-949', Barcode: 'a0864219864945' },
                { SupplierID: 4, SKU: '167-eol-949', Barcode: 'a1257743939800' },
                { SupplierID: 4, SKU: '167-eol-949', Barcode: 'a0880467790155' },
                { SupplierID: 4, SKU: '167-eol-949', Barcode: 'a4469253605532' },
                { SupplierID: 4, SKU: '167-eol-949', Barcode: 'a0891358702681' },
                { SupplierID: 5, SKU: '650-epd-782', Barcode: 'n8954999835177' },
                { SupplierID: 5, SKU: '650-epd-782', Barcode: 'd2381485695273' },
                { SupplierID: 5, SKU: '650-epd-782', Barcode: 'y0588794459804' },
                { SupplierID: 5, SKU: '650-epd-782', Barcode: 'v8710606253394' },
                { SupplierID: 5, SKU: '650-epd-782', Barcode: 'o5184937926186' },
                { SupplierID: 5, SKU: '650-epd-782', Barcode: 'r4059282550570' },
                { SupplierID: 5, SKU: '650-epd-782', Barcode: 'k3213966445562' },
                { SupplierID: 5, SKU: '650-epd-782', Barcode: 'a3343396882074' }
            ]
        };
        expect(companyAInfo).toEqual(expected);
    });
    it('should return Company B payload if correct input are given', async () => {
        const companyBInfo: CompanyPayload = await dataConverter(filePath.cat_B_file, filePath.barcode_B_file, filePath.supplier_B_file, 'B');
        const expected = {
            company: 'B',
            catalog: [
                {
                    SKU: '999-vyk-317',
                    Description: 'Walkers Special Old Whiskey test'
                },
                { SKU: '999-oad-768', Description: 'Bread - Raisin' },
                { SKU: '165-rcy-650', Description: 'Tea - Decaf 1 Cup' },
                { SKU: '999-eol-949', Description: 'Cheese - Grana Padano' },
                {
                    SKU: '999-epd-782',
                    Description: 'Carbonated Water - Lemon Lime'
                }
            ],
            supplier: [
                { ID: 1, Name: 'Wikivu' },
                { ID: 2, Name: 'Divavu' },
                { ID: 3, Name: 'Flashdog' },
                { ID: 4, Name: 'Bluejam' },
                { ID: 5, Name: 'Twitterworks' }
            ],
            supplierProductBarcode: [
                { SupplierID: 1, SKU: '999-vyk-317', Barcode: 'z2783613083817' },
                { SupplierID: 1, SKU: '999-vyk-317', Barcode: 'n7405223693844' },
                { SupplierID: 1, SKU: '999-vyk-317', Barcode: 'c7417468772846' },
                { SupplierID: 1, SKU: '999-vyk-317', Barcode: 'w3744746803743' },
                { SupplierID: 1, SKU: '999-vyk-317', Barcode: 'w2572813758673' },
                { SupplierID: 1, SKU: '999-vyk-317', Barcode: 's7013910076253' },
                { SupplierID: 1, SKU: '999-vyk-317', Barcode: 'm1161615509466' },
                { SupplierID: 2, SKU: '999-oad-768', Barcode: 'p2359014924610' },
                { SupplierID: 2, SKU: '999-oad-768', Barcode: 'a7802303764525' },
                { SupplierID: 2, SKU: '999-oad-768', Barcode: 'o5194275040472' },
                { SupplierID: 2, SKU: '999-oad-768', Barcode: 'j9023946968130' },
                { SupplierID: 2, SKU: '999-oad-768', Barcode: 'x5678105140949' },
                { SupplierID: 2, SKU: '999-oad-768', Barcode: 'c9083052423045' },
                { SupplierID: 2, SKU: '999-oad-768', Barcode: 'f4322915485228' },
                { SupplierID: 2, SKU: '999-oad-768', Barcode: 'i0471865670980' },
                { SupplierID: 2, SKU: '999-oad-768', Barcode: 'b4381274928349' },
                { SupplierID: 3, SKU: '165-rcy-650', Barcode: 'u5160747892301' },
                { SupplierID: 3, SKU: '165-rcy-650', Barcode: 'm8967092785598' },
                { SupplierID: 3, SKU: '165-rcy-650', Barcode: 'l7342139757479' },
                { SupplierID: 3, SKU: '165-rcy-650', Barcode: 'p1667270888414' },
                { SupplierID: 3, SKU: '165-rcy-650', Barcode: 'v0874763455559' },
                { SupplierID: 3, SKU: '165-rcy-650', Barcode: 'p9774916416859' },
                { SupplierID: 3, SKU: '165-rcy-650', Barcode: 'c4858834209466' },
                { SupplierID: 3, SKU: '165-rcy-650', Barcode: 'x7331732444187' },
                { SupplierID: 3, SKU: '165-rcy-650', Barcode: 'u7720008047675' },
                { SupplierID: 3, SKU: '165-rcy-650', Barcode: 'i2431892662423' },
                { SupplierID: 3, SKU: '165-rcy-650', Barcode: 'o1336108796249' },
                { SupplierID: 3, SKU: '165-rcy-650', Barcode: 'w7839803663600' },
                { SupplierID: 4, SKU: '999-eol-949', Barcode: 'x6971219877032' },
                { SupplierID: 4, SKU: '999-eol-949', Barcode: 'x7340270328026' },
                { SupplierID: 4, SKU: '999-eol-949', Barcode: 'x0126648261918' },
                { SupplierID: 4, SKU: '999-eol-949', Barcode: 'x9858014383660' },
                { SupplierID: 4, SKU: '999-eol-949', Barcode: 'x2338856941909' },
                { SupplierID: 4, SKU: '999-eol-949', Barcode: 'x5056026479965' },
                { SupplierID: 4, SKU: '999-eol-949', Barcode: 'x7425424390056' },
                { SupplierID: 4, SKU: '999-eol-949', Barcode: 'x0864219864945' },
                { SupplierID: 4, SKU: '999-eol-949', Barcode: 'x1257743939800' },
                { SupplierID: 4, SKU: '999-eol-949', Barcode: 'x0880467790155' },
                { SupplierID: 4, SKU: '999-eol-949', Barcode: 'x4469253605532' },
                { SupplierID: 4, SKU: '999-eol-949', Barcode: 'x0891358702681' },
                { SupplierID: 5, SKU: '999-epd-782', Barcode: 'b8954999835177' },
                { SupplierID: 5, SKU: '999-epd-782', Barcode: 'b2381485695273' },
                { SupplierID: 5, SKU: '999-epd-782', Barcode: 'b0588794459804' },
                { SupplierID: 5, SKU: '999-epd-782', Barcode: 'b8710606253394' },
                { SupplierID: 5, SKU: '999-epd-782', Barcode: 'b5184937926186' },
                { SupplierID: 5, SKU: '999-epd-782', Barcode: 'b4059282550570' },
                { SupplierID: 5, SKU: '999-epd-782', Barcode: 'b3213966445562' },
                { SupplierID: 5, SKU: '999-epd-782', Barcode: 'b3343396882074' }
            ]
        };
        expect(companyBInfo).toEqual(expected);
    });
});

describe('test data convertToProduct function', () => {
    it('should return product of company with catalog', () => {
        const payload: CompanyPayload = {
            company: 'A',
            catalog: [
                { SKU: '647-vyk-317', Description: 'Walkers Special Old Whiskey' }
            ],
            supplier: [
                { ID: 1, Name: 'Twitterbridge' }
            ],
            supplierProductBarcode: [
                {
                    SupplierID: 1,
                    SKU: '647-vyk-317',
                    Barcode: 'z2783613083817'
                },
                {
                    SupplierID: 1,
                    SKU: '647-vyk-317',
                    Barcode: 'z2783613083818'
                },
                {
                    SupplierID: 1,
                    SKU: '647-vyk-317',
                    Barcode: 'z2783613083819'
                },
                {
                    SupplierID: 5,
                    SKU: '650-epd-782',
                    Barcode: 'r4059282550570'
                },
                {
                    SupplierID: 5,
                    SKU: '650-epd-782',
                    Barcode: 'k3213966445562'
                }
            ]
        };
        const product: Product[] = [
            {
                company: 'A',
                catalog: { SKU: '647-vyk-317', Description: 'Walkers Special Old Whiskey' },
                barCodes: ['z2783613083817', 'z2783613083818', 'z2783613083819'],
                supplierId: [1]
            }
        ];
        const result = convertToProduct(payload);
        expect(result).toEqual(product);
    });
});
