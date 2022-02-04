import { readCSV } from "./utils/csvHelper/csvHelper";

const app = () => {
    let catA = './input/catalogA.csv';
    readCSV(catA);
}

app();