//

import {Locator, Page} from '@playwright/test'

export class HomePage{

    page:Page 
    addToCart: Locator
    view: Locator

constructor(page:Page){

this.page=page
this.addToCart=this.page.getByText('Add To Cart')
this.view= this.page.getByText('View')

}

}