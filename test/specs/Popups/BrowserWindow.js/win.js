describe('suite', () =>
{
    it('title', async() =>
    {
        await browser.url("https://www.lenovo.com/");
        await browser.maximizeWindow();
        await browser.pause(1000);
        await browser.newWindow("https://www.dell.com/");
        await browser.pause(1000);
        await browser.newWindow("https://www.hp.com/");
        await browser.pause(1000);
        await browser.createWindow("window")
        await browser.pause(1000);
        console.log((await browser.getWindowHandles()).length);
        await browser.pause(1000);
        let handles = await browser.getWindowHandles();
        await browser.pause(1000);
        await browser.switchToWindow(handles[3]);
        await browser.pause(1000);
        await browser.url("https://www.google.com/");
        for(let i=0; i<handles.length; i++)
        {
            browser.switchToWindow(handles[i])
            console.log(await browser.getTitle());
            await browser.pause(1000);
            console.log(await browser.getUrl());
        }
        // await browser.pause(1000);
        // let w1 =handles.value[0];
        await browser.pause(5000);
    })
})