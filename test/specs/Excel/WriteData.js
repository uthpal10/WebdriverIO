import excel from "exceljs";

describe('Excel', () =>
{
    it('writeData', async() =>
    {
        let wb = new excel.Workbook();
        await wb.xlsx.readFile("./test/testData/Sample.xlsx");
        // let sh = wb.addWorksheet("Sheet1");
        let sh = wb.getWorksheet("Sheet1");
        let data = sh.getRow(1).getCell(1).value = "Player Name";
        await wb.xlsx.writeFile("./test/testData/Sample.xlsx");
        console.log(data);
    })
} )