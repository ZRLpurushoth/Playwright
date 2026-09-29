
import{test,chromium} from '@playwright/test';

test("Browser Launch",async()=>{

    const browser=await chromium.launch()
    const page= await browser.newPage()
    await page.goto("https://www.google.com/")
    await page.waitForTimeout(2000)

})
test("FB Login",async()=>{

    const browser=await chromium.launch()
    const page=await browser.newPage()
    await page.goto("https://www.facebook.com/login/")
    await page.waitForTimeout(2000)
})

test.skip("instagram Login",async()=>{
    const browser=await chromium.launch()
    const page=await browser.newPage()
    await page.goto("https://www.instagram.com/accounts/login/?hl=en")
    await page.waitForTimeout(2000)
})

test("twiter Login",async()=>{
    const browser=await chromium.launch()
    const page=await browser.newPage()
    await page.goto("https://x.com/login")

})



