import HomePage from "../../pageobjects/OBS/HomePage.js";
import IntBankingPage from "../../pageobjects/OBS/RegIntBankPage.js";
import generic from "../../pageobjects/generic.js";

describe('OBS', () =>
{
    it('IntBankingReg', async() =>
{
    await generic.launchOBS();
    await expect(browser).toHaveUrl("http://rmgtestingserver/domain/Online_Banking_System/");
    // await HomePage.RegIntBanking();
    await IntBankingPage.regIB("virat", 1011451011302, "421355634289", "1161", 8989898989, "AXOPV4331B", "10", "1996", "Feb", 0, "Virushka@123", "Virushka@123");
})
})