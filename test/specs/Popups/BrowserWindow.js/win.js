describe('suite', () =>
{
    it('title', async() =>
    {
        await browser.url("https://www.linkedin.com/");
        await browser.maximizeWindow();
        await browser.pause(1000);
        await browser.newWindow("https://www.cricbuzz.com/");
        await browser.pause(1000);
        await browser.newWindow("https://www.primevideo.com/");
        await browser.pause(1000);
        await browser.createWindow("")
        await browser.pause(1000);
        let handles = await browser.getWindowHandles();
        await browser.pause(1000);
        for(let i=0; i<handles.length; i++)
        {
            browser.switchToWindow(handles[i])
            console.log(await browser.getTitle());
            await browser.pause(1000);
            console.log(await browser.getUrl());
        }
        // await browser.pause(1000);
        // let w1 =handles.value[0];
        await browser.pause(4000);
    })
})