import{chromium, test} from "@playwright/test"
import { log } from "console"

/*test("InbuildLocators",async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/")
    await page.getByRole('textbox',{name:'Enter Name'}).fill("purushothaman R")
    //getByText
        const vara= await page.getByText('Dynamic Button').textContent()
        console.log(vara);
        
    //getByPlaceHolder
    await page.getByPlaceholder('Enter EMail').fill("Purushoth@06gmail.com")
    await page.getByLabel('Sunday').check()
    await page.getByLabel('Monday').click()

       await page.waitForTimeout(5000)

})

test("TestId",async({page})=>{

    await page.goto("https://jatin99.github.io/Playwright-demo-app/")
    await page.getByTestId('username-input').fill('purushothaman R')
    await page.getByTitle('Click to toggle status').nth(1).click()
    await page.waitForTimeout(5000)
})

test("ByAltText",async({page})=>{

   await page.goto('https://testautomationpractice.blogspot.com/p/playwrightpractice.html')

   const img=await page.getByAltText('logo image')
   const text=await img.getAttribute('alt')
   console.log(text)
   await page.waitForTimeout(5000)
   
})*/

test("getByRole",async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/")
    await page.getByRole("textbox",{name:'Enter Name'}).pressSequentially('R Purushothaman',{delay: 1000})
    await page.waitForTimeout(3000)
})

test("Bytext",async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/")
   const text= await page.getByText('Data Entry Form').textContent()
   console.log(text);
   
   await page.waitForTimeout(2000)
})

test("Bylabel",async({page})=>{

await page.goto("https://testautomationpractice.blogspot.com/")
await page.getByLabel('Sunday').check()
await page.getByLabel('Monday').click()
await page.waitForTimeout(2000)
})

test ("bytitle",async({page})=>{

    await page.goto("https://jatin99.github.io/Playwright-demo-app/")
    const vari=await page.getByTitle('Click to toggle status').nth(2).click()
    await page.waitForTimeout(2000)
})

test("byatltest",async({page})=>{

    await page.goto("https://www.cricbuzz.com/")
    const img=await page.getByAltText('if-theres-no-noise-theres-no-fun-rohit-unfazed-by-criticism')
    const atri=await img.getAttribute('alt')
    console.log(atri);
    

})

test("byTest-id",async({page})=>{

    await page.goto("https://jatin99.github.io/Playwright-demo-app/")
    await page.getByTestId('username-input').pressSequentially('purushothaman R')
    await page.waitForTimeout(2000)
})

test.only("placeholder",async({page})=>{

    await page.goto("https://jatin99.github.io/Playwright-demo-app/")
    await page.getByPlaceholder('Enter password').fill('purushoth@06')
    await page.waitForTimeout(3000)
})
