import { Page, Locator, expect } from "@playwright/test";

export class CartPage {

    page: Page;
    continueShopping: Locator;
    checkout: Locator;
    cartProducts: Locator;

    constructor(page: Page) {

        this.page = page;

        this.continueShopping = page.getByText('Continue Shopping');
        this.checkout = page.getByText('Checkout');
        this.cartProducts = page.locator("div.cartSection h3");
    }

    async verifyProductDisplayed(productName: string) {

        await expect(this.cartProducts.filter({ hasText: productName }))
            .toBeVisible();
    }

    async clickCheckout() {
        await this.checkout.click();
    }

    async clickContinueShopping() {
        await this.continueShopping.click();
    }

}