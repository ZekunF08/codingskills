import { readCSV } from "./utils/csvHelper/csvHelper";

const app = () => {
    let catA: string = './input/catalogA.csv';
    readCSV(catA);
}

app();