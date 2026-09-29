import { test,context } from "@playwright/test";

test('windows handling',async({page,context})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')

    //await page.locator(#PopUp).click()

   const [newWindow]=await Promise.all([context.waitForEvent('page'),page.locator('#PopUp').click()])
   const allpages=await context.pages()
   console.log(allpages.length);

   for(const i of allpages){
    const title=await i.title()
    console.log(title); 


    if(title==='Selenium'){
        await i.waitForLoadState('networkidle')
        await i.locator('//a[contains(text(),"Visit Conference")]').click()
        await i.waitForTimeout(2000)
    }else if(title==='playwright'){
           await i.waitForLoadState('networkidle')
        await i.locator('//a[text()="Get started"]').click()
        await i.waitForTimeout(2000)
    }
   }   
}) 


   test.only('Tabs handling',async({page,context})=>{

    await page.goto('https://testautomationpractice.blogspot.com/')
    page.locator('[onclick="myFunction()"]').scrollIntoViewIfNeeded()
  const [newPage]=  await Promise.all([context.waitForEvent('page'),page.locator('[onclick="myFunction()"]').click()])
 // const allpages=await context.pages()
 // cosole.log(allpages.length)

//   for(const i of allpages){
//     const title=await i.title()
//     console.log(i);
    
//   }

await newPage.locator('[name="q"]').fill('Manual Testing')
await newPage.locator('[value="Search"]').click()
await newPage.waitForTimeout(2000)

})