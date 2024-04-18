import { Key } from 'webdriverio'

class AccountForm
{
    get Namefld()
    {
        return $("//input[@name='name']");
    }

    get GenderDD()
    {
        return $("//select[@name='gender']");
    }

    get MobNofld()
    {
        return $("//input[@name='mobile']");
    }

    get EmailIdfld()
    {
        return $("//input[@name='email']");
    }

    get LandLineNofld()
    {
        return $("//input[@name='landline']");
    }

    get DateOfBirthfld()
    {
        return $("//input[@name='dob']");
    }

    get PanNofld()
    {
        return $("//input[@name='pan_no']");
    }

    get CitizenshipNofld()
    {
        return $("//input[@name='citizenship']");
    }

    get HomeAddfld()
    {
        return $("//input[@name='homeaddrs']");
    }

    get OfficeAddfld()
    {
        return $("//input[@name='officeaddrs']");
    }

    get StateDD()
    {
        return $("//select[@name='state']");
    }

    get CityDD()
    {
        return $("//select[@name='city']");
    }

    get Pincodefld()
    {
        return $("//input[@name='pin']");
    }

    get Areafld()
    {
        return $("//input[@name='arealoc']");
    }

    get Nomineefld()
    {
        return $("//input[@name='nominee_name']");
    }

    get NomineeAccNofld()
    {
        return $("//input[@name='nominee_ac_no']");
    }

    get AccountTypeDD()
    {
        return $("//select[@name='acctype']");
    }

    get SubmitBtn()
    {
        return $("//input[@name='submit']");
    }

    get confirmbtn()
    {
        return $("//input[@name='cnfrm-submit']");
    }

    async createAccount(un, gen, no, email, llno, d, m, y, pan, citizen, homeadd, offadd, state, city, pin, area, Nomname, nomaccno, acctype)
    {
        await this.Namefld.setValue(un);
        await browser.pause(1000);
        await this.GenderDD.click();
        await this.GenderDD.selectByVisibleText(gen);
        await browser.pause(1000);
        await this.MobNofld.setValue(no);
        await browser.pause(1000);
        await this.EmailIdfld.setValue(email);
        await browser.pause(1000);
        await this.LandLineNofld.setValue(llno);
        await browser.pause(1000);
        await this.DateOfBirthfld.click();
        await this.DateOfBirthfld.setValue(d);
        await browser.pause(1000);
        await browser.keys(Key.ArrowRight);
        await this.DateOfBirthfld.setValue(y);
        await browser.pause(1000);
        await browser.keys(Key.ArrowLeft);
        await this.DateOfBirthfld.setValue(m);
        await browser.pause(1000);
        await this.PanNofld.setValue(pan);
        await browser.pause(1000);
        await this.CitizenshipNofld.setValue(citizen);
        await browser.pause(1000);
        await this.HomeAddfld.setValue(homeadd);
        await browser.pause(1000);
        await this.OfficeAddfld.setValue(offadd);
        await browser.pause(1000);
        await this.StateDD.click();
        await this.StateDD.selectByVisibleText(state);
        await browser.pause(1000);
        await this.CityDD.click();
        await this.CityDD.selectByVisibleText(city);
        await browser.pause(1000);
        await this.Pincodefld.setValue(pin);
        await browser.pause(1000);
        await this.Areafld.setValue(area);
        await browser.pause(1000);
        await this.Nomineefld.setValue(Nomname);
        await browser.pause(1000);
        await this.NomineeAccNofld.setValue(nomaccno);
        await browser.pause(1000);
        await this.AccountTypeDD.click();
        await this.AccountTypeDD.selectByVisibleText(acctype);
        await browser.pause(1000);
        await this.SubmitBtn.click();
        await browser.pause(1000);
        await browser.execute( () => { window.scrollY});
        await browser.scroll(0, 300);
        await this.confirmbtn.click();
        await browser.pause(2000);
        let text = await browser.getAlertText();
        console.log(text);
        await browser.pause(2000);
        await browser.acceptAlert();
        await browser.pause(3000);
    }
}
export default new AccountForm();