import HomePage from "../../pageobjects/OBS/HomePage.js";
import AccOpenFormPage from "../../pageobjects/OBS/AccOpenFormPage.js";
import generic from "../../pageobjects/generic.js";

describe ('createAcc', () =>
{
    it('Actions', async() =>
    {
        await generic.launchOBS();
        await expect(browser).toHaveUrl("http://rmgtestingserver/domain/Online_Banking_System/");
        await HomePage.openAccount();
        await AccOpenFormPage.createAccount("virat", "Male", 8989898989, "uthpal.ramesh10@gmail.com", 666, "10", "Feb", "1996", "AXOPV4331B", 777, "13th main Rajajinagar", "Kathriguppe", "California", "Miami", 560011, "Rajaji", "nom", 56565656, "Saving");
    })
})