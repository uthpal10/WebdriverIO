describe('Suite', () =>
{
    it('jtitle', async() =>
    {
        await browser.url("https://demoapps.qspiders.com/ui/button/buttonDouble?sublist=2");
        await browser.pause(2000);
        await browser.$("//button[@id='btn20']").doubleClick();
        await browser.pause(2000)
        // let text = await browser.$("//span[.='Write a script to double click on a button?']").getText();
        // console.log(text);
        await browser.pause(5000);
    })
})