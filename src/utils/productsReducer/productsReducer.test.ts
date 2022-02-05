import { isDuplicate } from "./productsReducer";

describe('test productReducer', () => {

});

describe('test isDuplicate function', () => {
    it('should work for two empty array', () => {
        var result = isDuplicate([], []);
        console.log(`result`, result);
        expect(result).toEqual(false);
    });

    it('should work for one empty array', () => {
        var result = isDuplicate(['1231', 'abcd'], []);
        console.log(`result`, result);
        expect(result).toEqual(false);
    });

    it('should work for duplicate', () => {
        var result = isDuplicate(['1231', '3123'], ['1231']);
        console.log(`result`, result);
        expect(result).toEqual(true);
    });

    it('should work for no duplicate', () => {
        var result = isDuplicate(['abcd', 'asd'], ['efgh', 'jkl']);
        console.log(`result`, result);
        expect(result).toEqual(false);
    });
});