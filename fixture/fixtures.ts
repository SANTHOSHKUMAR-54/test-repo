import {test as testBase,Page} from '@playwright/test';
import { loginpage } from '../pages/login';
import { repopage } from '../pages/repo';


type fixture ={
   signin : loginpage;
   repo : repopage;
   logout :loginpage
}

export const test = testBase.extend<fixture>({

    signin:async({page},use)=>{
        await use(new loginpage(page))
    },

    repo:async({page},use)=>{
        await use(new repopage(page))
    },
    logout:async({page},use)=>{
        await use(new loginpage(page))
    }
});