
import { writeCSV } from "./utils/csvHelper";
import { dataConverter } from "./utils/dataConverter";

const app = async () => {
    var result = await dataConverter();
    await writeCSV('./output/result.csv', result);
};

app();