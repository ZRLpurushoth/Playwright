import{test,chromium} from "@playwright/test"

test("Video",async()=>{
 const browser=await chromium.launch()
 const cont=await browser.newContext({recordVideo:{dir:'tests/Videorecoder'}})
 const page=await cont.newPage()
 await page.goto('https://testautomationpractice.blogspot.com/')
 await page.locator('//a[text()="Download Files"]').scrollIntoViewIfNeeded()
 await page.waitForTimeout(3000)


})

test ("Amazon video",async()=>{
    const browser=await chromium.launch()
    const cont=await browser.newContext({recordVideo:{dir:'tests/Videorecoder'}})
    const page=await cont.newPage()
    await page.goto('https://www.bestdenki.com.sg/')
    //await page.locator('//span/div[text()="OPPO K14x 5G Smartphone, Prism Violet, 4GB RAM, 128GB Storage"]').scrollIntoViewIfNeeded()
    await page.locator('//div[text()="BC151NV"]').scrollIntoViewIfNeeded()
    await page.waitForTimeout(2000)

})