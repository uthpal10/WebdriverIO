import { Key } from 'webdriverio'

class InternetBanking
{
    get AccHoldNamefld()
    {
        return $("//input[@name='holder_name']");
    }

    get AccNofld()
    {
        return $("//input[@name='accnum']");
    }

    get DBCardNofld()
    {
        return $("//input[@name='dbtcard']");
    }

    get DBCardPinfld()
    {
        return $("//input[@name='dbtpin']");
    }

    get RegMobNofld()
    {
        return $("//input[@name='mobile']");
    }

    get PanNofld()
    {
        return $("//input[@name='pan_no']");
    }

    get Datefld()
    {
        return $("//input[@name='dob']");
    }

    get LastTranscsfld()
    {
        return $("//input[@name='last_trans']");
    }

    get Pwdfld()
    {
        return $("//input[@name='password']");
    }

    get ConfirmPwdfld()
    {
        return $("//input[@name='cnfrm_password']");
    }

    get Submitbtn()
    {
        return $("//input[@name='submit']");
    }

    async regIB(name, accno, dbno, dbpin, mob, pan, d, y, m, lasttrans, pwd, cpwd)
    {
        await this.AccHoldNamefld.setValue(name);
        await browser.pause(1000);
        await this.AccNofld.setValue(accno);
        await browser.pause(1000);
        await this.DBCardNofld.setValue(dbno);
        await browser.pause(1000);
        await this.DBCardPinfld.setValue(dbpin);
        await browser.pause(1000);
        await this.RegMobNofld.setValue(mob);
        await browser.pause(1000);
        await this.PanNofld.setValue(pan);
        await browser.pause(1000);
        await this.Datefld.click();
        await this.Datefld.setValue(d);
        await browser.pause(1000);
        await browser.keys(Key.ArrowRight);
        await this.Datefld.setValue(y);
        await browser.pause(1000);
        await browser.keys(Key.ArrowLeft);
        await this.Datefld.setValue(m);
        await browser.pause(1000);
        await this.LastTranscsfld.setValue(lasttrans);
        await browser.pause(1000);
        await this.Pwdfld.setValue(pwd);
        await browser.pause(1000);
        await this.ConfirmPwdfld.setValue(cpwd);
        await browser.pause(1000);
        await this.Submitbtn.click();
        await browser.pause(2000);
        let text = await browser.getAlertText();
        console.log(text);
        await browser.pause(2000);
        await browser.acceptAlert();
        await browser.pause(3000);
    }
}
export default new InternetBanking();