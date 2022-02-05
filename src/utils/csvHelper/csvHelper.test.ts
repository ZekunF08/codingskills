import strings from '../../Constants/strings';
import { readCSV, writeCSV } from './csvHelper';

describe('test Read CSV ', () => {
    it('should throw error if filePath is wrong', async () => {
        return await expect(readCSV('./fake.csv')).rejects.toMatch(strings.error_file_not_exist);
    });

    it("should throw error if CSV is empty", async () => {
        return await expect(readCSV('./test/empty.csv')).rejects.toMatch(strings.error_file_empty);
    });
});