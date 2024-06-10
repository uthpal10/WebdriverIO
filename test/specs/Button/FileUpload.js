describe('File upload', () =>
{
    it('should upload a file', async () =>
    {
        await browser.url('https://demo.automationtesting.in/FileUpload.html');
        await browser.pause(1000);
        await browser.maximizeWindow();
        await browser.pause(1000);
        let filePath = "c:/Users/uthpa/OneDrive/Pictures/Screenshots/Screenshot (6).png";
        const file = await browser.uploadFile(filePath);
        
        let uploadFileBtn = await browser.$("//input[@id='input-4']");

        await uploadFileBtn.addValue(file); // we can directly pass the path here -- we can also use setValue();

        await browser.pause(4000);
    });
});