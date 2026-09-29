import { test ,chromium} from "@playwright/test";

test("Frames",async({page})=>{

    await page.goto("https://letcode.in/frame/")
    //by framlocator
   // const farme=await page.frameLocator("#firstFr")
   // await farme.locator('[name="fname"]').fill('R Purushothaman')

    //by name
  //const frame1=  await page.frame('firstFr')
 // await frame1.locator('[name="lname"]').fill('purushot123@gmail.com')

  //byUrl
  await page.goto('https://letcode.in/frame/frameui')
  await page.getByPlaceholder('Enter name')

})

test("innerFrames",async({page})=>{
await page.goto("https://letcode.in/frame/")
await page.frameLocator('#firstFr').frameLocator('[title="Inner Frame"]').locator('[name="email"]').fill('purushothaman123@gmail.com')
await page.waitForTimeout(3000)
})

test("FramesByName",async({page})=>{
await page.goto('https://letcode.in/frame/')
await page.frame('firstFr').frameLocator('[title="Inner Frame"]').locator('[name="email"]').fill('Purusho@gmail.com')
await page.waitForTimeout(2000)
})

test.only("FrameUsingUrl",async({page})=>{
    // await page.goto('https://letcode.in/frameui')
// const browser=await chromium.launch()
      
     await page.goto('https://letcode.in/frameui')
    await page.locator('[name="lname"]').fill('purusho123@gmail.com')
     await page.goto('https://letcode.in/innerframe')
     await page.locator('[name="email"]').fill('purusho123@gmail.com')            
    // await outer.frameLocator('[src="/innerframe"]').locator('[name="email"]').fill('purusho123@gmail.com') //'https://letcode.in/innerframe'
     // await page.locator('[name="email"]').fill('purusho123@gmail.com')
     await page.waitForTimeout(3000)
     await page.goBack()
     await page.waitForTimeout(3000)
     await page.goBack()
})