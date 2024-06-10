import { expect } from "chai";

describe('suite', () =>
    {
        it('test', async () =>
        {
            await browser.navigateTo("https://demoapps.qspiders.com/ui?scenario=6");
            await browser.pause(2000);
            await browser.maximizeWindow();
            await browser.pause(2000);
            let url = await browser.getUrl();
            expect(url).to.equal("https://demoapps.qspiders.com/ui?scenario=6");
            
            // if(await $("//input[@id='name']").getAttribute('disabled') !== null)
            // {
            //     await browser.execute( () =>
            //     {
            //         const ele = document.querySelector("//input[@id='name']");
            //         ele.disabled = false; 
            //         ele.click();
            //         ele.disabled = true;
            //     })
            // }
            // else 
            //     {
            //         await $("//input[@id='name']").click(); // Direct click if not disabled
            //     }
    
            await browser.$("//input[@id='name']").setValue("uthpal");
            await browser.pause(2000);
            await browser.$("//input[@id='email']").setValue("uthpal.ramesh10@gmail.com");
            await browser.pause(2000);
            await browser.$("//input[@id='password']").setValue("Qwerty@123");
            await browser.pause(2000);
            await browser.$("//button[.='Register']").click();
            await browser.pause(2000);
            await browser.pause(5000);
        });
    });