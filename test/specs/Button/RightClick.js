describe ('suite',() =>
{
    it('title', async() =>
    {
        await browser.navigateTo("https://demoapps.qspiders.com/ui/button/buttonRight?sublist=1");
        await browser.pause(2000);
        await browser.$("//button[@id='btn30']").click( { button : 'right' } );
        await browser.$("//div[.='Yes']").click();
        await browser.pause(5000);
    })
})