import{expect, test} from "@playwright/test"
import { on } from "node:cluster"
import { type } from "node:os"

test("AlertMethod",async({page},{confirm},{prompt})=>{

    await page.goto('https://testautomationpractice.blogspot.com/')

    page.on('dialog', async(dialog)=>{
           const type = dialog.type()
          const msg =  dialog.message()
          console.log(type, msg);
          

    
   if(type==='alert'){
            dialog.accept()    
    }else if(type==='confirm'){  
            dialog.accept()

    }else if (type==='prompt'){
        dialog.accept('purushothaman R')
    }

   
    })
     // await page.locator('[id="alertBtn"]').click()
   // await page.locator('//button[text()="Confirmation Alert"]').click()
    await page.locator('[onclick="myFunctionPrompt()"]').click()
    const text=await page.locator('[onclick="myFunctionPrompt()"]').textContent()
    console.log(text);
    
    await page.waitForTimeout(3000)
})
   