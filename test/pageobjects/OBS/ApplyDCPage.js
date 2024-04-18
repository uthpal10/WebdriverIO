import { Key } from 'webdriverio'

class applyDebitCard
{
    get accHolderNamefld()
    {
        return $("//input[@name='holder_name']");
    }

    get dobfld()
    {
        return $("//input[@name='dob']");
    }

    get panNofld()
    {
        return $("//input[@name='pan']");
    }

    get mobNofld()
    {
        return $("//input[@name='mob']");
    }

    get accNofld()
    {
        return $("//input[@name='acc_no']");
    }

    get submitbtn()
    {
        return $("//input[@name='dbt_crd_submit']");
    }

    get staffLogoutbtn()
    {
        return $("//input[@name='logout_btn']");
    }

    async applyDC(name, d, y, m, pan, mob, accno)
    {
        await this.accHolderNamefld.setValue(name);
        await browser.pause(1000);
        await this.dobfld.click();
        await this.dobfld.setValue(d);
        await browser.keys(Key.ArrowRight);
        await this.dobfld.setValue(y);
        await browser.keys(Key.ArrowLeft);
        await this.dobfld.setValue(m);
        await browser.pause(1000);
        await this.panNofld.setValue(pan);
        await browser.pause(1000);
        await this.mobNofld.setValue(mob);
        await browser.pause(1000);
        await expect( () => {window.scrollY});
        await browser.scroll(0,100);
        await this.accNofld.setValue(accno);
        await browser.pause(1000);
        await this.submitbtn.click();
        await browser.pause(2000);
        let text = await browser.getAlertText();
        console.log(text);
        await browser.pause(2000);
        await browser.acceptAlert();
        await browser.pause(3000);
    }
}
export default new applyDebitCard();