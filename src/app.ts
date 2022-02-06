
import filePath from "./Constants/filePath";
import { writeCSV } from "./utils/csvHelper/csvHelper";
import { dataConverter, convertToProduct } from "./utils/dataConverter/dataConverter";
import { productReducer } from "./utils/productsReducer/productsReducer";

const app = async () => {
    // get all company info by reading CSV files
    var companyAInfo = await dataConverter(filePath.cat_A_file, filePath.barcode_A_file, filePath.supplier_A_file, 'A');
    var companyBInfo = await dataConverter(filePath.cat_B_file, filePath.barcode_B_file, filePath.supplier_B_file, 'B');

    // convert all company info into one object 
    var productsA = convertToProduct(companyAInfo);
    var productsB = convertToProduct(companyBInfo);

    //remove duplicated products in two companies
    var result = productReducer([...productsA, ...productsB]);

    //output result as per requirement
    await writeCSV('merged_catalog', result);
};

app();