
import { writeCSV } from "./utils/csvHelper/csvHelper";
import { dataConverter } from "./utils/dataConverter";

const app = async () => {
    var result = await dataConverter();
    await writeCSV('result', result);
};

app();