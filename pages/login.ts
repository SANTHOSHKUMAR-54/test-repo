import { test, Page, Locator } from '@playwright/test'
import { configDotenv } from 'dotenv'
configDotenv()


export class loginpage {
    protected page: Page

    readonly signin: Locator
    readonly emaillocator: Locator
    readonly passwordlocator: Locator
    readonly submitlocator: Locator
    readonly email: string
    readonly password: string
    readonly newrepo: Locator
    readonly loginpagerepo: Locator
    readonly clickprofile: Locator
    readonly clickrepo: Locator


    constructor(page: Page) {
        this.page = page
        this.signin = page.locator('a[href="/login"]').filter({ visible: true });
        this.emaillocator = page.locator('#login_field');
        this.passwordlocator = page.locator('#password');
        this.submitlocator = page.locator('input[type="submit"]');
        this.email = process.env.email || ''
        this.password = process.env.password || ''
        this.newrepo = page.getByRole('link', { name: 'New repository' })
        this.loginpagerepo = page.getByRole('link', { name: 'santhoshoggy/playwright-learning', exact: true })
        this.clickprofile = page.getByRole('button', { name: 'Open user navigation menu' })
        this.clickrepo = page.getByRole('link', { name: 'Repositories' })


    }
    async clicksign(email: string, password: string) {

       try{
            await this.clickSignin();
            await this.enterEmail(email);
            await this.enterPassword(password);
            await this.clickSubmit();
            await this.page.waitForURL('https://github.com/')
            await this.page.context().storageState({ path: 'state.json' });
       }
       catch{
        console.log("already logged in")
       }
       
    }





    async clickSignin() {
        await this.signin.click()
    }
    async gotoLoginPage() {
        await this.page.goto('/')
        await this.page.waitForURL('https://github.com/')
    }
    async enterEmail(email: string) {
        await this.emaillocator.fill(email)
    }
    async enterPassword(password: string) {
        await this.passwordlocator.fill(password)
        await this.page.waitForLoadState()
    }
    async clickSubmit() {
        await this.submitlocator.click()
    }






}