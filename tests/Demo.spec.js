import{test,chromium}from '@playwright/test'


/*test("browser launch",async()=>{

    const browser=await chromium.launch()
    const page= await browser.newPage()
    await page.goto("https://www.demoblaze.com/")
    await page.waitForTimeout(3000)

})*/


/*test("Demo",async({page})=>{

    await page.goto("https://www.demoblaze.com/")
    await page.locator("[id='login2']").click()
    await page.locator("[id='loginusername']").fill("Purushoth@07")
    await page.locator("[id='loginpassword']").fill("purushothaman R")
    //await page.waitForTimeout(2000)
    await page.locator("[onclick='logIn()']").click() 
   // await page.waitForTimeout(5000)  
   // await page.locator('[id="logout2"]').click()
    await page.waitForTimeout(5000)

})*/

test("css",async({page})=>{

    await page.goto("https://rahulshettyacademy.com/loginpagePractise/")
//byIdName
    await page.locator('#username').pressSequentially("rahulshettyacademy")
    //byClassname
    await page.locator('.form-control').nth(1).fill('Learning@830$3mK2')
    //byAtributeAndAtributeValue
    await page.locator('[value="admin"]').click()
  //  await page.locator('[id="okayBtn"]').click()
   // await page.locator('.form-control').nth(1).click()
    //await page.locator('[type="checkbox"]').click()
   // await page.locator('[id="signInBtn"]').click()

    await page.waitForTimeout(10000)


})