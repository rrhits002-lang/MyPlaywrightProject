//
import {test, expect} from '@playwright/test'

import { LoginPage } from  '../pages/loginPage'

import  testData from '../testData/testdata.json'

//we will validate everything with hardcoded value

lp:LoginPage
test('Login using Valid details', async ({page})=>{
/*
This seems to be first change
*/
const lp = new LoginPage(page)
await lp.launchUrl(testData.url)
await lp.loginApplication(testData.email,testData.password)
await expect(lp.homePageIdenifier).toBeVisible()
})
//check Invalid login code is written right
test('Invalid login', async ({page})=>{

const lp = new LoginPage(page)
await lp.launchUrl(testData.url)
await lp.loginApplication(testData.email,testData.inValidPassword)
await expect(lp.errorMessage).toBeVisible()

})
/*
This seems to be a change
*/

test('forgotPassword', async({page})=>{

const lp = new LoginPage(page)
await lp.launchUrl(testData.url)
await lp.forgotPasswordLink.click()

})

test('Register Link', async ({page})=>{
const lp = new LoginPage(page)
await lp.launchUrl(testData.url)
await page.waitForTimeout(3000)

await lp.register.click()

})

test('click registerlnk', async ({page})=>{
const lp = new LoginPage(page)
await lp.launchUrl(testData.url)
await lp.registerhereLink.click()

})
