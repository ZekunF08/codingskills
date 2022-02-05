import { readCSV, writeCSV } from './csvHelper';

describe('test Read CSV ', () => {
    it('should throw error if filePath is wrong', () => {
        return expect(readCSV('./fake.csv')).rejects.toMatch('error');
    });
});