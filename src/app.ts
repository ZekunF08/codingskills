
import filePath from './Constants/filePath';
import { writeCSV } from './utils/csvHelper/csvHelper';
import { dataConverter, convertToProduct } from './utils/dataConverter/dataConverter';
import { productReducer } from './utils/productsReducer/productsReducer';
import { sortCatalog } from './utils/sortCatalog/sortCatalog';

const app = async () => {
    // get all company info by reading CSV files
    const companyAInfo = await dataConverter(filePath.cat_A_file, filePath.barcode_A_file, filePath.supplier_A_file, 'A');
    const companyBInfo = await dataConverter(filePath.cat_B_file, filePath.barcode_B_file, filePath.supplier_B_file, 'B');

    // convert all company info into one object
    const productsA = convertToProduct(companyAInfo);
    const productsB = convertToProduct(companyBInfo);

    // remove duplicated products in two companies
    const mergedProduct = productReducer([...productsA, ...productsB]);

    const result = sortCatalog(mergedProduct);
    // output result as per requirement
    await writeCSV('merged_catalog', result);
};

app();
