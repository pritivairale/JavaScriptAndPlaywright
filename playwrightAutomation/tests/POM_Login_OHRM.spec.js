import {test , expect} from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import { Dashboard } from "../pages/Dashboard";
import { PIMPage } from "../pages/PIMPage";

test('OrangeHRM Login' , async ({page}) => {
    const logPage = new LoginPage(page);
    await logPage.goto();
    await logPage.login('Admin' , 'admin123' );

    const dasPage = new Dashboard(page);
    await dasPage.validateDashboard();
    await dasPage.gotoPIM();

    const pim = new PIMPage(page);
    await pim.empList(Bharti , id123);

});