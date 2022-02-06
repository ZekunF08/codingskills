import strings from '../../Constants/strings';
import { readCSV, writeCSV } from './csvHelper';

describe('test Read CSV ', () => {
    it('should throw error if filePath is wrong', async () => {
        return await expect(readCSV('./fake.csv')).rejects.toMatch(strings.error_file_not_exist);
    });

    it("should throw error if CSV is empty", async () => {
        return await expect(readCSV('./test/empty.csv')).rejects.toMatch(strings.error_file_empty);
    });

    it("should throw error if not csv file", async () => {
        return await expect(readCSV('./test/empty.txt')).rejects.toMatch(strings.error_file_type);
    });

    it("should read correct csv file", async () => {
        const expected = [{ "ID": "00001", "Name": "Twitterbridge" }, { "ID": "00002", "Name": "Thoughtsphere" }, { "ID": "00003", "Name": "Photobug" }, { "ID": "00004", "Name": "Jatri" }, { "ID": "00005", "Name": "Trunyx" }];
        return await expect(readCSV('./test/suppliersA.csv')).resolves.toEqual(expected);
    });

    it("should read correct csv file with extra ", async () => {
        const expected = [{ ID: '00001', Name: 'Twitterbridge', Phone: '012312' },
        { ID: '00002', Name: 'Thoughtsphere', Phone: '012312' },
        { ID: '00003', Name: 'Photobug', Phone: '012312' },
        { ID: '00004', Name: 'Jatri', Phone: '012312' },
        { ID: '00005', Name: 'Trunyx', Phone: '012312' }];
        return await expect(readCSV('./test/suppliersAextra.csv')).resolves.toEqual(expected);
    });

    it("should read correct csv file if missing", async () => {
        const expected = [{ ID: '00001', Name: '', Phone: '012312' },
        { ID: '00002', Name: 'Thoughtsphere', Phone: '012312' },
        { ID: '00003', Name: '', Phone: '012312' },
        { ID: '', Name: 'Jatri', Phone: '012312' },
        { ID: '00005', Name: '', Phone: '' }];
        return await expect(readCSV('./test/suppliersAmissing.csv')).resolves.toEqual(expected);

    });
});

describe('test write CSV', () => {
    it("should raise error if no result", async () => {
        return await expect(writeCSV('test_no_result', [])).rejects.toMatch(strings.error_no_result);
    });
    it("should raise success if write", async () => {
        const test = [
            {
                SKU: '647-vyk-317',
                Description: 'Walkers Special Old Whiskey',
                source: 'A'
            },
            { SKU: '280-oad-768', Description: 'Bread - Raisin', source: 'A' },
            { SKU: '165-rcy-650', Description: 'Tea - Decaf 1 Cup', source: 'A' },
            {
                SKU: '999-epd-782',
                Description: 'Carbonated Water - Lemon Lime',
                source: 'B'
            }];
        return await expect(writeCSV('test_result_success', test)).resolves.toMatch(strings.success_done_writing);
    });
});