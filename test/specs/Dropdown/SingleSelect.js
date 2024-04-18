describe('suite', () =>
{
    it('title', async() =>
    {
        await browser.navigateTo("https://demoapps.qspiders.com/ui/dropdown?sublist=0");
        await browser.pause(2000);
        await browser.$('#phone').setValue(8105259787);
        await browser.pause(2000);
        await browser.$('#select2').selectByVisibleText('Male');
        await browser.pause(2000);
        await browser.$('#select3').selectByIndex(7);
        await browser.pause(2000);
        await browser.$('#select5').selectByAttribute('value', 'Karnataka');
        await browser.pause(2000);
        console.log(await browser.$('#select5').getValue());
        await browser.pause(5000);
    })
})