import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';
import { DashboardPage } from '../pages/dashboardPage';
import { CartPage } from '../pages/cartPage';

let lp: LoginPage;
let dp: DashboardPage;
let cp: CartPage;

const email = "rrhits002@gmail.com";
const password = "Rohit@2026";
const productName = "ZARA COAT 3";

test.beforeEach(async ({ page }) => {

    lp = new LoginPage(page);
    dp = new DashboardPage(page);
    cp = new CartPage(page);

    await lp.goTo();
    await lp.validLogin(email, password);

    await dp.searchProductAddCart(productName);

    await dp.clickCart();

    
});

test("Verify product in cart and proceed to checkout", async () => {

    await cp.verifyProductDisplayed(productName);

    await expect(cp.checkout).toBeVisible();

    await cp.clickCheckout();

});