import HomePage from "../../pageobjects/OBS/HomePage.js";
import StaffLoginPage from "../../pageobjects/OBS/StaffLoginPage.js";
import StaffHomePage from "../../pageobjects/OBS/StaffHomePage.js";
import generic from "../../pageobjects/generic.js";

describe('OBS', () =>
{
    it('approve', async() =>
{
    await generic.launchOBS();
    await expect(browser).toHaveUrl("http://rmgtestingserver/domain/Online_Banking_System/");
    await HomePage.stafflogin();
    await StaffLoginPage.login(210001, "password");
    await StaffHomePage.approveCustAppl(884535799);

})
})