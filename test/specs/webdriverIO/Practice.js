import {expect} from "chai";

describe('suite', () =>
{
    it('tit', async() =>
    {
        await browser.url("https://www.facebook.com/");
        const title = await browser.getTitle();
        console.log(title);
        expect (title).to.equal("Facebook – log in or sign up");
        await browser.pause(3000);
    })
})