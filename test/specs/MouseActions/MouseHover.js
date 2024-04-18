import { Key } from 'webdriverio'

describe('Title', () =>
{
    it('Tit', async() =>
    {
        await browser.url("https://demoapps.qspiders.com/ui/mouseHover?sublist=0");
        await browser.pause(2000);
        await browser.maximizeWindow();
        // browser.keys([Key.PageDown]);
        await browser.pause(2000);
        await browser.$("//img[@class='w-5 h-5 mt-5 ml-3 cursor-pointer ']").moveTo();
        await browser.pause(5000);

    })
}

)