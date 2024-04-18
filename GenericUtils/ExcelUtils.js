import excel from "exceljs";

class excelUtilities
{
    async fetchSingleDataFromExcel(excelpath, sheetName, rownum, colnum)
    {
        let wb = new excel.Workbook();
        await wb.xlsx.readFile(excelpath);
        let sh = wb.getWorksheet(sheetName);
        return sh.getRow(rownum).getCell(colnum).toString();
    }

    async fetchMultipleDataFromExcel(sheet)
    {
        let wb = new excel.Workbook();
        await wb.xlsx.readFile("./test/testData/Sample.xlsx");
        let sh = wb.getWorksheet(sheet);

        for(let i = 1; i <= sh.rowCount; i++)
        {
           for(let j = 1; j <= sh.columnCount; j++)
           {
                let result = sh.getRow(i).getCell(j).toString();
                return result;
           }
           console.log();
        }
    }
}
export default new excelUtilities();