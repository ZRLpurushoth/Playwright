import{test} from "@playwright/test"

test("xpath",async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/")
    await page.locator('//input[@id="name"]').pressSequentially('Purushothaman R',{ delay: 1000 })
    await page.locator('//input[@placeholder="Enter EMail"]').fill('purushoth06@gmail.com')
    await page.locator('//input[@class="form-control"][@id="phone"]').fill("8248434039")
    await page.locator('//label[text()="Address:"]').fill("23/12 B Vanathiraya palaiya street Thiruvannamalai-606601")
    await page.waitForTimeout(3000)
})

test("contains",async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/")
    await page.locator('//label[contains(@for,"mon")]').click()
    await page.waitForTimeout(2000)
})
test("andAndor",async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/")

  //  await page.locator('//a[@class="gb_C gb_7a" and @role="button"]')
    await page.locator('//input[@class="form-check-input"]')[1]
    await page.waitForTimeout(2000)


   /* const ar=await page.locator('//span[contains(text(),"your AI browsing assistant")]').textContent()
    console.log(ar);
    
    await page.waitForTimeout(2000)*/

})

test.only("google",async({page})=>{

    await page.goto("https://www.google.com/")
    await page.locator('//textarea[contains(@data-ved,"0ahUKE")]').fill('ind vs eng')
    await page.locator('//textarea[contains(@data-ved,"0ahUKE")]').press('Enter')
    await page.waitForTimeout(2000)
    await page.goBack()
    await page.waitForTimeout(5000)
})
