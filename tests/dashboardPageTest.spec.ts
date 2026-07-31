
import {test, expect} from '@playwright/test'
import { LoginPage } from '../pages/loginPage'
import { DashboardPage } from '../pages/dashboardPage'

const url = 'https://rahulshettyacademy.com/client/#/auth/login'
let email = 'rrhits002@gmail.com'
let password = 'Rohit@2026'
let productName = 'ADIDAS ORIGINAL'

let lp:LoginPage
let dp:DashboardPage

test.beforeEach(async ({page})=>{

const lp = new LoginPage(page)
 dp = new DashboardPage(page)
await lp.launchUrl(url)
await lp.loginApplication(email, password)
await expect(lp.homePageIdenifier).toBeVisible()
})

test ('add item to cart', async()=>{

await dp.searchProduct(productName, 2)
await expect(dp.addToCartMessage).toHaveText('Product Added To Cart')
})

test('view the product', async()=>{

await dp.searchProduct(productName, 0)
await expect(dp.viewPageProductName).toHaveText(productName)

})