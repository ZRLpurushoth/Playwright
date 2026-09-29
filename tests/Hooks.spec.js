import{chromium, test} from "@playwright/test"


/*test("bag",async({page})=>{

    await page.goto("https://www.saucedemo.com/")
    await page.locator('#user-name').fill('standard_user')
    await page.locator('#password').fill('secret_sauce')
    await page.click('#login-button')
    await page.click('#add-to-cart-sauce-labs-backpack')
    await page.click('//button[text()="Open Menu"]')
    await page.click('#logout_sidebar_link')
    await page.waitForTimeout(2000)
})

test('cycle',async({page})=>{

    await page.goto("https://www.saucedemo.com/")
    await page.locator('#user-name').fill('standard_user')
    await page.locator('#password').fill('secret_sauce')
    await page.click('#login-button')
    await page.click('#add-to-cart-sauce-labs-bike-light')
    await page.click('//button[text()="Open Menu"]')
    await page.click('#logout_sidebar_link')
    await page.waitForTimeout(2000)

})
test("tshirt",async({page})=>{

    await page.goto("https://www.saucedemo.com/")
    await page.locator('#user-name').fill('standard_user')
    await page.locator('#password').fill('secret_sauce')
    await page.click('#login-button')
    await page.click('#add-to-cart-sauce-labs-onesie')
    await page.click('//button[text()="Open Menu"]')
    await page.click('#logout_sidebar_link')
    await page.waitForTimeout(2000)

})*/
let browser;
let page;
test.beforeAll("chromium",async()=>{
     browser=await chromium.launch()
     page=await browser.newPage()
})
test.beforeEach("goto",async()=>{
    await page.goto('https://www.saucedemo.com/inventory.html')

})
test.beforeEach("login",async()=>{
    await page.locator('#user-name').fill('standard_user')
    await page.locator('#password').fill('secret_sauce')
    await page.click('#login-button')

})
test('bag',async()=>{

     await page.click('#add-to-cart-sauce-labs-backpack')   
     await page.waitForTimeout(2000) 

})
test('cycle',async()=>{

     await page.click('#add-to-cart-sauce-labs-bike-light')
     await page.waitForTimeout(2000)

})
test('tshirt',async()=>{
    await page.click('#add-to-cart-sauce-labs-onesie')
    await page.waitForTimeout(2000)
})
test.afterEach(async()=>{
     await page.click('#react-burger-menu-btn')
    await page.click('#logout_sidebar_link')
     await page.waitForTimeout(2000)
})
test.afterAll(async()=>{
    await page.close()
    await browser.close()
})

