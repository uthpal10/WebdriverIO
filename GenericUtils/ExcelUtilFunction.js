import excel from "exceljs";

export async function fetchSingleDataFromExcel(excelpath, sheetName, rownum, colnum)
    {
        let wb = new excel.Workbook();
        await wb.xlsx.readFile(excelpath);
        let sh = wb.getWorksheet(sheetName);
        return sh.getRow(rownum).getCell(colnum).toString();
    }

export async function writeDataintoExcelInSameSheet(excelpath, sheetName, rownum, colnum, text)
{
    let wb = new excel.Workbook();
    await wb.xlsx.readFile(excelpath);
    let sh = wb.getWorksheet(sheetName);
    let data = sh.getRow(rownum).getCell(colnum).value = text;
    await wb.xlsx.writeFile(excelpath);
    return data;
}

export async function writeDataintoExcelInDifferentSheet(excelpath, sheetName, rownum, colnum, text)
{
    let wb = new excel.Workbook();
    await wb.xlsx.readFile(excelpath);
    let sh = wb.addWorksheet(sheetName);
    let res = sh.getRow(rownum).getCell(colnum).value = text;
    await wb.xlsx.writeFile(excelpath);
    return res;
}