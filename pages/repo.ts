import {Page,Locator,test} from '@playwright/test'
import { loginpage } from './login'

export class repopage  extends loginpage{
 
    constructor(page:Page){
        super(page);

        
    }
     async openrepo1(){
        await this.clickprofile.click()
        
        await this.page.waitForLoadState();
        await this.clickrepo.click();
    }
    async createrepo(){
        await this.page.waitForLoadState();
        await this.newrepo.click();
        await this.page.waitForTimeout(5000);
    }
    async openrep(){    
        await this.page.waitForLoadState();
        await this.loginpagerepo.click();
        await this.page.waitForTimeout(5000);
    }
  

}