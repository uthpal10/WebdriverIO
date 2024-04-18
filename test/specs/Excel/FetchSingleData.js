import excel from "exceljs";

describe('Excel', () =>
{
    it('FetchSingleData', async() =>
    {
        let wb = new excel.Workbook();
        await wb.xlsx.readFile("./test/testData/Sample.xlsx");
        let sh = wb.getWorksheet("Sheet2");
        let data = sh.getRow(1).getCell(1).toString();
        console.log(`=====> ${data}`);
    })
} )