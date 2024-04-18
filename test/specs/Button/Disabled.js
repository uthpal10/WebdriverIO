describe('suite', () =>
{
    it('title', async() =>
    {
        await browser.url("https://demoapps.qspiders.com/ui/button/buttonDisabled?sublist=4");
        await browser.pause(2000);
        await browser.$("//button[@id='btn10']").click();
        await browser.pause(2000);
        await browser.$("//button[@id='btn12']").click();
        await browser.pause(2000);
        await browser.$("//button[@id='btn15']").click();
        await browser.pause(2000);
        await browser.$("//input[@id='submit']").click();
        await browser.pause(2000);
        await browser.$("//button[@id='submitButton']").click();
        await browser.pause(2000);
        (await browser.$("//button[@id='submitButton']")).click();
        // const btn = await browser.$("//button[@id='submitButton']").isEnabled();
        // if (btn) {
        //     btn.click()
        // } else {
        //     console.log(`Button is ${btn}`);
        // }
        await browser.pause(5000);  
    })
}
)