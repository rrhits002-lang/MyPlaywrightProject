// dashboard page: all the locators and methods present on the page should be provided here

import {Locator, Page} from "@playwright/test";

export class DashboardPage{

    page:Page
    products: Locator
    homePageProductPrice: string
    viewPageProductName: Locator
    viewPageProductPrice: Locator
    addToCartMessage: Locator
    cart:Locator

    constructor(page:Page)
    {
    this.page = page
    this.products = this.page.locator('div.card-body')
    this.homePageProductPrice = ""
    this.viewPageProductName = this.page.locator('.rtl-text h2')
    this.viewPageProductPrice = this.page.locator('.rtl-text h3')
    this.addToCartMessage = this.page.locator('#toast-container .toast-message')    
    this.cart = this.page.locator("[routerlink='/dashboard/cart']")
}

async searchProduct(productName:string, index:number){
//wait for atleast one product to load on the page
await this.products.nth(0).waitFor()

const countOfProduct = await this.products.count()
console.log(countOfProduct);

for (let i=0; i<countOfProduct; i++)
{
    const productText = await this.products.nth(i).locator('b').textContent()
   
    if(productText?.trim().toLowerCase() === productName.trim().toLowerCase())
    {
        await this.products.nth(i).locator('div.text-muted').innerText()

        await this.products.nth(i).locator('button').nth(index).click()

        break
    }

}

}


}