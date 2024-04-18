import { Key } from 'webdriverio'

describe('suite', () =>
{
  it('title', async() =>
  {
    await browser.url("https://demoapps.qspiders.com/ui/keyboard");
    await browser.maximizeWindow();
    await browser.pause(1000);
    await browser.$("//input[@id='email']").setValue('uthpal.ramesh10@gmail.com');
    await browser.keys([Key.Ctrl, 'a']);
    await browser.keys([Key.Ctrl, 'c']);
    await browser.pause(1000);
    await browser.$("//input[@id='password']").click();
    await browser.keys([Key.Ctrl, 'v']);
    let text = await (await browser.$("//input[@id='password']")).getValue();
    console.log(`Email text is --> ${text}`);
    await browser.pause(1000);
    await browser.$("//input[@id='confirmPassword']").click();
    await browser.keys([Key.Ctrl, 'v']);
    await browser.pause(1000);
    await browser.$("//button[.='Press Enter to Submit']").click();
    // browser.keys([Key.ArrowDown])
    // await browser.scroll(0, 450);
    await browser.pause(1000)
    let t = await browser.$("//p[.='1. Password should be 8 characters long.']").getText();
    console.log(`text is --> ${t}`);
    await browser.pause(5000);
  })  
})