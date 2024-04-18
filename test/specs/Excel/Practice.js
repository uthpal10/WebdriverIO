import excel from "exceljs";

describe('suite', () =>
{
    it('excel', async() =>
    {
        let wb = new excel.Workbook();
        await wb.xlsx.readFile("./test/testData/Sample.xlsx");
        let sh = wb.getWorksheet("Sheet1");
    
        for(let i=1; i<=sh.rowCount; i++)
            {
                for(let j=1; j<=sh.columnCount; j++)
                    {
                        let data = sh.getRow(i).getCell(j).toString();
                        process.stdout.write(data+" ");
                    }
                console.log();
            }

    })
})