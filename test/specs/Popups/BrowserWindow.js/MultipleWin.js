describe('suite', () =>
{
    it('title', async() =>
    {
        await browser.navigateTo("https://demoapps.qspiders.com/ui/browser/multipleWindow?sublist=2");
        await browser.pause(2000);
        await browser.maximizeWindow();
        await browser.pause(2000);
        await browser.$("#browserButton3").click();
        await browser.pause(2000);
        let allwin = await browser.getWindowHandles();
        for (let index = 0; index < allwin.length; index++) 
        {
            await browser.switchToWindow(allwin[index]);
            await browser.pause(1000);
            console.log(await browser.getTitle());
            await browser.pause(1000);
            console.log(await browser.getUrl());
        }
        // await browser.switchToWindow(allwin[1]);
        // await browser.switchWindow('Demoapps | Qspider', 'https://demoapps.qspiders.com/ui/browser/SignUpPage')
        // await browser.pause(2000);
        // await browser.$('#email').setValue("uthpal.ramesh10@gmail.com");
        await browser.pause(4000);
    })
})  