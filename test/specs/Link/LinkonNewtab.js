describe('suite', () =>
{
    it('title', async() =>
    {
        await browser.url("https://demoapps.qspiders.com/ui/link/linkNew?sublist=1");
        await browser.pause(2000);
        await browser.$("//a[.='Contact Us']").click();
        await browser.pause(5000);

    })
})