import{test} from "@playwright/test"

test("ScreenShot",async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')
    //normalScreenshot
   // await page.screenshot({path:'tests/ScreecShots/img1.png'})
   //fullpage
   //await page.screenshot({path:'tests/ScreecShots/img2.png',fullPage:true})
   //particular Element
  await page.locator('//h2[text()="Alerts & Popups"]').screenshot({path:'tests/ScreecShots/img3.png'})
  
   })