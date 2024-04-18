// import ExcelUtils from "../../../GenericUtils/ExcelUtils.js";
import { fetchSingleDataFromExcel, writeDataintoExcelInSameSheet, writeDataintoExcelInDifferentSheet } from "../../../GenericUtils/ExcelUtilFunction.js";

describe('Excel', () =>
{   
    const excelpath = "./test/testData/Sample.xlsx";

    it('GenericTest', async() =>
    {
        // let data = await ExcelUtils.fetchSingleDataFromExcel(excelpath, "Sheet2", 2, 2);

        let d = await fetchSingleDataFromExcel(excelpath, "Sheet2", 2, 2);
        console.log(`=====> ${d}`);

        let data = await writeDataintoExcelInSameSheet(excelpath, "Sheet1", 1, 1, "Java-Selenium");
        console.log(`=====> ${data}`);

        // let res = await writeDataintoExcelInDifferentSheet(excelpath, "Sheet3", 1, 1, "Selenium");
        // console.log(`=====> ${res}`);

    })
})