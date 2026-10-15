import{expect, test,chromium} from "@playwright/test"
import { on } from "node:cluster"
import { dir } from "node:console"
import { type } from "node:os"
import path from "node:path"

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


test.only("alerts",async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')

    await page.on("dialog",async dialog =>{
        const msg=await dialog.message()
        const type=await dialog.type()
        console.log(msg,type)

    if(type=="alert"){
        dialog.accept()
    }else if(type=="confirm"){
        dialog.accept()
    }else if(type=="prompt"){
        dialog.accept('Purushoth')
    }


    })

   
    await page.locator('//button[text()="Prompt Alert"]').click()
    const text=await page.locator('//button[text()="Prompt Alert"]').textContent()
    await page.screenshot({path:'tests/ScreecShots/Prompt.png',fullPage:true})
    console.log(text)
    await page.waitForTimeout(3000)
})
   