//This page will have all login methods and locators
import {Locator, Page} from '@playwright/test'

export class LoginPage{
    //class consisits of properties nothing but locators and methods
    page:Page
    email: Locator
    password:Locator
    loginBtn:Locator
    errorMessage:Locator
    homePageIdenifier:Locator
    forgotPasswordLink: Locator
    register: Locator
    registerhereLink: Locator

    //Create a constructor
    //All your locator should be present inside the constructor

    constructor(page:Page){
        this.page=page
        this.email = this.page.getByPlaceholder('email@example.com')
        this.password= this.page.getByPlaceholder('enter your passsword')
        this.loginBtn = this.page.locator('#login')
        this.errorMessage = this.page.locator('#toast-container')
        this.homePageIdenifier = this.page.locator("[routerlink='/dashboard/']")
        this.forgotPasswordLink = this.page.getByRole('link', {name:'Forgot password?'})
        this.register = this.page.getByRole('link', {name:'Register'})
        this.registerhereLink = this.page.getByText('Register here')

    }

//create the comand reusable methods

//navigate to url

async launchUrl(url:string)
{
    await this.page.goto(url)
}

//provide the username and password
async loginApplication(username:string, password:String)
{
    await this.email.fill(username)
    
    await this.password.fill(password)
   
    await this.loginBtn.click()

}

async clickForgotPasswordLink()
{
    await this.forgotPasswordLink.click()
}

async Register()
{
    await this.register.click()

}

async RegisterLink()
{
    await this.registerhereLink.click()

}

}